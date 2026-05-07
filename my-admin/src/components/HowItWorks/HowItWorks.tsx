"use client"

import React from "react"
import "./HowItWorks.scss"

const HowItWorksSection: React.FC = () => {
  const processSteps = [
    { label: "Join", icon: "👥" },
    { label: "Connect", icon: "🤝" },
    { label: "Work", icon: "💼" },
    { label: "Grow", icon: "📈" },
  ]

  return (
    <section className="how-it-works-section" id="how-it-works-section">
      <div className="how-it-works-header">
        <h2 className="section-title">How Accordia Works</h2>
        <p className="section-subtitle">A simple way to connect, collaborate, and grow your career or business.</p>
        <div className="process-flow">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="process-step">
                <div className="process-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {index === 0 && (
                      <path
                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                        stroke="#213F7D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {index === 1 && (
                      <path
                        d="M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 9.5913 17.3679 11.1174 16.2426 12.2426C15.1174 13.3679 13.5913 14 12 14M12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2M12 14V22M8 18H16"
                        stroke="#213F7D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {index === 2 && (
                      <path
                        d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                        stroke="#213F7D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {index === 3 && (
                      <path
                        d="M3 3V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H21M7 13L12 8L15 11L21 5"
                        stroke="#213F7D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
                <span className="process-label">{step.label}</span>
              </div>
              {index < processSteps.length - 1 && (
                <svg
                  className="process-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#8A8B9A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="steps-container">
        {/* Step 01 - Content LEFT, Image RIGHT */}
        <div className="step-card">
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">01</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Join the Community</h3>
            <p className="step-description">
              Start by joining Accordia's trusted network of professionals, freelancers, and businesses.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Verified member onboarding</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Access to exclusive communities</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Early adopter benefits</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW1.png" alt="Step 1" />
              <div className="step-label">
                <span className="label-number">Step 01</span>
                <span className="label-title">Join the Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 - Image LEFT, Content RIGHT */}
        <div className="step-card">
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW2.png" alt="Create Your Profile" />
              <div className="step-label">
                <span className="label-number">Step 02</span>
                <span className="label-title">Create Your Profile</span>
              </div>
            </div>
          </div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">02</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Create Your Profile</h3>
            <p className="step-description">
              Showcase your skills, experience, or business to stand out in our community.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Professional profile setup</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Skill verification system</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Portfolio showcase</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 03 - Content LEFT, Image RIGHT */}
        <div className="step-card">
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">03</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Discover & Connect</h3>
            <p className="step-description">
              Find projects, gigs, mentors, or collaborators that match your goals and interests.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Smart matching algorithm</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Community recommendations</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Direct messaging</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW3.png" alt="Discover & Connect" />
              <div className="step-label">
                <span className="label-number">Step 03</span>
                <span className="label-title">Discover & Connect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 04 - Image LEFT, Content RIGHT */}
        <div className="step-card">
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW4.png" alt="Work & Grow Together" />
              <div className="step-label">
                <span className="label-number">Step 04</span>
                <span className="label-title">Work & Grow Together</span>
              </div>
            </div>
          </div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">04</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Work & Grow Together</h3>
            <p className="step-description">
              Secure opportunities, get paid fairly, and build lasting professional relationships.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Secure payment system</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Project management tools</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Growth tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="steps-container-mobile">
        {/* Step 01 - Content LEFT, Image RIGHT */}
        <div className="step-card">
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">01</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Join the Community</h3>
            <p className="step-description">
              Start by joining Accordia's trusted network of professionals, freelancers, and businesses.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Verified member onboarding</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Access to exclusive communities</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Early adopter benefits</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW1.png" alt="Step 1" />
              <div className="step-label">
                <span className="label-number">Step 01</span>
                <span className="label-title">Join the Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 - Image LEFT, Content RIGHT */}
        <div className="step-card">
           <div className="step-content">
            <div className="step-header">
              <span className="step-number">02</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Create Your Profile</h3>
            <p className="step-description">
              Showcase your skills, experience, or business to stand out in our community.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Professional profile setup</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Skill verification system</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Portfolio showcase</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW2.png" alt="Create Your Profile" />
              <div className="step-label">
                <span className="label-number">Step 02</span>
                <span className="label-title">Create Your Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 03 - Content LEFT, Image RIGHT */}
        <div className="step-card">
          <div className="step-content">
            <div className="step-header">
              <span className="step-number">03</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Discover & Connect</h3>
            <p className="step-description">
              Find projects, gigs, mentors, or collaborators that match your goals and interests.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Smart matching algorithm</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Community recommendations</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Direct messaging</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW3.png" alt="Discover & Connect" />
              <div className="step-label">
                <span className="label-number">Step 03</span>
                <span className="label-title">Discover & Connect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 04 - Image LEFT, Content RIGHT */}
        <div className="step-card">
              <div className="step-content">
            <div className="step-header">
              <span className="step-number">04</span>
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                    stroke="#213F7D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="step-title">Work & Grow Together</h3>
            <p className="step-description">
              Secure opportunities, get paid fairly, and build lasting professional relationships.
            </p>
            <ul className="step-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Secure payment system</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Project management tools</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#39CDCC" />
                  <path
                    d="M6 10L9 13L14 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Growth tracking</span>
              </li>
            </ul>
          </div>
          <div className="step-image-wrapper">
            <div className="step-image-card">
              <img src="../../../images/HIW4.png" alt="Work & Grow Together" />
              <div className="step-label">
                <span className="label-number">Step 04</span>
                <span className="label-title">Work & Grow Together</span>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

