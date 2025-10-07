import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      alert("Por favor completá todos los campos obligatorios.");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", date: "", time: "", message: "" });
  };

  return (
    <Container className="my-4">
      <h2>Contacto / Reservas</h2>
      {sent && <Alert variant="success">Tu consulta/reserva fue enviada correctamente.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" name="date" value={form.date} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control type="time" name="time" value={form.time} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje / Detalles</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={form.message} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}