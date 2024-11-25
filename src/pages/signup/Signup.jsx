import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { FaUserCircle, FaLock, FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const Signup = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "" });
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
    if (name === "name" && !value.trim()) {
      error = "Name is required.";
    } else if (name === "username" && !value.trim()) {
      error = "Username is required.";
    } else if (name === "email" && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      error = "Enter a valid email.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters.";
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    validateField(name, value); // Validate the field as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = Object.keys(formData).every((field) => {
      validateField(field, formData[field]);
      return !errors[field];
    });
    if (formIsValid) {
      setIsSubmitting(true);
      // Mimic API request
      setTimeout(() => {
        alert("Signup successful!");
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div id="vantajs" className="signup-cont w-screen h-screen flex justify-center items-center">
      <div className="signup-form-cont">
        <h1 className="signup-heading text-2xl font-semibold">Create an account</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          
          <div>
            <div className={`form-group ${errors.name ? "error-field" : formData.name ? "success-field" : ""}`}>
              <MdOutlineDriveFileRenameOutline size={24} />
              <input
                type="text"
                name="name"
                autoComplete='off'
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <p className="error-message">{errors.name}</p>
          </div>

          <div>
            <div className={`form-group ${errors.username ? "error-field" : formData.username ? "success-field" : ""}`}>
              <FaUserCircle size={24} />
              <input
                type="text"
                name="username"
                autoComplete='off'
                value={formData.username}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <p className="error-message">{errors.username}</p>
          </div>

          <div>
            <div className={`form-group ${errors.email ? "error-field" : formData.email ? "success-field" : ""}`}>
              <IoMdMail size={24} />
              <input
                type="email"
                name="email"
                autoComplete='off'
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <p className="error-message">{errors.email}</p>
          </div>

          <div>
            <div className={`form-group ${errors.password ? "error-field" : formData.password ? "success-field" : ""}`}>
              <FaLock size={20} />
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                autoComplete='off'
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
          </div>

          <div className="form-group submit font-bold text-xl">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Signing up..." : "Sign Up"}</span>
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link className="hover:underline" to="/login">Already have an account? Login</Link>
            <div className="other-opts mt-5">
              <p className="font-semibold">Other signup methods</p>
              <div className="p-4 flex gap-2 justify-around flex-wrap">
                <a href=""><FaGoogle size={24} /></a>
                <a href=""><FaFacebook size={24} /></a>
                <a href=""><IoMdMail size={24} /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;


