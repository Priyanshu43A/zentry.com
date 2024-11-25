import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../signup/Signup.css";
import FOG from "vanta/dist/vanta.fog.min";  // Use the correct FOG effect
import * as THREE from "three"; // Use installed version of three.js
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible((prevVisible) =>!prevVisible);
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: "#vantajs",  // The element where the effect will be applied
          THREE,           // Pass the THREE.js instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: "#a855f7",   // Adjust highlight color
          midtoneColor: "#ff447d",     // Adjust midtone color
          lowlightColor: "#22d3ee",   // Adjust lowlight color
          baseColor: "#ffe7e7",        // Base background color
          blurFactor: 0.41,            // Adjust blur
          scale: 2.0,                  // Adjust scale for the effect
          scaleMobile: 4.0,            // Adjust mobile scale
          backgroundAlpha: 1,          // Background transparency
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();  // Clean up the effect on component unmount
    };
  }, [vantaEffect]);

  return (
    <div id="vantajs" className="signup-cont w-screen h-screen flex justify-center items-center">
        {/* <div>
            <h1>Welcome to OyeKalakar</h1>
        </div> */}
      <div className="signup-form-cont">
        <h1 className="signup-heading text-2xl font-semibold">Welcome Back!</h1>
        <form className='signup-form' action="#">
        
            <div className="form-group">
            <FaUserCircle size={24} /> <input type="text" className="form-control" placeholder="Username or Email" />
            </div>
            
           
            <div id='pass-field' className="flex flex-col">
                <div className='form-group'>
            <FaLock size={20} /> <input type={passwordVisible ? 'text' : 'password' } className="form-control" placeholder="Password" /> <button onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye size={22} /> : <FaEyeSlash size={22} /> } </button> 
              </div>
             <div className='ml-auto font-bold text-purple-900'>
                <a className='hover:underline' href="">forgot password ?</a>
             </div>
            </div>
            <div className="form-group submit font-bold text-xl">
            <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>
            <div className='mt-5 text-center'>
            <Link className='hover:underline' to="login" >Don't have an account? Signup</Link>
            <div className="other-opts mt-5">
                <p className='font-semibold'>Other login methods</p>
                <div className='p-4 flex gap-2 justify-around flex-wrap'>
                <a href=""><FaGoogle size={24} /></a>
                <a href=""> <FaFacebook size={24} /> </a>
                <a href=""> <FaSquareXTwitter size={24} /> </a>
                </div>
            </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;