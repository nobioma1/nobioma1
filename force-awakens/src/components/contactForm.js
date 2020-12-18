import React, { useState } from "react";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import axios from "axios";

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

const ContactForm = ({ closeForm, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleChange = e => {
    const target = e.target;
    setFormData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": event.target.getAttribute("name"),
          ...formData,
        }),
      })
      .then(response => {
        onSuccess();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(err => setError());
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
        name="Contact Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Hal Jordan"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">What is your email?</label>
          <input
            id="email"
            name="email"
            placeholder="hello@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
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
