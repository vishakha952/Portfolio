// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className="first">
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="second">
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} `}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  {/* ${historyItem.organisation} */}
                <div className={styles.mytext}> <ul >
                    {/* {historyItem.experiences.map((experience, id) => { */}
                      
                        {/* (<li key={id}>{experience}</li>), */}
                        
                          <li>
                            <a
                              className={styles.mylinks}
                              href="https://pdflink.to/9ab68fa3/"
                              target="blank"
                            >
                              Inhouse internship program in Web Develpment
                            </a>
                          </li><br></br>
                        
                        
                          <li>
                            <a
                              className={styles.mylinks}
                              href="https://pdflink.to/46d56554/"
                              target="blank"
                            >
                              Summer InternShip Program in MERN Full Stack Development
                            </a>
                          </li><br></br>
                        
                          <li>
                            <a
                              className={styles.mylinks}
                              href="https://pdflink.to/1833629a/"
                              target="blank"
                            >
                              Python By Example
                            </a>
                          </li><br></br>
                        
                          <li>
                            <a
                              className={styles.mylinks}
                              href="https://pdflink.to/e2c73d29/"
                              target="blank"
                            >
                              Programming Concepts in Python
                            </a>
                          </li>
                        
                  </ul></div> 
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
