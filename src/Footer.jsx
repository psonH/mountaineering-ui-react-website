import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="w-75 mx-auto py-5">
      <Row>
        <Col sm={12} md={4} className="py-2 py-md-auto">
          <div>
            <address>
              Address: 460, Saint Cathrine <br />
              Montreal, Quebec <br />
              Canada.
            </address>
          </div>
        </Col>
        <Col sm={12} md={4} className="py-2 py-md-auto">
          <div>
            <h5>Follow Us</h5>
            <div className="social">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className="py-2 py-md-auto">
          <div>
            <address>
              Ph No: (89)+ 7864367943
              <br />
              Email: logo@random.com
            </address>
            <h6>
              <Link to="home" spy={true} smooth={true} duration={500}>
                Back To Top <FaAngleDoubleUp />
              </Link>
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};
