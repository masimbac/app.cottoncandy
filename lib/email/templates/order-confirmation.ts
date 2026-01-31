import type { Order } from "@/lib/types/order";
import type { EFTPaymentDetails } from "../ses";

export function generateOrderConfirmationEmail(
  order: Order,
  eftDetails: EFTPaymentDetails
): { subject: string; html: string; text: string } {
  const subject = `Order Confirmation - ${order.orderId}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #2d2d2d;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 3px solid #ff8fb1;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      color: #2d2d2d;
    }
    .header .brand {
      color: #ff8fb1;
    }
    .section {
      margin: 30px 0;
    }
    .section-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #2d2d2d;
    }
    .payment-box {
      background: #fff9e6;
      border: 2px solid #fbbf24;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
    }
    .payment-box h2 {
      margin-top: 0;
      color: #d97706;
      font-size: 22px;
    }
    .payment-details {
      background: white;
      border-radius: 8px;
      padding: 15px;
      margin: 15px 0;
    }
    .payment-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .payment-row:last-child {
      border-bottom: none;
    }
    .payment-label {
      color: #6b6b6b;
      font-size: 14px;
    }
    .payment-value {
      font-weight: bold;
      color: #2d2d2d;
    }
    .reference-box {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
    }
    .reference-box strong {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }
    .reference-number {
      font-size: 20px;
      font-weight: bold;
      color: #ff8fb1;
      letter-spacing: 1px;
    }
    .important-note {
      background: #fef3c7;
      padding: 12px;
      border-radius: 6px;
      margin-top: 15px;
      font-size: 14px;
    }
    .order-items {
      background: #f9fafb;
      border-radius: 8px;
      padding: 15px;
    }
    .item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .item:last-child {
      border-bottom: none;
    }
    .item-details {
      flex: 1;
    }
    .item-name {
      font-weight: bold;
      color: #2d2d2d;
    }
    .item-size {
      color: #6b6b6b;
      font-size: 14px;
    }
    .item-price {
      font-weight: bold;
      color: #ff8fb1;
    }
    .totals {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 2px solid #e5e7eb;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
    .total-row.final {
      font-size: 18px;
      font-weight: bold;
      color: #ff8fb1;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 2px solid #ff8fb1;
    }
    .shipping-address {
      background: #f9fafb;
      padding: 15px;
      border-radius: 8px;
      line-height: 1.8;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b6b6b;
      font-size: 14px;
    }
    .button {
      display: inline-block;
      background: #ff8fb1;
      color: white;
      padding: 12px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Candy.<span class="brand">Coat</span></h1>
    <p style="color: #6b6b6b; margin-top: 10px;">Thank you for your order!</p>
  </div>

  <div class="section">
    <p>Hi ${order.customerFirstName},</p>
    <p>We've received your order and are excited to get your Cotton Candy body mousse to you!</p>
    <p><strong>Order Number:</strong> ${order.orderId}</p>
  </div>

  <div class="payment-box">
    <h2>💳 Payment Details (EFT)</h2>
    <p style="margin-bottom: 15px;">Please make an EFT payment to complete your order:</p>

    <div class="payment-details">
      <div class="payment-row">
        <span class="payment-label">Bank</span>
        <span class="payment-value">${eftDetails.bank}</span>
      </div>
      <div class="payment-row">
        <span class="payment-label">Account Holder</span>
        <span class="payment-value">${eftDetails.accountHolder}</span>
      </div>
      <div class="payment-row">
        <span class="payment-label">Account Type</span>
        <span class="payment-value">${eftDetails.accountType}</span>
      </div>
      <div class="payment-row">
        <span class="payment-label">Account Number</span>
        <span class="payment-value">${eftDetails.accountNumber}</span>
      </div>
      <div class="payment-row">
        <span class="payment-label">Branch Code</span>
        <span class="payment-value">${eftDetails.branchCode}</span>
      </div>
      <div class="payment-row">
        <span class="payment-label">Amount</span>
        <span class="payment-value" style="font-size: 18px; color: #ff8fb1;">R${eftDetails.amount}</span>
      </div>
    </div>

    <div class="reference-box">
      <strong>Payment Reference (IMPORTANT):</strong>
      <div class="reference-number">${eftDetails.reference}</div>
    </div>

    <div class="important-note">
      <strong>⚠️ Important:</strong> Please use your order number <strong>${eftDetails.reference}</strong> as the payment reference so we can identify your payment and process your order promptly.
    </div>
  </div>

  <div class="section">
    <div class="section-title">Order Summary</div>
    <div class="order-items">
      ${order.items.map(item => `
        <div class="item">
          <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-size">${item.sizeLabel} × ${item.quantity}</div>
          </div>
          <div class="item-price">R${((item.subtotal / 100).toFixed(2))}</div>
        </div>
      `).join('')}

      <div class="totals">
        <div class="total-row">
          <span>Subtotal:</span>
          <span>R${(order.subtotal / 100).toFixed(2)}</span>
        </div>
        <div class="total-row">
          <span>Delivery:</span>
          <span>${order.shippingCost === 0 ? 'FREE' : 'R' + (order.shippingCost / 100).toFixed(2)}</span>
        </div>
        <div class="total-row final">
          <span>Total:</span>
          <span>R${(order.total / 100).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Shipping Address</div>
    <div class="shipping-address">
      ${order.customerFirstName} ${order.customerLastName}<br>
      ${order.shippingAddress}<br>
      ${order.shippingAddress2 ? order.shippingAddress2 + '<br>' : ''}
      ${order.shippingCity}, ${order.shippingProvince} ${order.shippingPostalCode}<br>
      ${order.shippingCountry}<br>
      ${order.customerEmail}
      ${order.customerPhone ? '<br>' + order.customerPhone : ''}
    </div>
  </div>

  <div class="section">
    <div class="section-title">What happens next?</div>
    <ol style="padding-left: 20px;">
      <li>Complete your EFT payment using the details above</li>
      <li>We'll confirm your payment (usually within 1-2 business days)</li>
      <li>Your order will be processed and packaged</li>
      <li>You'll receive tracking details once shipped</li>
    </ol>
  </div>

  <div class="footer">
    <p>Questions? Reply to this email or contact us at orders@candycoat.co</p>
    <p style="margin-top: 20px;">
      <strong>Candy.Coat</strong><br>
      South Africa's Premium Body Mousse<br>
      <a href="https://candycoat.co" style="color: #ff8fb1;">candycoat.co</a>
    </p>
  </div>
</body>
</html>
  `;

  const text = `
Order Confirmation - ${order.orderId}

Hi ${order.customerFirstName},

We've received your order and are excited to get your Cotton Candy body mousse to you!

Order Number: ${order.orderId}

PAYMENT DETAILS (EFT)
Please make an EFT payment to complete your order:

Bank: ${eftDetails.bank}
Account Holder: ${eftDetails.accountHolder}
Account Type: ${eftDetails.accountType}
Account Number: ${eftDetails.accountNumber}
Branch Code: ${eftDetails.branchCode}
Amount: R${eftDetails.amount}

PAYMENT REFERENCE (IMPORTANT): ${eftDetails.reference}

⚠️ Please use your order number ${eftDetails.reference} as the payment reference.

ORDER SUMMARY
${order.items.map(item =>
  `${item.name} - ${item.sizeLabel} × ${item.quantity}: R${(item.subtotal / 100).toFixed(2)}`
).join('\n')}

Subtotal: R${(order.subtotal / 100).toFixed(2)}
Delivery: ${order.shippingCost === 0 ? 'FREE' : 'R' + (order.shippingCost / 100).toFixed(2)}
Total: R${(order.total / 100).toFixed(2)}

SHIPPING ADDRESS
${order.customerFirstName} ${order.customerLastName}
${order.shippingAddress}
${order.shippingAddress2 || ''}
${order.shippingCity}, ${order.shippingProvince} ${order.shippingPostalCode}
${order.shippingCountry}
${order.customerEmail}
${order.customerPhone || ''}

WHAT HAPPENS NEXT?
1. Complete your EFT payment using the details above
2. We'll confirm your payment (usually within 1-2 business days)
3. Your order will be processed and packaged
4. You'll receive tracking details once shipped

Questions? Reply to this email or contact us at orders@candycoat.co

Candy.Coat
South Africa's Premium Body Mousse
candycoat.co
  `;

  return { subject, html, text };
}
