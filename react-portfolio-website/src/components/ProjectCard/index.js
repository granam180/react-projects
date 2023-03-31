import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, desc, imgUrl, link }) => {
    return (
        <Col>
            <div className="proj-imgbx">
                <a href={link} className="proj-link" target="_blank" rel="noreferrer">
                    <img src={imgUrl} alt="project-link" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{desc}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}