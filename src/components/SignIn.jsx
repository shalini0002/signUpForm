import React, { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      console.log("user signed in:", user);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="bg-slate-950 h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl w-96">
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mb-4"
          />
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <Button type="submit" text="Sign In" className="w-full mb-4">
            Sign In
          </Button>
          <p className="text-white text-center ">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
