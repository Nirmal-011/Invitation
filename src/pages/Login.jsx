import React, { useState } from "react";
import { Heart, Lock, Eye, EyeOff } from "lucide-react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]=useState('');
  const navigate=useNavigate();

  const handleSubmit = async () => {
    if (!password) return;
    
    setIsLoading(true);
    
    // Simulate login process
    if(password==='siddiq'){
        navigate('/invite')
        setIsLoading(false);
    }
    else{
        setError("Please Enter the Correct Password");
        setIsLoading(false)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="login-container">
      {/* Floating Hearts Animation */}
      <div className="floating-hearts">
        {[...Array(12)].map((_, i) => (
          <Heart key={i} className="floating-heart" size={16} />
        ))}
      </div>

      {/* Login Container */}
      <div className="login-wrapper">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="header-decoration">
              <div className="decoration-line"></div>
              <Heart className="header-heart" size={24} />
              <div className="decoration-line"></div>
            </div>
            
            <h1 className="welcome-title">Welcome</h1>
            
            <p className="welcome-subtitle">Enter password to continue</p>
            
            <div className="header-decoration">
              <div className="decoration-line"></div>
              <Heart className="header-heart-small" size={20} />
              <div className="decoration-line"></div>
            </div>
          </div>

          {/* Login Form */}
          <div className="login-form">
            <div className="password-field">
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="password-input"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password-btn"
                >
                  {/* {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
                </button>
              </div>
             <p style={{color:"red",paddingLeft:'15px',marginTop:'10px'}}>{error}</p>
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={isLoading || !password}
              className="submit-btn"
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <Heart size={18} />
                  Enter
                  <Heart size={18} />

                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="login-footer">
            <div className="footer-hearts">
              <Heart className="footer-heart-1" size={12} />
              <Heart className="footer-heart-2" size={16} />
              <Heart className="footer-heart-3" size={12} />
            </div>
          </div>
        </div>

        {/* Side Decorations */}
        <div className="left-decoration">
          <div className="decoration-container">
            {[...Array(6)].map((_, i) => (
              <Heart key={i} className="decoration-heart" size={24} />
            ))}
          </div>
        </div>
        
        <div className="right-decoration">
          <div className="decoration-container">
            {[...Array(6)].map((_, i) => (
              <Heart key={i} className="decoration-heart" size={24} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;