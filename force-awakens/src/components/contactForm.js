import React, { useState } from "react";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import axios from "axios";

import { Button } from "./styled/button";

const FormContainer = styled.form`
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    input {
      font-size: 1em;
      height: 2.8rem;
      padding: 0 0.6rem;
    }

    textarea {
      font-size: 1em;
      min-height: 5rem;
      padding: 0.6rem;
      max-width: 548px;
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
    flex-direction: column;

    @media (min-width: 425px) {
      flex-direction: row-reverse;
      justify-content: space-between;

      button {
        width: 45%;
      }
    }
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
    <FormContainer
      name="Contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="Contact" />
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
          rows={8}
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
    </FormContainer>
  );
};

export default ContactForm;
