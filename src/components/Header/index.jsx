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
           
          <a href="#" className="paragraph">Sobre</a>
          <a href="#" className="paragraph">Stack</a>
          <a href="#" className="paragraph">Projetos</a>
         
        </nav>
        <a href="#" className="btn">Contato</a>
        </div>
        </div>
      </header>
    </>
  );
};
