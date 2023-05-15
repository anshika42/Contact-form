import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const onChange = () => {};

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({[name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormValues(initialValues);
  };

  useEffect(() => {
    if (isSubmit) {
      console.log(formValues);
    }
  });

  

  return (
    <div className="container">
      {isSubmit ? (
        <div className="message success"> <h2> Signed in Successfully </h2></div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <Form className="ms-3 me-3" onSubmit={handleSubmit}>
        <h1 className="d-flex align-items-center justify-content-center">
          Contact Form
        </h1>
        <hr></hr>

        <Row className="mb-4 mt-4">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="First name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formValues.phone}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Phone number
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="message"
            placeholder="Enter any message "
            value={formValues.message}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <ReCAPTCHA
            sitekey="6LegLg8mAAAAAK8TaS1GUaFi62KIq49lsMdCu03Q
"
            onChange={onChange}
           
          />
        </div>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Button type="submit" className="mt-3">
            Submit form
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
