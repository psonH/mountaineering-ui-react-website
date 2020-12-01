import React from 'react'
import { Tab, Row, Col, Nav, Image } from 'react-bootstrap'
import team1 from './images/team-1.png';
import team2 from "./images/team-2.jpg";
import team3 from "./images/team-3.png";
import team4 from "./images/team-4.png";

export const Members = () => {
    return (
        <div className="w-75 mx-auto py-5" name="member">
            <div className="heading mb-5">
                <h3>Meet Our Team</h3>
                <hr />
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">John Aflick</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Clarke McDonald</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">John Murphy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Octavia Blake</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <MembersContent />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}


const MembersContent = () => {
    const members = [
        {
            id: "first",
            imgSrc: team1,
            title: "Founder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nunc vulputate tortor eleifend fringilla. Nullam sodales urna in enim quis quam euismod fringilla."
        },
        {
            id: "second",
            imgSrc: team2,
            title: "Co-Founder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nunc vulputate tortor eleifend fringilla. Nullam sodales urna in enim quis quam euismod fringilla."
        },
        {
            id: "third",
            imgSrc: team3,
            title: "Sr. Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nunc vulputate tortor eleifend fringilla. Nullam sodales urna in enim quis quam euismod fringilla."
        },
        {
            id: "fourth",
            imgSrc: team4,
            title: "Sr. Strategist",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nunc vulputate tortor eleifend fringilla. Nullam sodales urna in enim quis quam euismod fringilla."
        },
    ]
    return (<> 
            {
                members.map(member => {
                    return (
                        <Tab.Pane eventKey={member.id} key={member.id}>
                            <Row>
                                <Col className="d-flex justify-content-center py-4 py-md-0">
                                    <Image src={member.imgSrc} width="200px" height="200px" roundedCircle/>
                                </Col>
                                <Col>
                                    <h4>{member.title}</h4>
                                    <p>{member.description}</p>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    )
                })
            }
    </>)
}