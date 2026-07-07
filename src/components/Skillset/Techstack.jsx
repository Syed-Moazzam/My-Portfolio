import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiReact } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws, FaCss3Alt, FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTypescript,
  SiAmazondynamodb,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";

/** Order: languages → frontend/backend → mobile → databases → cloud */
const TECH_ITEMS = [
  // Languages
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiPython, name: "Python" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiPhp, name: "PHP" },
  // Technologies
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: FaCss3Alt, name: "CSS3" },
  { Icon: DiReact, name: "React" },
  { Icon: TbBrandReactNative, name: "React Native" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: DiNodejs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiNestjs, name: "NestJS" },
  { Icon: SiLaravel, name: "Laravel" },
  // Databases
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
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