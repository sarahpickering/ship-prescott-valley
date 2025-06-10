import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  background-color: #000B58;
  border: 10px solid #cc0000;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const Intro = styled.p`
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000B58;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(17, 127, 191);
    color: #fff;
  }
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",    // from EmailJS
        "your_template_id",   // from EmailJS
        e.target,
        "HZhfurtD0xwJzwIvd"        
      )
      .then(
        () => setSubmitted(true),
        (error) => alert("Failed to send email. " + error.text)
      );
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Intro>We’d love to hear from you! Fill out the form below.</Intro>
      {submitted ? (
        <Intro>Thanks for your message! We'll be in touch shortly.</Intro>
      ) : (
        <Form onSubmit={sendEmail}>
          <Input name="name" type="text" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Your Email" required />
          <Textarea name="message" rows="5" placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      )}
    </Container>
  );
}
