import styles from "./index.module.css";
import Container from "../../components/Container/Index";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeCaption}></h2>
            <p className={styles.homeCaption}></p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
