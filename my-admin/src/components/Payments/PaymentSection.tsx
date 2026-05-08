"use client"

import type React from "react"
import "./PaymentSection.scss"

interface PaymentSectionProps {
  title?: string
  description?: string
  buttonText?: string
  paymentLink?: string
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  title = "Ready to Get Started?",
  description = "Complete your payment securely with our partner.",
  buttonText = "Proceed to Payment",
  paymentLink = "https://paystack.shop/pay/accordiaappservicepay",
}) => {
  return (
    <section className="payment-section" id="payment-section">
      <div className="payment-container">
        <div className="payment-content">
          <h2 className="payment-heading">{title}</h2>
          <p className="payment-description">{description}</p>

          <div className="payment-button-wrapper">
            <a href={paymentLink} className="payment-btn" target="_blank" rel="noopener noreferrer">
              {buttonText}
              <svg
                className="arrow-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentSection
