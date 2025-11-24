import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";
import Template from "../../components/Template/Index";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeTitle}>
              <span
                style={{
                  color: `var(--primaryColor)`,
                  transform: `translateX(-100px)`,
                }}
              >
                ONE MISSION
              </span>
              <span
                style={{
                  transform: `translateX(100px)`,
                }}
              >
                ONE PASSION
              </span>
            </h2>
            <p className={styles.homeText}></p>
          </div>
        </Container>
      </section>
      <CarFinder></CarFinder>
      <Container>
        <Template columns={4} gap="4rem"></Template>
      </Container>
    </>
  );
};

export default Home;
