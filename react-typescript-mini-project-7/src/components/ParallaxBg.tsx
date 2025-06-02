import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoInstagram, logoFacebook } from 'ionicons/icons';
import styles from './Parallax.module.css'

const ParallaxBgComp:React.FC = () => {
      useEffect(() => {
    const layers = document.querySelectorAll<HTMLElement>(`.${styles.layer}`);

    const parallax = () => {
      const y = window.scrollY;
      for (let i = 1; i < layers.length; i++) {
        const layer = layers[layers.length - i];
        layer.style.transform = `translateY(${(i * 0.1) * y}px)`;
      }
    };

    window.addEventListener('scroll', parallax);
    return () => window.removeEventListener('scroll', parallax);
  }, []);
    
  return (
    <>
       <main>
      <ul className={styles.parallax}>
        {[...Array(6)].map((_, i) => (
          <li className={styles.layer} key={i}></li>
        ))}
      </ul>

      <article className={styles.content}>
        <section className={styles.info}>
          <h1>What is Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in classical Latin literature from 45 BC. Lorem Ipsum
            comes from Cicero’s "de Finibus Bonorum et Malorum".
          </p>
        </section>

        <footer>
          <IonIcon icon={logoTwitter} />
          <IonIcon icon={logoInstagram} />
          <IonIcon icon={logoFacebook} />
        </footer>
      </article>
    </main>
    </>
  );
}

export default ParallaxBgComp;
