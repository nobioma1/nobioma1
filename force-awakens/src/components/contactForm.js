import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BiMailSend, BiMessageAltError } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";

import { Button } from "./styled/button";

const FormContainer = styled.form`
  width: 100%;

  & > label {
    display: none;
  }

  .btn-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 425px) {
      flex-direction: row-reverse;
      justify-content: center;

      button {
        width: 45%;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;

          &:hover {
            border: 1px solid #ffcd47;
          }
        }
      }
    }
  }

  .alert {
    border-radius: 3px;
  }

  .success {
    color: #81c784;
    background-color: #1b5e20;
    border-left: 2px solid white;
  }

  .error {
    color: #ffcdd2;
    background-color: #b71c1c;
    border-left: 2px solid #ff1744;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  &:not(:nth-child(3)) > label:after {
    content: " *";
    color: red;
  }

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
    border: ${({ error }) => (error ? "1px solid #dc3545" : "none")};
    letter-spacing: 0.05em;

    &:focus {
      outline: none;
    }
  }
`;

const InputField = ({
  title,
  name,
  placeholder,
  value,
  onChange,
  tag,
  valid,
}) => {
  return (
    <InputContainer
      error={valid !== undefined ? value.length > 0 && !valid : false}
    >
      <label htmlFor={name}>{title}</label>
      {tag === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          rows={6}
          onChange={onChange}
        />
      ) : (
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </InputContainer>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [{ emailValid, messageValid }, setValid] = useState({
    emailValid: false,
    messageValid: false,
  });
  const [feedback, setFeedback] = useState(null);
  const hiddenInputRef = useRef();

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setValid({
      emailValid: false,
      messageValid: false,
    });
  };

  const validate = e => {
    const target = e.target;

    if (target.name === "email")
      setValid(prev => ({
        ...prev,
        emailValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value),
      }));
    if (target.name === "message")
      setValid(prev => ({
        ...prev,
        messageValid: target.value.length > 8,
      }));
  };

  const handleChange = e => {
    const target = e.target;
    setFormData(prev => ({ ...prev, [target.name]: target.value }));
    validate(e);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFeedback(null);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        ...formData,
        "form-name": event.target.getAttribute("name"),
        "bot-field": hiddenInputRef.current.value,
        name: !formData.name ? "Anonymous" : formData.name,
      }),
    })
      .then(res => {
        clearForm();
        setFeedback({
          type: "success",
          msg: "Message has been sent, Thank you! 🙂",
        });
        setTimeout(() => {
          setFeedback(null);
        }, 5000);
      })
      .catch(err => {
        setFeedback({
          type: "error",
          msg: "Something went wrong submitting form, please try again!",
        });
      });
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
      <label>
        Don’t fill this out if you’re human:{" "}
        <input name="bot-field" ref={hiddenInputRef} />
      </label>
      <InputField
        name="name"
        title="Name"
        placeholder="Hal Jordan"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        name="email"
        title="E-mail"
        placeholder="hello@email.com"
        value={formData.email}
        onChange={handleChange}
        valid={emailValid}
      />

      <InputField
        tag="textarea"
        name="message"
        title="Message"
        placeholder="..."
        value={formData.message}
        onChange={handleChange}
        valid={messageValid}
      />

      {feedback && (
        <div
          className={`alert ${feedback.type === "error" ? "error" : "success"}`}
        >
          <p>
            {feedback.type === "error" ? (
              <BiMessageAltError />
            ) : (
              <SiMinutemailer />
            )}{" "}
            {feedback.msg}
          </p>
        </div>
      )}
      <div className="btn-container">
        <Button type="submit" disabled={!(emailValid && messageValid)}>
          <BiMailSend />
          Send
        </Button>
      </div>
    </FormContainer>
  );
};

export default ContactForm;
