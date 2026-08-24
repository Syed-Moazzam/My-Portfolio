import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs } from "react-icons/di";
import { FaAws, FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTypescript,
  SiAmazondynamodb,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";

/** Order: languages → backend → databases → cloud */
const TECH_ITEMS = [
  // Languages
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiPython, name: "Python" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiPhp, name: "PHP" },
  // Backend
  { Icon: DiNodejs, name: "Node.js" },
  { Icon: SiNestjs, name: "NestJS" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiGraphql, name: "GraphQL" },
  // Databases
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiAmazondynamodb, name: "DynamoDB" },
  { Icon: IoLogoFirebase, name: "Firebase" },
  { Icon: SiSupabase, name: "Supabase" },
  // Cloud platforms
  { Icon: FaAws, name: "AWS" },
  { Icon: SiMicrosoftazure, name: "Azure" },
  { Icon: SiGooglecloud, name: "GCP" },
];

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TECH_ITEMS.map(({ Icon, name }) => (
        <Col key={name} xs={4} md={2} className="tech-icons">
          <Icon aria-hidden title={name} />
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;