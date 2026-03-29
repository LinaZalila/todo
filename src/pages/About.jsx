// import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      {/* Section About */}
     <Card
  className="p-4 shadow text-center text-dark"
  style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
>
  <h3>📘 À propos de cette application</h3>
  
  <p className="text-muted">
    Task Manager est conçue pour vous aider à rester organisé, à suivre vos responsabilités quotidiennes et à booster votre productivité. Que vous gériez vos devoirs, des projets personnels ou des tâches professionnelles, notre interface intuitive vous permet de tout garder sous contrôle facilement.
  </p>

  <hr />

  <p>✅ Ajoutez des tâches rapidement et sans effort.</p>
  <p>🚀 Améliorez vos résultats grâce à une routine structurée.</p>
  <p>🏆 Visualisez vos progrès et célébrez vos réussites.</p>
   

  <hr />

  <p className="fw-bold">
    Commencez à organiser votre vie dès aujourd'hui et profitez d'une routine plus simple et plus productive !
  </p>
</Card>
      {/* Section Features */}
      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm text-center bg-body-tertiary text-dark">
            <h5>⚡Rapide</h5>
            <p>Simple et efficace</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm text-center bg-body-tertiary text-dark">
            <h5>📱 Responsive</h5>
            <p>Fonctionne sur tous vos appareils</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm text-center bg-body-tertiary text-dark">
            <h5>🔒 Sécurisé</h5>
            <p>Vos tâches sont en lieu sûr</p>
          </Card>
        </Col>
      </Row>

      {/* Bouton d’action */}
      <div className="text-center mt-4">
        <Button onClick={() => navigate("/todo")}>🚀 Commencer</Button>
      </div>
    </Container>
  );
}