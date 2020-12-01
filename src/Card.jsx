import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardContent = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.imgSrc} height="250px" fluid/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardContent;