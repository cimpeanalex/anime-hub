import React from "react";
import GooglePayButton from "@google-pay/button-react";

const GooglePayComponent = () => {
  return (
    <GooglePayButton
      environment="TEST" // Schimbați în "PRODUCTION" pentru producție
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example", // Înlocuiți cu gateway-ul dvs.
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "BCR2DN6TZ8I6F7M", // Înlocuiți cu merchant ID-ul dvs.
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "1.00",
          currencyCode: "USD",
          countryCode: "US",
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("Payment successful", paymentRequest);
        // Aici puteți trimite paymentRequest către serverul dvs. pentru a finaliza tranzacția
      }}
      existingPaymentMethodRequired={false} // Setează la true dacă doriți să afișați doar metodele de plată existente
    />
  );
};

export default GooglePayComponent;
