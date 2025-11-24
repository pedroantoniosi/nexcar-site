import styles from "./index.module.css";
import Container from "../../components/Container/Index";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeTitle}>ONE MISSION, ONE PASSION</h2>
            <p className={styles.homeText}></p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
