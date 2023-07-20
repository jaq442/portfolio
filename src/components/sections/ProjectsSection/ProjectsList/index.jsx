import GitHub from "../../../../assets/git-icon.png"
import styles from "./styles.module.css"

export const ProjectsList = ({name, description}) => {
    return (

        <li className={styles.listItem}>
          <div className={styles.projectTitle}>
            <h3 className="title3">{name}</h3>
            <img src={GitHub} alt="Logo GitHub" />
          </div>
          <p className="paragraph">{description}</p>
          <a href="#" className="link">Saiba mais</a>
        </li>


    );
  };
  