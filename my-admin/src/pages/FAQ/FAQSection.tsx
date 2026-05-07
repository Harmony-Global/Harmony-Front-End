"use client"
import { ArrowLeft } from "react-feather"
import Accordion from "../../components/Accordion/Accordion"
import './FAQSection.scss'

const logo = "/images/Accordia.png"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive solutions tailored to your needs, including consultation, implementation, and ongoing support. Our team works closely with you to ensure the best outcomes for your project.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The timeline varies depending on the scope of your project. Typically, most projects are completed within 4-8 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods through our secure payment partner, Paystack. This includes credit cards, debit cards, and bank transfers. All transactions are encrypted and secure.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services, you can request a full refund within 30 days of your purchase. Terms and conditions apply.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Our dedicated support team is available 24/7 to assist you with any questions or concerns. You can reach us via email, phone, or through our live chat feature on the website.",
    },
    {
      question: "Can I upgrade or change my plan later?",
      answer:
        "Yes, you can upgrade, downgrade, or modify your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences in cost.",
    },
  ]

  return (
    <div className="faq-page">
      {/* Header */}

       <header className="faq-header">
        <div className="faq-header-container">
          <a href="/" className="faq-back-link">
            <ArrowLeft className="icon"  />
            Take a step back
          </a>

          <div className="faq-logo">

           <a href="/" className="faq-back-link">
           <img src={logo || "/placeholder.svg"} alt="" width={200}/>
            </a>
          </div>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="faq-main">
        <div className="faq-intro">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services</p>
        </div>

        <Accordion items={faqs} />

        {/* CTA Section */}
        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Feel free to reach out to our support team.</p>
          <a href="https://wa.me/+2347063286167" className="faq-cta-button">
            Contact Support
          </a>
        </div>
      </main>
    </div>
  )
}

