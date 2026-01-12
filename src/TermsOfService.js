import React from 'react';

function TermsOfService() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: 'white',
      padding: '60px 20px',
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
        <h1 style={{ 
          fontSize: '36px', 
          marginBottom: '10px',
          color: 'rgba(34, 211, 238, 0.95)',
          fontWeight: '300'
        }}>Terms of Service</h1>
        
        <p style={{ color: 'rgba(186, 230, 253, 0.6)', marginBottom: '40px', fontSize: '14px' }}>
          Last Updated: January 2026
        </p>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>
            1. Agreement to Terms
          </h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            By accessing or using the CLYQ mobile application, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>
            2. Eligibility
          </h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li>You must be at least 17 years old</li>
            <li>You must comply with all applicable laws</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>
            3. User Conduct
          </h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '12px' }}>
            You agree not to violate laws, harass users, post false information, or attempt unauthorized access.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>
            4. Contact
          </h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            Questions? Contact us at legal@clyq.app
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
            fontSize: '14px'
          }}>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;