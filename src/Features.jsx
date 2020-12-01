import React from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "./Card";
import coro1 from "./images/coro-1.jpg";
import coro2 from "./images/coro-2.jpg";
import coro3 from "./images/coro-3.jpg";

export const Features = () => {
  return (
    <div name="stories" >
        <div className="mt-5 mb-5">
          <div className="heading mb-5 w-75 mx-auto">
                <h3>Our Stories of Glory</h3>
                <hr />
          </div>
          <Row className="blogs p-0 mx-1 mx-md-auto">
              <Col xs={12} md={6} lg={4} className="py-2">
                <CardContent imgSrc={coro1} title="Serenity is Vital" />
              </Col>
              <Col xs={12} md={6} lg={4} className="py-2">
                <CardContent imgSrc={coro2} title="Take a Walk in Park" />
              </Col>
              <Col xs={12} md={6} lg={4} className="py-2">
                <CardContent imgSrc={coro3} title="Meditate under the Sun" />
              </Col>
          </Row>
        </div>
    </div>
    
  );
};
