import React from 'react';

function TermsOfService() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: 'white',
      padding: '60px 20px 100px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflowY: 'auto'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(20px)',
        padding: '50px 40px',
        borderRadius: '24px',
        border: '1px solid rgba(34, 211, 238, 0.15)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px', color: 'rgba(34, 211, 238, 0.95)', fontWeight: '300' }}>
          CLYQ Terms of Service
        </h1>
        
        <p style={{ color: 'rgba(186, 230, 253, 0.6)', marginBottom: '10px', fontSize: '14px' }}>
          Effective Date: January 2026<br/>
          Last Updated: January 2026
        </p>

        <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '40px' }}>
          These Terms of Service ("Terms") constitute a legally binding contract between you and CLYQ governing your use of the CLYQ mobile application (the "App").
        </p>
        <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '40px' }}>
          By creating an account or using the App, you agree to these Terms.
        </p>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>1. ELIGIBILITY</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            You must be legally permitted to use the App and comply with all applicable laws and venue rules.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>2. ACCOUNT REGISTRATION</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>Authentication is provided via Apple Sign In</li>
            <li>You are responsible for all activity on your account</li>
            <li>Impersonation or misrepresentation is prohibited</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>3. USER OBLIGATIONS</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px' }}>
            You agree not to:
          </p>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>Violate laws or venue policies</li>
            <li>Harass, abuse, or harm others</li>
            <li>Upload illegal, infringing, or explicit content</li>
            <li>Misuse location, beacon, or payment systems</li>
            <li>Attempt to bypass security features</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>4. USER-GENERATED CONTENT</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px' }}>
            You retain ownership of content you submit.
          </p>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px' }}>
            You grant CLYQ a non-exclusive, worldwide, royalty-free license to host, display, and distribute content within the App.
          </p>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            CLYQ may remove content at its discretion.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>5. SOCIAL & VENUE FEATURES</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px' }}>
            CLYQ does not guarantee:
          </p>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>Venue entry</li>
            <li>Service quality</li>
            <li>Accuracy of user-generated content</li>
          </ul>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginTop: '10px' }}>
            All interactions with venues and users occur at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>6. PAYMENTS & BOOKINGS</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>Payments are processed by Apple Pay or approved processors</li>
            <li>Refunds are governed by venue policies</li>
            <li>CLYQ is not responsible for venue disputes</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>7. LOYALTY & STATUS PROGRAMS</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>Points have no cash value</li>
            <li>Programs may be modified or terminated</li>
            <li>Abuse may result in forfeiture</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>8. TERMINATION</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px' }}>
            CLYQ may suspend or terminate accounts at any time for violations.
          </p>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            Users may delete accounts at any time.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>9. DISCLAIMERS</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', fontWeight: '500' }}>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE."
          </p>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginTop: '10px', fontWeight: '500' }}>
            CLYQ DISCLAIMS ALL WARRANTIES TO THE MAXIMUM EXTENT PERMITTED BY LAW.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>10. LIMITATION OF LIABILITY</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '10px', fontWeight: '500' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLYQ SHALL NOT BE LIABLE FOR:
          </p>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>PERSONAL INJURY</li>
            <li>LOSS OF PROFITS OR DATA</li>
            <li>USER OR VENUE CONDUCT</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>11. INDEMNIFICATION</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            You agree to indemnify and hold harmless CLYQ from claims arising from your use of the App or violation of these Terms.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>12. GOVERNING LAW</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>UK & EU: England and Wales</li>
            <li>United States: Delaware</li>
            <li>Canada: Ontario</li>
            <li>Mexico: United Mexican States</li>
          </ul>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginTop: '10px', fontStyle: 'italic' }}>
            Mandatory consumer rights remain unaffected.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>13. CHANGES TO TERMS</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            Continued use of the App after changes constitutes acceptance.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>14. CONTACT</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            Email: <a href="mailto:legal@clyq.app" style={{ color: 'rgba(34, 211, 238, 0.95)', textDecoration: 'none', borderBottom: '1px solid rgba(34, 211, 238, 0.3)' }}>legal@clyq.app</a>
          </p>
        </section>

        <div style={{ 
          marginTop: '50px', 
          paddingTop: '25px', 
          borderTop: '1px solid rgba(34, 211, 238, 0.2)',
          textAlign: 'center'
        }}>
          <a href="/" style={{ 
            color: 'rgba(34, 211, 238, 0.9)', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '300',
            borderBottom: '1px solid rgba(34, 211, 238, 0.3)',
            paddingBottom: '2px'
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;