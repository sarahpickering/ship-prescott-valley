import { useState } from "react";
import styled from "styled-components";

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
  line-height: 1.6;
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
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000B58;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  border: 5px solid #cc0000;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(17, 127, 191);
    color: #fff;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Intro>Have a question or want to reach out? Fill out the form below and we’ll get back to you!</Intro>

      {submitted ? (
        <Intro>Thanks for your message! We’ll respond as soon as possible.</Intro>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <Textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            onChange={handleChange}
          />
          <Button type="submit">Send Message</Button>
        </Form>
      )}
    </Container>
  );
};

export default Contact;