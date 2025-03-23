// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.newdiv}>
              <img className={styles.image} src={getImageUrl(project.imageSrc)} alt={`img of ${project.title}`}></img>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  <li key={id} className={styles.skill}>{skill}</li>;
                })}
              </ul>
              <div >
                
<a href={project.demo} className={styles.links} target="_blank" >DEMO</a>
<a href={project.source} className={styles.links}>SOURCE</a>


                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
