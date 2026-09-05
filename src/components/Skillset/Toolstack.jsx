import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import {
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiNginx,
  SiOpenai,
  SiPrometheus,
  SiPytorch,
  SiTerraform,
} from "react-icons/si";

const TOOL_ITEMS = [
  // DevOps & tools
  { Icon: FaDocker, name: "Docker" },
  { Icon: SiKubernetes, name: "Kubernetes" },
  { Icon: SiTerraform, name: "Terraform" },
  { Icon: SiHelm, name: "Helm" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
  { Icon: SiNginx, name: "Nginx" },
  { Icon: SiPrometheus, name: "Prometheus" },
  { Icon: SiGrafana, name: "Grafana" },
  { Icon: DiGit, name: "Git" },
  // AI & GenAI
  { Icon: SiOpenai, name: "OpenAI API" },
  { Icon: TbRobot, name: "LangChain" },
  { Icon: GiArtificialIntelligence, name: "Hugging Face" },
  { Icon: SiPytorch, name: "PyTorch" },
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