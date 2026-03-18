import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          {/* Logo Section */}
          <div className="column">
            <div className="logo">
              <div className="logoIcon">A</div>
              <span className="logoText">Accordia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="column">
            <h3 className="columnTitle">Quick Links</h3>
            <ul className="linkList">
              <li>
                <a href="https://forms.gle/Fwgg12UhzurjTN1R8">Service Providers</a>
              </li>
              <li>
                <a href="https://wa.me/+2347063286167">Support</a>
              </li>
              <li>
                <a href="https://forms.gle/FjWA89y1eNJ5GT2T6">Service Seekers</a>
              </li>
              <li>
                <a href="/FAQ">FAQ</a>
              </li>
              <li>
                <a href="https://paystack.shop/pay/harmonyglobal">Make Payment</a>
              </li>
            </ul>
          </div>

          

          {/* Contact Info */}
          <div className="column">
            <h3 className="columnTitle">Contact Info</h3>
            <ul className="contactList">
              <li className="contactItem">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+234 (706) 328-6167</span>
              </li>
              <li className="contactItem">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello.accordiateam@gmail.com </span>
              </li>
                <li className="contactItem">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="column">
            <h3 className="columnTitle">Follow Us</h3>
            <div className="socialLinks">
              <a
                href="https://www.linkedin.com/company/accordia-technologies-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1Bhe24pfC3/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zm4 14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8zm-8-9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.5-8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p>&copy; 2026 Harmony - Integrity &middot; Community &middot; Opportunity</p>
        </div>
      </div>
    </footer>
  )
}
