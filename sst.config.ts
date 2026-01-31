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
    // DynamoDB Orders table with GSIs for filtering
    const ordersTable = new sst.aws.Dynamo("OrdersTable", {
      fields: {
        orderId: "string",
        createdAt: "string",
        status: "string",
        customerEmail: "string",
      },
      primaryIndex: { hashKey: "orderId" },
      globalIndexes: {
        statusIndex: { hashKey: "status", rangeKey: "createdAt" },
        emailIndex: { hashKey: "customerEmail", rangeKey: "createdAt" },
      },
    });

    // SES email identity
    const email = new sst.aws.Email("OrderEmail", {
      sender: "orders@candycoat.co",
    });

    const nextjs = new sst.aws.Nextjs("site", {
      // Optional: Add custom domain
      // domain: {
      //   name: "candycoat.co",
      //   aliases: ["www.candycoat.co"],
      // },

      // Link resources
      link: [ordersTable, email],

      // Environment variables
      environment: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://candycoat.co",
      },
    });

    return {
      url: nextjs.url,
      ordersTable: ordersTable.name,
    };
  },
});
