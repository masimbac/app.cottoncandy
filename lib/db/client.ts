import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { Resource } from "sst";

const client = new DynamoDBClient({});

export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

export const ORDERS_TABLE_NAME = Resource.OrdersTable.name;
