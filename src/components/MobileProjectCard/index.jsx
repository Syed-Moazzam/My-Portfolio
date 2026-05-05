import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const MobileProjectCard = ({ title, description, images, ghLink, appStoreLink, playStoreLink }) => {
  return (
    <Card className="project-card-view mobile-project-card-view">
      <div className="mobile-project-gallery">
        {(images || []).map((image, index) => (
          <img key={`${title}-img-${index}`} src={image} alt={`${title}-${index + 1}`} className="mobile-project-image" />
        ))}
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ marginBottom: "14px", textAlign: "center" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px", height: "100%" }}>
          {description}
        </Card.Text>
        <div className="mobile-project-buttons">
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank" className="mobile-project-btn">
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}
          {playStoreLink ? (
            <Button variant="primary" href={playStoreLink} target="_blank" className="mobile-project-btn">
              <FaGooglePlay /> &nbsp;Play Store
            </Button>
          ) : (
            <Button variant="primary" disabled className="mobile-project-btn">
              <FaGooglePlay /> &nbsp;Play Store (In Development)
            </Button>
          )}
          {appStoreLink ? (
            <Button variant="primary" href={appStoreLink} target="_blank" className="mobile-project-btn">
              <FaAppStoreIos /> &nbsp;App Store
            </Button>
          ) : (
            <Button variant="primary" disabled className="mobile-project-btn">
              <FaAppStoreIos /> &nbsp;App Store (In Development)
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MobileProjectCard;