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
    <form className="registration-form">
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formValues.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formValues.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone">
        Phone Number
        <input
          type="text"
          name="phone"
          id="phone"
          value={formValues.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="streetAddress">
        Street Address
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formValues.streetAddress}
          placeholder="Enter your street address"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="city">
        City
        <input
          type="text"
          name="city"
          id="city"
          value={formValues.city}
          placeholder="Enter your city"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="state">
        State
        <input
          type="text"
          name="state"
          id="state"
          value={formValues.state}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="zipCode">
        Zip Code
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={formValues.zipCode}
          placeholder="Enter your zip code"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="dateOfBirth">
        Date of Birth
        <input
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formValues.dateOfBirth}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default RegistrationForm;
