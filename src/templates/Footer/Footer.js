import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FOOTER_LINKS_LG } from "../../assets/languages";
import styles from "./footer.module.scss";

const Footer = () => {
  const sessionStorege = useSelector((store) => store.sessionStorege);

  const linksViev = FOOTER_LINKS_LG.map((item) => (
    <Link
      key={item.id}
      to={item.link}
      href="../../../public/assets/regulaminPL.pdf"
    >
      {sessionStorege === "PL" ? item.pl : item.ua}
    </Link>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.links}>
          <a href="/assets/regulaminPL.pdf" target="blank">
            {sessionStorege === "PL"
              ? FOOTER_LINKS_LG[0].pl
              : FOOTER_LINKS_LG[0].ua}
          </a>
          <Link to={FOOTER_LINKS_LG[1].link}>
            {sessionStorege === "PL"
              ? FOOTER_LINKS_LG[1].pl
              : FOOTER_LINKS_LG[1].ua}
          </Link>
          <Link to={FOOTER_LINKS_LG[2].link}>
            {sessionStorege === "PL"
              ? FOOTER_LINKS_LG[2].pl
              : FOOTER_LINKS_LG[2].ua}
          </Link>
        </div>
        <div className={styles.info}>
          <h3>TransForUkraine</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis
            repudiandae aliquid non? Veritatis, aperiam. Illum ipsa fugiat nisi
            corporis aperiam labore asperiores nostrum perspiciatis, maxime vel
            quae accusantium recusandae.
          </p>
        </div>
        <div className={styles.copy}>
          <p>
            &copy;{" "}
            <a href="https://www.tomaszmatras.pl/" target="blank">
              developerweb.pl
            </a>{" "}
            2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);