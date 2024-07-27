import React from "react";
import GooglePayComponent from "../components/GooglePayButton";
import PageTitle from "../components/PageTitle";
import "./DonationPage.css";

const DonationPage = () => {
  return (
    <div className="donation-page">
      <PageTitle title="Support Us" />
      <p>
        Your support helps us to keep providing great content. You can donate
        using the method below:
      </p>

      <div className="donation-methods">
        <div className="method">
          <h2>Google Pay</h2>
          <GooglePayComponent />
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
