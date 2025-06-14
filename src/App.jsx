import React from "react";
import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import "./App.css";

function App() {
  const weddingDate = new Date("2025-08-17T10:30:00");
  const [timeLeft, setTimeLeft] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="wedding-app">
      {/* Floating Hearts Animation */}
      <div className="floating-hearts">
        {[...Array(8)].map((_, i) => (
          <Heart key={i} className={`heart heart-${i + 1}`} size={20} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="ornament top-ornament">
            <div className="ornament-line"></div>
            <Heart className="ornament-heart" size={24} />
            <div className="ornament-line"></div>
          </div>

          <h1 className="couple-names">Siddiq & Rehana</h1>
          <p className="subtitle">are beginning their story together</p>

          <div className="wedding-date">
          
            <span>Save the date - for a story written in stars and sealed with love</span>
            
          </div>

          <div className="ornament bottom-ornament">
            <div className="ornament-line"></div>
            <Heart className="ornament-heart" size={24} />
            <div className="ornament-line"></div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Our Tale of Love </h2>
          <div className="story-content">
            <Heart className="story-heart" size={40} />
            <p className="story-text">
              In a world full of little wonders, two hearts found each other through destiny.
              With laughter in our steps and love in our souls, we followed the path that led us here.
              Guided by family, friendship, and fate—we’re ready to begin our forever, hand in hand, with joy in every heartbeat.
              Together, we begin our forever.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="details-section">
        <div className="container">
          <h2 className="section-title">Wedding Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <Calendar className="detail-icon" size={32} />
              <h3>Date</h3>
              <p>August 17, 2025</p>
            </div>
            <div className="detail-card">
              <Clock className="detail-icon" size={32} />
              <h3>Time</h3>
              <p>10:30 AM to 12:00 PM</p>
            </div>
            <div className="detail-card">
              <MapPin className="detail-icon" size={32} />
              <h3>Venue</h3>
              <p>
                Aayesha Marriage Hall
                <br />
                Pettai, Tirunelveli
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="countdown-section">
        <div className="container">
          <h2 className="section-title">Countdown to Forever</h2>
          <div className="countdown-timer">
            <div className="time-unit">
              <span className="time-number">{timeLeft.days || 0}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.hours || 0}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.minutes || 0}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.seconds || 0}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <div className="map-container">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.243571949716!2d77.6415359!3d8.7631392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0416d81c4b1b81%3A0x21d1e58efb760e96!2sAysha%20Mahal%20tirunelveli!5e0!3m2!1sen!2sin!4v1748798990880!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-hearts">
          <Heart size={16} />
          <Heart size={20} />
          <Heart size={16} />
        </div>
        <p className="footer-text">With all our love</p>
        <p className="footer-names">Siddiq & Rehana</p>
      </footer>
    </div>
  );
}

export default App;
