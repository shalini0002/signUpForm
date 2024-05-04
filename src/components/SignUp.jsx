import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("signupFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "username Required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password Required";
    } else if (formData.password.length < 6) {
      newErrors.password = "password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()){
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("User signed up:", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
    });

    navigate("/signin");
  };

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }
  return (
    <div className="bg-slate-950 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-600 p-6 rounded-xl w-96"
      >
        <Input
          label="Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mb-4"
        />
        {errors.username && (
          <p className='text-red-500 mb-2'>{errors.username}</p>
        )}
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4"
        />
        {errors.email && (
          <p className="text-red-500 mb-4">{errors.email}</p>
        )}
        <div className="relative">
        <Input
          label="Password"
          name="password"
          type={passwordVisible ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          className="mb-4"
        />
        <button onClick={togglePasswordVisible} type="button" className="absolute right-2 top-2">{passwordVisible ? <FaEye /> : <FaEyeSlash />}</button>
        </div>
        {errors.password && (
          <p className="text-red-500 mb-4">{errors.password}</p>
        )}
        <Button type="submit" text="Sign Up" className="w-full mb-4">
          Sign Up
        </Button>
        <p className="text-white text-center ">Already have an account? <Link to="/signin">Sign in</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
