import { Form, Button, Card } from "react-bootstrap";
import { useState } from 'react';

function URLInputForm() {

  const [urlToShorten, setUrlToShorten] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  let handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:3000/shorten", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          longUrl: urlToShorten 
        }),
      });

      let resText = await res.text();
      if (res.status === 201) {
        setShortenedUrl(resText);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card className="InputFormCard bg-dark text-white">
      <Form className="InputForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Shorten any URL you want!</Form.Label>
          <Form.Control 
          type="url" 
          placeholder="Input Link here!" 
          value={urlToShorten}
          onChange={(e) => setUrlToShorten(e.target.value)}/>
        </Form.Group>
        <Button className="UrlConvertButton" variant="primary" type="submit">Shorten</Button>
      </Form>
      {shortenedUrl && (
        <p>Here is your URL: <a href={shortenedUrl} target="_blank">{shortenedUrl}</a></p>
      )}
    </Card>
  );
}

export default URLInputForm;