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
        
        <p style={{ color: 'rgba(186, 230, 253, 0.6)', marginBottom: '40px', fontSize: '14px' }}>
          <strong>Last Updated: January 2026</strong>
        </p>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>1. Agreement to Terms</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            By accessing or using the CLYQ mobile application (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the App.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>2. Description of Service</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '12px' }}>
            CLYQ is a mobile application that provides real-time information about nightlife venues, including crowd levels, queue times, event information, and social features for connecting with friends. The App allows users to:
          </p>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '6px' }}>Discover and explore nightlife venues</li>
            <li style={{ marginBottom: '6px' }}>View real-time status updates (crowd levels, queue times, vibe scores)</li>
            <li style={{ marginBottom: '6px' }}>Check in at venues and report status</li>
            <li style={{ marginBottom: '6px' }}>Connect with friends and send messages</li>
            <li style={{ marginBottom: '6px' }}>View and participate in events</li>
            <li>Create and join table reservations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>3. Eligibility</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}>You must be at least 17 years old to use the App.</li>
            <li style={{ marginBottom: '8px' }}>You must have the legal capacity to enter into these Terms.</li>
            <li style={{ marginBottom: '8px' }}>You must not be prohibited from using the App under applicable laws.</li>
            <li>You are responsible for ensuring your use of the App complies with all applicable laws in your jurisdiction.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>4. Account Registration</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Sign In with Apple:</strong> You may create an account using Apple Sign In. By using Apple Sign In, you agree to Apple's Terms of Service.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Account Security:</strong> You are responsible for maintaining the security of your account. You must not share your account credentials with others.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Account Information:</strong> You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Account Termination:</strong> You may delete your account at any time through the App settings. We reserve the right to suspend or terminate your account if you violate these Terms.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>5. User Conduct</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginBottom: '12px' }}>
            You agree not to:
          </p>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Violate Laws:</strong> Use the App in any way that violates applicable laws or regulations.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Harm Others:</strong> Harass, threaten, intimidate, or harm other users.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>False Information:</strong> Post false, misleading, or inaccurate information.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Spam:</strong> Send unsolicited messages, spam, or engage in any form of automated data collection.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Unauthorized Access:</strong> Attempt to gain unauthorized access to the App, servers, or networks.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Reverse Engineering:</strong> Reverse engineer, decompile, or disassemble the App.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Commercial Use:</strong> Use the App for commercial purposes without our written consent.</li>
            <li style={{ marginBottom: '6px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Impersonation:</strong> Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Intellectual Property:</strong> Infringe on the intellectual property rights of others.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>6. User-Generated Content</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Your Content:</strong> You retain ownership of content you post through the App ("User Content"). By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute your User Content for the purpose of operating and promoting the App.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Content Standards:</strong> User Content must not be illegal, harmful, contain hate speech, include nudity or explicit material, infringe on intellectual property rights, or contain spam.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Content Moderation:</strong> We reserve the right to review, modify, or remove User Content that violates these Terms or our community guidelines.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Reporting:</strong> You can report inappropriate content or users through the in-app reporting feature.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>7. Location Data</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Consent:</strong> By using location-based features, you consent to the collection and use of your location data as described in our Privacy Policy.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Accuracy:</strong> You understand that location data may not be accurate and should not be relied upon for safety-critical decisions.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Third-Party Services:</strong> Location data may be processed by third-party services (e.g., Apple Location Services).</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>8. Intellectual Property</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Our Rights:</strong> The App, including its design, features, and content (excluding User Content), is owned by CLYQ and protected by copyright, trademark, and other intellectual property laws.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>License:</strong> We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of the App without our prior written consent.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>9. Third-Party Services</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            The App may integrate with or link to third-party services (e.g., Apple Sign In, Supabase, cloud storage). Your use of third-party services is subject to their respective terms of service and privacy policies. We are not responsible for third-party services.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>10. Disclaimers</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>No Warranties:</strong> The App is provided "as is" and "as available" without warranties of any kind, either express or implied.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Accuracy:</strong> We do not guarantee the accuracy, completeness, or timeliness of information provided through the App.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Availability:</strong> We do not guarantee that the App will be available at all times or free from errors, bugs, or interruptions.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Third-Party Content:</strong> We are not responsible for user-generated content or content from third parties.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>11. Limitation of Liability</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            To the maximum extent permitted by law, CLYQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the App.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>12. Indemnification</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            You agree to indemnify and hold CLYQ harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the App, violation of these Terms, or violation of any rights of another.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>13. Termination</h2>
          <ul style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.8', paddingLeft: '25px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>By You:</strong> You may terminate your account at any time by deleting it through the App settings.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>By Us:</strong> We may suspend or terminate your account or access to the App at any time, with or without cause or notice, for any reason, including violation of these Terms.</li>
            <li><strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Effect of Termination:</strong> Upon termination, your right to use the App will immediately cease, and we may delete your account and data as described in our Privacy Policy.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>14. Changes to Terms</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>15. Governing Law</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>16. Severability</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'rgba(34, 211, 238, 0.85)', fontWeight: '400' }}>17. Contact Information</h2>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px' }}>
            If you have questions about these Terms, please contact us at:
          </p>
          <p style={{ color: 'rgba(186, 230, 253, 0.75)', lineHeight: '1.7', fontSize: '14px', marginTop: '12px' }}>
            <strong style={{ color: 'rgba(224, 242, 254, 0.9)' }}>Email:</strong> <a href="mailto:legal@clyq.app" style={{ color: 'rgba(34, 211, 238, 0.95)', textDecoration: 'none', borderBottom: '1px solid rgba(34, 211, 238, 0.3)' }}>legal@clyq.app</a>
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