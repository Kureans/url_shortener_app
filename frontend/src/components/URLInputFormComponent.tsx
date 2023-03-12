import { Form, Button, Card } from "react-bootstrap";

function URLInputForm() {
  return (
    <Card className="InputFormCard bg-dark text-white">
      <Form className="InputForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Shorten any URL you want!</Form.Label>
          <Form.Control type="email" placeholder="Input Link here!" />
        </Form.Group>
        <Button className="UrlConvertButton" variant="primary" type="submit">Shorten</Button>
      </Form>
    </Card>
  );
}

export default URLInputForm;