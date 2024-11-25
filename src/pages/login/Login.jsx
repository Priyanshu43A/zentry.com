import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../signup/Signup.css";
import FOG from "vanta/dist/vanta.fog.min"; 
import * as THREE from "three"; 
import { FaUserCircle, FaGoogle, FaFacebook, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: "#vantajs",
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: "#a855f7",
          midtoneColor: "#ff447d",
          lowlightColor: "#22d3ee",
          baseColor: "#ffe7e7",
          blurFactor: 0.41,
          scale: 2.0,
          scaleMobile: 4.0,
          backgroundAlpha: 1,
        })
      );
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  const validateField = (name, value) => {
    let error = "";
    if (name === "identifier" && !value.trim()) {
      error = "Username or Email is required.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters.";
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every((field) => {
      validateField(field, formData[field]);
      return !errors[field];
    });
    if (isValid) {
      setIsSubmitting(true);
      // Simulate API request
      setTimeout(() => {
        alert("Login successful!");
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div id="vantajs" className="signup-cont w-screen h-screen flex justify-center items-center">
      <div className="signup-form-cont">
        <h1 className="signup-heading text-2xl font-semibold">Welcome Back!</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <div className={`form-group ${errors.identifier ? "error-field" : formData.identifier ? "success-field" : ""}`}>
              <FaUserCircle size={24} />
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Username or Email"
              />
            </div>
            <p className="error-message">{errors.identifier}</p>
          </div>
          
          <div id='pass-field' className="flex flex-col">
            <div className={`form-group ${errors.password ? "error-field" : formData.password ? "success-field" : ""}`}>
              <FaLock size={20} />
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Password"
              />
              <button onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye size={22} /> : <FaEyeSlash size={22} />}
              </button>
            </div>
            <p className="error-message">{errors.password}</p>
            <div className="ml-auto font-bold text-purple-900">
              <a className="hover:underline" href="#">Forgot password?</a>
            </div>
          </div>

          <div className="form-group submit font-bold text-xl">
            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link className="hover:underline" to="/signup">Don't have an account? Signup</Link>
            <div className="other-opts mt-5">
              <p className="font-semibold">Other login methods</p>
              <div className="p-4 flex gap-2 justify-around flex-wrap">
                <a href="#"><FaGoogle size={24} /></a>
                <a href="#"><FaFacebook size={24} /></a>
                <a href="#"><FaSquareXTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
