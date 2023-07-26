import Portfolio from "../../assets/portfolio.png"
import styles from "./style.module.css"

export const Header = () => {
  return (
    <>
      <header>
      <div className="container">
        <div className={styles.header}>

        <img src={Portfolio} alt="Logo" />
        <nav>
           
          <a href="#aboutMe" className="paragraph">Sobre</a>
          <a href="#stack" className="paragraph">Stacks</a>
          <a href="#projects" className="paragraph">Projetos</a>
         
        </nav>
        <a href="#footer" className="btn">Contato</a>
        </div>
        </div>
      </header>
    </>
  );
};