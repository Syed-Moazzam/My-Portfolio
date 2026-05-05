import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiPostman, SiVisualstudiocode } from "react-icons/si";

const TOOL_ITEMS = [
  { Icon: SiVisualstudiocode, name: "VS Code" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: DiGit, name: "Git" },
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TOOL_ITEMS.map(({ Icon, name }) => (
        <Col key={name} xs={4} md={2} className="tech-icons">
          <Icon aria-hidden title={name} />
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;