import React, { useState } from "react";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import { useLocation } from "@reach/router";
import * as qs from "query-string";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "./styled/button";

const FormContainer = styled.div`
  form > div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    input {
      height: 2.3rem;
      padding: 0 0.3rem;
    }

    textarea {
      min-height: 5rem;
      padding: 0.3rem;
    }

    input,
    textarea {
      border-radius: 4px;
      border: none;
      letter-spacing: 0.05em;

      &:focus {
        outline: none;
      }
    }
  }

  .btn-container {
    display: flex;
  }
`;

const ContactForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    "form-name": "Contact Form",
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");
  const location = useLocation();

  const handleChange = e => {
    const target = e.target;
    setFormData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    const axiosOptions = {
      url: location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    };

    axios(axiosOptions)
      .then(response => {
        setFeedback("Form submitted successfully!");

        setFormData(prev => ({
          ...prev,
          name: "",
          email: "",
          message: "",
        }));
      })
      .catch(err => setFeedback("Form could not be submitted."));
  };

  return (
    <FormContainer>
      <p>
        Hey, I'm really excited to connect with you.
        <span role="img" aria-label="dance">
          🕺🏻
        </span>
      </p>
      <form
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="NobleObioma Contact Form"
        onSubmit={e => handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={formData.name}
            type="name"
            id="name"
            name="name"
            placeholder="Hal Jordan"
          />
        </div>
        <div>
          <label htmlFor="email">What is your email?</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            id="email"
            name="email"
            placeholder="hello@email.com"
          />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            id="message"
            name="message"
            placeholder="..."
          />
        </div>
        <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} />
        {feedback && <p>{feedback}</p>}
        <div className="btn-container">
          <Button type="submit">
            <BiMailSend />
            Send
          </Button>
          <Button onClick={closeForm}>Maybe another time</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
