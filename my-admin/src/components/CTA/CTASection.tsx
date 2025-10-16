"use client"

import type React from "react"
import  "./CTASection.scss"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to join a trusted community for professionals?",
  description = "Be part of Harmony's early adopters – network, find gigs, and grow together.",
  primaryButtonText = "Join our WhatsApp Community",
  secondaryButtonText = "Hire Talent",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="heading">{title}</h2>
        <p className="description">{description}</p>
        <div className="button-group">
          <button className="primary-btn1" onClick={onPrimaryClick}>
            {primaryButtonText}
          </button>
          <button className="secondary-btn2" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
