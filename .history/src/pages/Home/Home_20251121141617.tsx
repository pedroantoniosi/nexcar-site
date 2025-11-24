import styles from "./index.module.css";
import Container from "../../components/Container/Index";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div></div>
        </Container>
      </section>
    </>
  );
};

export default Home;
