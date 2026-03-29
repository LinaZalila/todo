import React from 'react'



import { Container, Form, Button, Card } from "react-bootstrap"

export default function Contact() {

  return (
    <Container className="mt-5 d-flex justify-content-center">

      <Card style={{ width: "400px", padding: "20px" }}>

        <Card.Body>

          <Card.Title className="text-center mb-4">
            Contact Form
          </Card.Title>

          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send
            </Button>

          </Form>

        </Card.Body>

      </Card>

    </Container>
  )
}

