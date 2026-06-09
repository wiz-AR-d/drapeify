import './TermsOfService.css'

export default function TermsOfService() {
  return (
    <div className="legal-page fade-in-up">
      <div className="container legal-container">
        <h1 className="legal-h1">Terms of Service</h1>
        <p className="legal-meta">Last Updated: June 9, 2026</p>

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            Welcome to Drapeify. These Terms of Service ("Terms") govern your access to and use of the website, services, and software provided by Drapeify ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Services Description</h2>
          <p>
            Drapeify is an AI-powered fashion imaging service that converts flat lay, hanger, and mannequin product photography into high-fidelity on-model fashion images.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Accounts and Billing</h2>
          <p>
            To use our generation services, you must register for an account. You agree to provide accurate information and keep it secure.
          </p>
          <p>
            Our core pricing is set at <strong>₹99 per photo generation</strong>. Any bulk pricing plans or custom studio subscriptions must be agreed upon separately via contact with sales. All payments are non-refundable unless specified otherwise.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Content Uploads and Ownership</h2>
          <p>
            You retain all ownership rights in the source images (flat lays, garments, mannequin shots) that you upload to Drapeify. By uploading, you grant us a worldwide, royalty-free license to process your images solely for the purpose of generating model outputs for you.
          </p>
          <p>
            You represent and warrant that you own or have the necessary rights and licenses for all photos you upload, and that they do not infringe upon any third-party copyrights or trademark protections.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Image Output Licensing</h2>
          <p>
            Drapeify grants you a perpetual, worldwide, non-exclusive, royalty-free license to use, display, download, and distribute the AI-generated model images for your commercial e-commerce store, social media, catalog layouts, and campaign editorials.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Restrictions</h2>
          <p>
            You agree not to use the service to generate harmful, offensive, misleading, or illegal imagery. You shall not reverse engineer, copy, or scrape the AI models or workflows used on the Drapeify platform.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            Drapeify is provided "as is" and "as available". We do not guarantee uninterrupted service or flawless output. In no event shall Drapeify be liable for any indirect, incidental, or consequential damages resulting from your use of the service.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserves the right to modify these Terms at any time. We will notify you of major updates by posting the updated date at the top of this page. Your continued use of the service constitutes acceptance of the new Terms.
          </p>
        </section>
      </div>
    </div>
  )
}
