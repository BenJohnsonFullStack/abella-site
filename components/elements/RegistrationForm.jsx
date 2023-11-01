"use client";

import { useState } from "react";
import { CustomInput, SecondaryButton } from ".";
import { buttonText, inputFields } from "@/constants";

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
  const [state, setState] = useState({
    submitting: false,
    error: "",
    message: "",
    formValues: initialFormValues,
  });

  const { submitting, error, message, formValues } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, formValues: { ...formValues, [name]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

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
          setState((prev) => ({
            ...prev,
            error: `Please enter your ${inputField}.`,
          }));
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
        setState((prev) => ({
          ...prev,
          error: "",
          message:
            "Thanks for your submission. A member of our team will reach out to you as soon as possible",
          formValues: initialFormValues,
        }));
      } else {
        // form validation error
        setState((prev) => ({
          ...prev,
          error:
            "Something went wrong. Please ensure that all fields are filled out and that you don't already have an existing account with us.",
        }));
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: "Something went wrong. Please try again.",
      }));
    } finally {
      setState((prev) => ({ ...prev, submitting: false }));
    }
  };

  return (
    <div className="form-container card">
      <form className="registration-form" onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <div key={index} className="input-field">
            {!field.options ? (
              <CustomInput
                {...field}
                handleChange={handleChange}
                value={formValues[field.name]}
              />
            ) : (
              <>
                <label htmlFor={field.id}>{field.label}</label>
                <select
                  className="dropdown"
                  name={field.name}
                  id={field.id}
                  onChange={handleChange}
                >
                  {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        ))}
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
