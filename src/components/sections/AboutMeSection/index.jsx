import styles from "./styles.module.css";

export const AboutMeSection = () => {
  return (
    <>
      <section id="aboutMe">
        <div className="container">
          <div className={styles.aboutMeSection}>
            <h2 className="title2">Sobre mim</h2>
            <p className="paragraph">
              Sempre me interessei pelo mundo da tecnologia e suas
              possibilidades. Por minha afinidade com
              área de humanas cursei Relações Públicas, trabalhei na área e
              também como comissária de voo. Atualmente estou em transição de carreira para a área de desenvolvimento web, cursando na Kenzie Academy com o intuito de me tornar
              Desenvolvedora. Meu compromisso com a tecnologia é trazer soluções
              de forma inovadora e eficiente unindo a vontade de facilitar a
              vida das pessoas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
