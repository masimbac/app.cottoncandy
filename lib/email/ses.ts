import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Resource } from "sst";
import type { Order } from "@/lib/types/order";
import { generateOrderConfirmationEmail } from "./templates/order-confirmation";

const sesClient = new SESClient({});

export interface EFTPaymentDetails {
  bank: string;
  accountHolder: string;
  accountType: string;
  accountNumber: string;
  branchCode: string;
  reference: string;
  amount: string;
}

export async function sendOrderConfirmationEmail(order: Order): Promise<void> {
  const eftDetails: EFTPaymentDetails = {
    bank: "FNB/RMB",
    accountHolder: "Candy.Coat",
    accountType: "FNB Private Clients Current Account",
    accountNumber: "62434208709",
    branchCode: "250655",
    reference: order.orderId,
    amount: (order.total / 100).toFixed(2),
  };

  const { subject, html, text } = generateOrderConfirmationEmail(order, eftDetails);

  const command = new SendEmailCommand({
    Source: Resource.OrderEmail.sender,
    Destination: {
      ToAddresses: [order.customerEmail],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: html,
          Charset: "UTF-8",
        },
        Text: {
          Data: text,
          Charset: "UTF-8",
        },
      },
    },
  });

  try {
    await sesClient.send(command);
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
    throw error;
  }
}
