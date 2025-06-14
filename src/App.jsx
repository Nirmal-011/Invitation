import React, { useState } from "react";
import { Heart, MapPin, Calendar, Clock, Lock, Eye, EyeOff } from "lucide-react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Wedding countdown logic
  const weddingDate = new Date("2025-08-17T10:30:00");
  const [timeLeft, setTimeLeft] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / 1000 / 60 / 60) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    
    // Simple validation - only password required
    if (password === 'siddiq@07') {
      setIsLoggedIn(true);
    } else {
      setLoginError('Invalid password. Please try again.');
    }
  };

  const LoginPage = () => (
    <div className="login-container">
      {/* Floating Hearts Animation */}
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <Heart 
            key={i} 
            size={16} 
            className="floating-heart"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i}s`
            }}
          />
        ))}
      </div>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="divider-section">
              <div className="divider-line"></div>
              <Heart size={20} className="heart-icon" />
              <div className="divider-line"></div>
            </div>
            
            <h1 className="couple-names">Siddiq & Rehana</h1>
            <p className="invitation-subtitle">Private Wedding Invitation</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="password-field">
              <div className="input-container">
                <Lock size={18} className="lock-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password-btn"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="error-message">
                {loginError}
              </div>
            )}

            <button type="submit" className="login-btn">
              <Heart size={16} />
              Enter Our Wedding
            </button>
          </form>

          <div className="login-hint">
            <p>Hint: Contact the couple for access credentials</p>
          </div>
        </div>
      </div>
    </div>
  );

  const WeddingContent = () => (
    <div className="wedding-content">
      {/* Floating Hearts Animation */}
      <div className="floating-hearts-main">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i} 
            size={20} 
            className="floating-heart-main"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <button onClick={() => setIsLoggedIn(false)} className="logout-btn">
            Logout
          </button>

          <div className="hero-divider">
            <div className="hero-divider-line"></div>
            <Heart size={24} className="hero-heart" />
            <div className="hero-divider-line"></div>
          </div>

          <h1 className="hero-title">Siddiq & Rehana</h1>
          <p className="hero-subtitle">are beginning their story together</p>

          <div className="save-date">
            <span>Save the date - for a story written in stars and sealed with love</span>
          </div>

          <div className="hero-divider">
            <div className="hero-divider-line"></div>
            <Heart size={24} className="hero-heart" />
            <div className="hero-divider-line"></div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="love-story-section">
        <div className="container">
          <h2 className="section-title">Our Tale of Love</h2>
          <div className="love-story-content">
            <Heart size={40} className="love-story-heart" />
            <p className="love-story-text">
              In a world full of little wonders, two hearts found each other through destiny.
              With laughter in our steps and love in our souls, we followed the path that led us here.
              Guided by family, friendship, and fate—we're ready to begin our forever, hand in hand, with joy in every heartbeat.
              Together, we begin our forever.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="wedding-details-section">
        <div className="container">
          <h2 className="section-title">Wedding Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <Calendar size={32} className="detail-icon" />
              <h3 className="detail-title">Date</h3>
              <p className="detail-text">August 17, 2025</p>
            </div>
            <div className="detail-card">
              <Clock size={32} className="detail-icon" />
              <h3 className="detail-title">Time</h3>
              <p className="detail-text">10:30 AM to 12:00 PM</p>
            </div>
            <div className="detail-card">
              <MapPin size={32} className="detail-icon" />
              <h3 className="detail-title">Venue</h3>
              <p className="detail-text">
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
          <h2 className="section-title countdown-title">Countdown to Forever</h2>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days || 0}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours || 0}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes || 0}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.seconds || 0}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="location-section">
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
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-hearts">
          <Heart size={16} className="footer-heart" />
          <Heart size={20} className="footer-heart" />
          <Heart size={16} className="footer-heart" />
        </div>
        <p className="footer-text">With all our love</p>
        <p className="footer-names">Siddiq & Rehana</p>
      </footer>
    </div>
  );

  return isLoggedIn ? <WeddingContent /> : <LoginPage />;
}

export default App;