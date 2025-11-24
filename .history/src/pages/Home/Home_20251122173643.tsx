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
              ONE MISSION
              <br /> ONE PASSION
            </h2>
            <p className={styles.homeText}></p>
          </div>
        </Container>
      </section>
      <CarFinder></CarFinder>
      <Template>
        <div className="card">
          <h2>Olá Mundo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic minus
            porro eos corporis, tenetur, vero qui ut nobis explicabo
            reprehenderit perferendis at quasi voluptate asperiores vitae, sint
            deleniti tempora modi.
          </p>
        </div>
      </Template>
    </>
  );
};

export default Home;
