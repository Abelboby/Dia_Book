import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
  
      // Validate form fields
      if (!validateForm()) {
        return;
      }
  
      setLoading(true);
  
      const { firstname, lastname, email, password } = formDetails;
      console.log(formDetails);
  
      // Send registration request
      const response = await axios.post("http://localhost:5000/api/user/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
  
      // Display toast based on the response
      if (response.status === 201) {
        toast.success("User registered successfully");
        navigate("/login");
      } else {
        toast.error("Unable to register user");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const validateForm = () => {
    const { firstname, lastname, email, password, confpassword } = formDetails;

    if (!firstname || !lastname || !email || !password || !confpassword) {
      toast.error("Input field should not be empty");
      return false;
    }

    if (firstname.length < 3) {
      toast.error("First name must be at least 3 characters long");
      return false;
    }

    if (lastname.length < 3) {
      toast.error("Last name must be at least 3 characters long");
      return false;
    }

    if (password.length < 5) {
      toast.error("Password must be at least 5 characters long");
      return false;
    }

    if (password !== confpassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading">Sign Up</h2>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign up"}
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink className="login-link" to={"/login"}>
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
