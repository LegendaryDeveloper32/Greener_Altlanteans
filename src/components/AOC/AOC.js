import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./AOC.scss";
const AOC = () => {
  return (
    <div className="p-0 ">
      <Row lg={1} xs={1} className="border-2 m-0 aoc-control">
        <Col className="d-flex align-items-center justify-content-center p-5 aoc-image">
          <img src="/aoc.jpg" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center flex-column aoc-content">
          <h1>Altlanteans Official Club (AOC)</h1>
          <ul>
            <li>Sustainability community</li>
            <li>
              Allow members to participate in networking sessions, webinars and
              conferences
            </li>
            <li>Promotes open sharing of knowledge in sustainability space</li>
            <li>Encourage and facilitate collaborations</li>
            <li>Allow members to earn more tokens</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AOC;
