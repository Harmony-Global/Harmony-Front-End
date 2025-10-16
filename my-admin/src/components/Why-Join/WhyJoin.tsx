import type React from "react"
import "./WhyJoin.scss"

interface FeatureCard {
  icon: React.ReactElement
  title: string
  description: string
}

const WhyJoinSection = () => {
  const features: FeatureCard[] = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28 18C28 20.2091 26.2091 22 24 22C21.7909 22 20 20.2091 20 18C20 15.7909 21.7909 14 24 14C26.2091 14 28 15.7909 28 18Z"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32V34H16V32Z"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M38 24L34 28L32 26" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Integrity First",
      description: "Verified profiles and fair payments so you can work with confidence.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="4" stroke="#0066FF" strokeWidth="2" />
          <circle cx="14" cy="28" r="4" stroke="#0066FF" strokeWidth="2" />
          <circle cx="34" cy="28" r="4" stroke="#0066FF" strokeWidth="2" />
          <path
            d="M20 20L16 26M28 20L32 26"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Community Driven",
      description: "Built to empower people through collaboration.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="12" stroke="#0066FF" strokeWidth="2" />
          <path
            d="M24 12C28.4183 12 32 15.5817 32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12Z"
            stroke="#0066FF"
            strokeWidth="2"
          />
          <path d="M12 24H36" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 12V36" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Opportunity for All",
      description: "Projects, partnerships and a marketplace built for real earning potential.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 14V24L30 30" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M24 10C17.3726 10 12 15.3726 12 22C12 28.6274 17.3726 34 24 34C30.6274 34 36 28.6274 36 22"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="22" r="12" stroke="#0066FF" strokeWidth="2" />
        </svg>
      ),
      title: "Innovation with Purpose",
      description: "Smart tools to make networking seamless",
    },
  ]

  return (
    <section className="why-join-section">
      <div className="why-join-header">
        <h2 className="why-join-title">
          Why join <span className="highlight">Harmony?</span>
        </h2>
        <p className="why-join-subtitle">
          Experience a platform designed for genuine professional growth, where trust and community come first.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyJoinSection
