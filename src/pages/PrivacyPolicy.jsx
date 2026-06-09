import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page fade-in-up">
      <div className="container legal-container">
        <h1 className="legal-h1">Privacy Policy</h1>
        <p className="legal-meta">Last Updated: June 9, 2026</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Drapeify ("we," "us," or "our") respects your privacy and is committed to protecting the personal data and images you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Data:</strong> When you register or contact us, we collect details such as your name, business email, phone number, and company information.
          </p>
          <p>
            <strong>Uploaded Photos:</strong> We collect and process the flat lay photos, garment files, and mannequin shots you upload to Drapeify. These images are essential for executing our AI model generation services.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            We use your collected information to:
          </p>
          <ul>
            <li>Provide and operate the Drapeify AI generation service.</li>
            <li>Deliver high-fidelity, customized on-model output images.</li>
            <li>Process transactions, invoices, and verify payments.</li>
            <li>Respond to your requests, questions, and offer client support.</li>
            <li>Improve, test, and optimize our generative models and user flows.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Protection and Sharing</h2>
          <p>
            We do not sell, rent, or lease your personal information or uploaded product photographs to third parties for marketing.
          </p>
          <p>
            We may share processing data with trusted cloud infrastructure providers (such as hosting and GPU processing platforms) solely for running the calculations necessary to deliver the Drapeify service.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Image Data Retention</h2>
          <p>
            We store your uploaded garment photos and generated outputs on secure cloud servers so you can access, review, and download your models. You can request deletion of your uploaded images and account details at any time by contacting our support.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Security Measures</h2>
          <p>
            We implement industry-standard administrative, technical, and physical security measures designed to protect your personal details and media files from unauthorized access, loss, or manipulation.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Cookies and Tracking</h2>
          <p>
            Our website uses cookies and similar analysis tools to understand user behaviors, remember dashboard preferences, and provide a secure, smooth experience. You can disable cookies in your browser settings if you prefer.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or requests regarding this Privacy Policy, your data, or would like to request deletion, please contact us through our Contact page or message us directly on WhatsApp.
          </p>
        </section>
      </div>
    </div>
  )
}
