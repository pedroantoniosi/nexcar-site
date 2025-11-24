import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeTitle}>
              ONE MISSION
              <br /> ONE PASSION
            </h2>
            <p className={styles.homeText}></p>
          </div>
        </Container>
      </section>
      <section>
        <h2>Encontre agora seu próximo veículo;</h2>
        <CarFinder></CarFinder>
      </section>
    </>
  );
};

export default Home;
