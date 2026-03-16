import type React from "react"
import  "./Values.scss"

interface ValueCard {
  icon: string
  iconColor: string
  title: string
  description: string
}

const OurValues: React.FC = () => {
  const values: ValueCard[] = [
    {
      icon: "🛡️",
      iconColor: "#0180D7",
      title: "Integrity First",
      description: "Building trust through transparency and honest interactions.",
    },
    {
      icon: "💗",
      iconColor: "#E91E63",
      title: "Community Driven",
      description: "Empowering members to learn, share, and grow together.",
    },
    {
      icon: "⚡",
      iconColor: "#FF9800",
      title: "Opportunity for All",
      description: "Creating equal access to meaningful work and connections.",
    },
    {
      icon: "🎯",
      iconColor: "#00C853",
      title: "Innovation with Purpose",
      description: "Using technology to solve real problems for professionals.",
    },
    {
      icon: "🏆",
      iconColor: "#9C27B0",
      title: "Excellence Always",
      description: "Committed to delivering quality in everything we do.",
    },
  ]

  return (
    <section className="ourValues" id="values-section">
      <div className="container">
        <div className="heade">
          <h2 className="heading">Our Core Values</h2>
          <p className="subtitle">The principles that guide everything we do at Accordia</p>
        </div>

        <div className="valuesGrid">
          {values.map((value, index) => (
            <div key={index} className="valueCard">
              <div className="iconWrapper" style={{ backgroundColor: value.iconColor }}>
                <span className="icon">{value.icon}</span>
              </div>
              <h3 className="valueTitle">{value.title}</h3>
              <p className="valueDescription">{value.description}</p>
            </div>
          ))}
        </div>

        <p className="foot">
          These values shape our culture and drive our mission to create a better professional networking experience.
        </p>
      </div>
    </section>
  )
}

export default OurValues
