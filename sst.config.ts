/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "candycoat",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const nextjs = new sst.aws.Nextjs("site", {
      // Optional: Add custom domain
      // domain: {
      //   name: "candycoat.co",
      //   aliases: ["www.candycoat.co"],
      // },

      // Environment variables
      environment: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://candycoat.co",
      },
    });

    return {
      url: nextjs.url,
    };
  },
});
