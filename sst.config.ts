import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "candycoat",
      region: "us-east-1", // Change to your preferred region
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        // Optional: Add custom domain
        // customDomain: {
        //   domainName: "candycoat.co",
        //   domainAlias: "www.candycoat.co",
        // },

        // Environment variables
        environment: {
          NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://candycoat.co",
        },

        // CloudFront distribution settings
        cdk: {
          distribution: {
            defaultBehavior: {
              viewerProtocolPolicy: "redirect-to-https" as any,
            },
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
        CloudFrontDistributionId: site.cdk?.distribution.distributionId,
      });
    });
  },
} satisfies SSTConfig;
