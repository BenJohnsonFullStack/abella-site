"use client";

import { useState } from "react";
import { SecondaryButton } from ".";
import { buttonText } from "@/constants";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street_address: "",
  city: "",
  state: null,
  zip_code: "",
  date_of_birth: "",
};

const RegistrationForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // new subscriber container for manipulation/submission
      let newSubscriber = {};

      for (let input in formValues) {
        // ensure all fields are filled out
        if (!formValues[input]) {
          // replace underscores with white space
          input = input.replaceAll("_", " ");

          // customize message for missing phone number
          const inputField = input === "phone" ? "phone number" : input;

          // set error message
          setError(`Please enter your ${inputField}.`);
          return;
        } else {
          // trim and lower case all form input responses
          newSubscriber[input] = formValues[input].trim().toLowerCase();
        }
      }

      // POST request
      const response = await fetch("api/subscribers", {
        method: "POST",
        body: JSON.stringify(newSubscriber),
      });

      // set responses for form
      if (response.ok) {
        setMessage(
          "Thanks for your submission! A member of our team will reach out to you as soon as possible."
        );
        setFormValues(initialFormValues);
        setError("");
      } else {
        // form validation error
        setError(
          "Something went wrong. Please ensure that all fields are filled out and that you don't already have an existing account with us."
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container card">
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formValues.first_name}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formValues.last_name}
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
        <label htmlFor="street_address">Street Address</label>
        <input
          type="text"
          name="street_address"
          id="street_address"
          value={formValues.street_address}
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

        {/* STATE DROPDOWN SELECTOR */}
        <select
          className="dropdown"
          name="state"
          onChange={handleChange}
          value={formValues.state || ""}
        >
          <option value="">Select Your State</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>

        <label htmlFor="zip_code">Zip Code</label>
        <input
          type="text"
          name="zip_code"
          id="zip_code"
          value={formValues.zip_code}
          placeholder="Enter your zip code"
          onChange={handleChange}
        />
        <label htmlFor="date_of_birth">Date of Birth</label>
        <input
          type="text"
          name="date_of_birth"
          value={formValues.date_of_birth}
          id="date_of_birth"
          placeholder="MM-DD-YYYY"
          onChange={handleChange}
        />
        <SecondaryButton className="submit-btn">
          {submitting ? "Submitting..." : buttonText.submit}
        </SecondaryButton>
        <div className="submit-message">
          <p className={error ? "error" : ""}>{error ? error : message}</p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
