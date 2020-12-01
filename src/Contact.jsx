import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (evt) => {
        evt.preventDefault();
        setShow(true);
    }
    
    return (
        <div className="light-bg py-5" name="contact">
        <div className="w-75 mx-auto">
            <div className="heading mb-5">
            <h3>Contact Us</h3>
            <p>We would love to hear from you!</p>
            <hr />
            </div>
            <div className="contact p-0 mx-1 mx-md-auto">
            <Form onSubmit={handleShow}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="What's your good name?" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Ex: john.doe@gmail.com" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="How can we connect?" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="What's on your mind?"
                        required
                    />
                </Form.Group>
                <div className="submit">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Congratulations!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Hey There! We've got your message!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Alright! 
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>     
            </Form>
            </div>
        </div>
        </div>
    );
};
