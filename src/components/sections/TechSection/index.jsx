import { TechList } from "./TechList"

import styles from "../TechSection/TechList/styles.module.css"

import { technologies } from "../../../data/technologies.js"

export const TechSection = () => {
    return (
        <section id="stack">
             <div className="container">
            <h2 className="title2">Tecnologias</h2>
            <ul className={styles.listContainer}>
                {technologies.map(technology => {
                    return   <TechList key={technology.name} name={technology.name} img={technology.img}/>
                })}
          

            </ul>
            </div>
        </section>
    )
}