"use client";

import { useState } from "react";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  dateOfBirth: "",
};

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="form-container card">
      <form className="registration-form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formValues.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formValues.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formValues.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formValues.streetAddress}
          placeholder="Enter your street address"
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formValues.city}
          placeholder="Enter your city"
          onChange={handleChange}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          value={formValues.state}
          onChange={handleChange}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={formValues.zipCode}
          placeholder="Enter your zip code"
          onChange={handleChange}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formValues.dateOfBirth}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
