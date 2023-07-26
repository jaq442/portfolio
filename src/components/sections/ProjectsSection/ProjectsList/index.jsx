import GitHub from "../../../../assets/git-icon.png"
import styles from "./styles.module.css"

export const ProjectsList = ({name, description, link}) => {
    return (

        <li className={styles.listItem}>
          <div className={styles.projectTitle}>
            <h3 className="title3">{name}</h3>
          </div>
          <p className="paragraph">{description}</p>
          <a href={link} className="link">Saiba mais</a>
        </li>


    );
  };
  