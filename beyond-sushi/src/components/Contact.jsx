import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Title Box */}
      <div className="contact-box title-box">
        <h1>contact</h1>
      </div>

      {/* Main Content: Image & Hours */}
      <div className="contact-main-grid">
        <div className="contact-box image-box">
          {/* Using a placeholder that looks like a restaurant interior */}
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
            alt="Beyond Sushi Interior" 
          />
        </div>

        <div className="contact-box hours-box">
          <div className="hours-grid header-row">
            <span>Dag</span>
            <span>Openingstijden</span>
          </div>
          <hr className="divider" />
          
          <div className="hours-grid"><span>Maandag</span><span>9:00 - 22:00</span></div>
          <div className="hours-grid"><span>Dinsdag</span><span>8:30 - 22:00</span></div>
          <div className="hours-grid"><span>Woensdag</span><span>8:30 - 22:00</span></div>
          <div className="hours-grid"><span>Donderdag</span><span>8:30 - 22:00</span></div>
          <div className="hours-grid"><span>Vrijdag</span><span>8:30 - 22:00</span></div>
          <div className="hours-grid"><span>Zaterdag</span><span>8:00 - 22:00 *</span></div>
          <div className="hours-grid"><span>Zondag</span><span>12:00 - 22:00 *</span></div>
          
          <div className="hours-note">
            * Castricum geopend tot 23:00
          </div>
        </div>
      </div>

      {/* Address Blocks */}
      <div className="contact-addresses-grid">
        <div className="contact-box address-box">
          <p>Burgemeester Mooijstraat 17</p>
          <p>1901 EP, Castricum</p>
          <p>T 0251 - 652 386</p>
          <p>info@beyondsushi.nl</p>
        </div>
        <div className="contact-box address-box">
          <p>Geesterduinweg 39</p>
          <p>1902 EJ, Castricum</p>
          <p>T 0251 - 654683</p>
          <p>info@beyondsushi.nl</p>
        </div>
        <div className="contact-box address-box">
          <p>Middenwaard 44</p>
          <p>1703 SH, Heerhugowaard</p>
          <p>T 072 - 7370105</p>
          <p>info@beyondsushi.nl</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;