import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsBootstrapFill } from "react-icons/bs";
import { DiNodejs, DiReact } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiAntdesign,
  SiChakraui,
  SiExpress,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

/** Order: frontend → backend → mobile → databases → cloud / DevOps */
const TECH_ITEMS = [
  // Frontend
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: FaCss3Alt, name: "CSS3" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: DiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiChakraui, name: "Chakra UI" },
  { Icon: SiMaterialui, name: "Material UI" },
  { Icon: SiAntdesign, name: "Ant Design" },
  { Icon: BsBootstrapFill, name: "Bootstrap" },
  // Backend
  { Icon: DiNodejs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiNestjs, name: "NestJS" },
  // Mobile
  { Icon: TbBrandReactNative, name: "React Native" },
  // Databases / data
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: IoLogoFirebase, name: "Firebase" },
  // Cloud / DevOps
  { Icon: FaAws, name: "AWS" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
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