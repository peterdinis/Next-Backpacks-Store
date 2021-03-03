import styles from "../styles/Home.module.css";
import Layout from "../ui/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.home}>
          <h1 className={styles.homeTitle}>React Backpack store</h1>
          <p className={styles.homeSubTitle}>Quality backpacks for normal prices</p>
          <div className={styles.buttonHelper}>
            <button className={styles.homeButton}>
              <a href="/products" className={styles.homeLink}>
                See our backpacks
              </a>
            </button>
          </div>
        </div>

        <div className={styles.homeAbout}>
          <h1 className={styles.homeAboutHeader}>About Us</h1>

          <div className={styles.homeAboutText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              aut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tenetur, aut? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tenetur, aut? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur, aut? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur, aut? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tenetur, aut? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur, aut? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Tenetur, aut?
            </p>
          </div>
        </div>
        <footer className={styles.homeFooter}>
          React Backpack store &copy; 2021
        </footer>
      </Layout>
    </div>
  );
}
