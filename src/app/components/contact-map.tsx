"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./contact-map.scss";

const ContactMap = () => {
  const office = {
    city: "Dubai",
    address: "Dubai International Financial Centre, Gate Village 10, Level 2, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@pexah.com",
    hours: "9:00 AM - 6:00 PM GST"
  };

  return (
    <section className="contact-map">
      <div className="contact-map-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Ready to start trading? Our team is here to help you get started with institutional-grade OTC services.
          </p>
        </div>

        <div className="contact-content">
          <div className="office-info">
            <div className="office-card">
              <div className="office-header">
                <h4 className="office-city">{office.city}</h4>
                <span className="primary-badge">HQ</span>
              </div>
              <div className="office-details">
                <div className="office-detail">
                  <MapPin className="detail-icon" />
                  <span className="detail-text">{office.address}</span>
                </div>
                <div className="office-detail">
                  <Phone className="detail-icon" />
                  <span className="detail-text">{office.phone}</span>
                </div>
                <div className="office-detail">
                  <Mail className="detail-icon" />
                  <span className="detail-text">{office.email}</span>
                </div>
                <div className="office-detail">
                  <Clock className="detail-icon" />
                  <span className="detail-text">{office.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <div className="map-container">
              <h3 className="map-section-title">Find Us on the Map</h3>
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7267096395327!2d55.14013531501085!3d25.21448598389057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5c8a6f3a1%3A0x8b8f8c8c8c8c8c8c!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Office Location"
                ></iframe>
              </div>
              <div className="map-info">
                <div className="location-pin">
                  <div className="pin-dot"></div>
                  <span className="pin-label">Dubai DIFC - Gate Village 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3 className="cta-title">Need Immediate Assistance?</h3>
            <p className="cta-description">
              Our trading desk is available 24/7 for urgent requests and large volume trades.
            </p>
            <div className="cta-buttons">
              <a href="tel:+1-212-555-0123" className="cta-btn primary">
                <Phone className="btn-icon" />
                Call Trading Desk
              </a>
              <a href="mailto:trading@pexah.com" className="cta-btn secondary">
                <Mail className="btn-icon" />
                Email Trading Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
