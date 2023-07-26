import GitHub from "../../assets/github-icon.png";
import LinkedIn from "../../assets/linkedin-icon.png";
import Whatsapp from "../../assets/whatsapp-icon.png";

import styles from "./styles.module.css";

import { user } from "../../data/user.js";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className={styles.footer}>
          <div>
            <h2 className="title2">Contato</h2>
                <span className="paragraph">contato@jaquelinehirosedev.com</span>
            <div>
              <a href="https://wa.me/5511943067173">
                <img
                  src={Whatsapp}
                  alt="Whatsapp logo"
                  className="btn__social"
                />
              </a>
              <a href="https://www.linkedin.com/in/jaquelineoli/">
                <img
                  src={LinkedIn}
                  alt="Linkedin Logo"
                  className="btn__social"
                />
              </a>
              <a href="https://github.com/jaq442">
                <img src={GitHub} alt="GitHub Logo" className="btn__social" />
              </a>
            </div>
          </div>
          <span className="paragraph">
            Todos os direitos reservados - {user}
          </span>
        </div>
      </div>
    </footer>
  );
};
