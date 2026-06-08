import { useState } from 'react'
import './ContactUs.css'

export default function ContactUs() {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)
    formData.append("access_key", "1f34536d-2d7a-4d7f-8eb9-e1888308aacf")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      setResult(data.success ? "Success! We'll be in touch soon." : "Error sending message.")
    } catch (e) {
      setResult("Error sending message.")
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-left">
        <div className="contact-form-container">
          <h1 className="contact-h1">See Drapeify in action</h1>
          <p className="contact-subtitle">
            Curious how Drapeify can help your fashion brand grow?<br />
            Stunning images, lower costs, and faster time to market.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name <span className="req">*</span></label>
                <input type="text" name="first_name" placeholder="Jane" required pattern="^[A-Za-z\s]+$" title="Only letters and spaces allowed" />
              </div>
              <div className="form-group">
                <label>Last Name <span className="req">*</span></label>
                <input type="text" name="last_name" placeholder="Doe" required pattern="^[A-Za-z\s]+$" title="Only letters and spaces allowed" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Business / personal email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="jane@brand.com" required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <div className="phone-input-group">
                  <select name="country_code" className="country-select" defaultValue="+91">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                  </select>
                  <input type="tel" name="phone" placeholder="5551234567" pattern="\d{10}" maxLength="10" title="Please enter exactly 10 digits" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company type <span className="req">*</span></label>
                <select name="company_type" required defaultValue="">
                  <option value="" disabled hidden>Select one...</option>
                  <option value="brand/retailer">Brand/Retailer</option>
                  <option value="studio">Studio</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
              <div className="form-group">
                <label>Number of SKUs <span className="req">*</span></label>
                <select name="number_of_skus" required defaultValue="">
                  <option value="" disabled hidden>Select one...</option>
                  <option value="under 5000">Under 5000</option>
                  <option value="5000-50000">5000 - 50000</option>
                  <option value="more than 50000">More than 50000</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Tell us more about how you want to use Drapeify</label>
              <textarea
                name="message"
                placeholder="Tell us more about how you want to use Drapeify"
                rows="4"
              ></textarea>
            </div>

            <div className="form-footer">
              <button type="submit" className="btn-primary dark">Submit</button>
              {result && <span className="form-result">{result}</span>}
            </div>
          </form>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-right-overlay"></div>
        <img
          src="/images/ChatGPT Image Jun 5, 2026, 03_44_54 PM.png"
          alt="Fashion Model"
          className="contact-right-img"
        />
        <div className="contact-right-content">
          <h3>Top fashion creative teams choose Drapeify</h3>
          <div className="contact-logos">
            <span>NARIE</span>
            <span>SWADESHI VIDESHI</span>
            <span>THREADZ</span>
            <span>99SHADES</span>
          </div>
        </div>
      </div>
    </div>
  )
}
