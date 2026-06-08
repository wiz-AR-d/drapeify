import './Footer.css'

const DrapeifyLogo = () => (
  <div className="footer-logo">
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 8 L19 112"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M19 8 C19 8 72 8 78 14 C90 26 90 50 90 60 C90 70 90 94 78 106 C72 112 19 112 19 112"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 28 C38 35 70 42 72 62 C74 80 55 92 38 98"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 40 C42 48 62 56 62 72 C62 84 50 94 38 100"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
    <span>DRAPEIFY</span>
  </div>
)
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <DrapeifyLogo />
            <p className="footer-brand-text">
              Drapeify utilizes Generative AI to enhance online fashion stores by introducing AI-generated models and unlimited professional fashion photos.
            </p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Product</h4>
              <a href="#" className="footer-link">On Model</a>
              <a href="#" className="footer-link">Flat Lay</a>
              <a href="#" className="footer-link">Mannequin</a>
              <a href="#" className="footer-link">Video</a>
              <a href="#" className="footer-link">Model Gallery</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <a href="#" className="footer-link">About us</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Case Studies</a>
              <a href="#" className="footer-link">Pricing</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Support</h4>
              <a href="#" className="footer-link">Help center</a>
              <a href="#" className="footer-link">Contact support</a>
              <a href="#" className="footer-link">Contact sales</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <a href="#" className="footer-link">Terms of service</a>
              <a href="#" className="footer-link">Privacy policy</a>
              <a href="#" className="footer-link">Your Privacy Choices</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Drapeify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
