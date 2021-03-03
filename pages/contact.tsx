import styles from "../styles/Contact.module.css";
import Layout from "../ui/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <h2>Contact US</h2>

        <div className={styles.ourLinks}>
          <h3>Facebook: Backpacks Shop</h3>
          <h3>Telephone: 001122233</h3>
          <h3>Email: backpacks@gmail.com</h3>
        </div>

        <footer className={styles.homeFooter}>
          React Backpacks store &copy; 2021
        </footer>
      </div>
    </Layout>
  );
}
