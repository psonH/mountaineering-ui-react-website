import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="light-bg py-5" name="faq">
      <div className="w-75 mx-auto">
        <div className="heading mb-5">
            <h3>Frequently Asked Questions</h3>
            <hr />
        </div>
        <Accordion defaultActiveKey="0">
           <AccordionContent />
        </Accordion>
      </div>
    </div>
  );
};

const AccordionContent = () => {
    const questions = [
        {
            id: "0",
            title: "How to sign up for the classes?",
            answer: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: "1",
            title: "Where do we go for the Trails Trips Extra Bonanza every winter?",
            answer: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: "2",
            title: "When is the deadline to enroll for the trips?",
            answer: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: "3",
            title: "How can we pay the fees for the gears for camping and mountaineering?",
            answer: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: "4",
            title: "How many trips are planned each quarter?",
            answer: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ]
    return (
        <>
            {
                questions.map(question => {
                    return (
                        <Card key={question.id}>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={question.id}>
                                {question.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={question.id}>
                            <Card.Body>{question.answer}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default FAQ;
