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
  description = "Be part of Accordia's early adopters – network, find gigs, and grow together.",
  primaryButtonText = "Service Providers",
  secondaryButtonText = "Service Seekers",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="cta-section" id="join-section">
      <div className="container">
        <h2 className="heading">{title}</h2>
        <p className="description">{description}</p>
        <div className="button-group">
           <a href="https://forms.gle/Fwgg12UhzurjTN1R8"  className="primary-btn1" onClick={onPrimaryClick}>
            {primaryButtonText}
            </a>
          <a href="https://forms.gle/FjWA89y1eNJ5GT2T6" className="secondary-btn2" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
