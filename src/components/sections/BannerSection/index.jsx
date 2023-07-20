import Banner from "../../../assets/banner-img.png";
import styles from "./style.module.css";
import { username } from "../../../data/user.js";

export const BannerSection = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.bannerContainer}>
            <div className={styles.bannerBox}>
              <h3 className="label">{username}</h3>

              <h1 className="title1">Bem-vindo ao meu portfólio</h1>
              <div className={styles.bannerSection}>
                <p className="paragraph">Uma frase</p>
                <a href="#" className="btn">
                  Saiba mais
                </a>
              </div>
            </div>
            <img src={Banner} alt="Imagem de computador" />
          </div>
        </div>
      </section>
    </>
  );
};
