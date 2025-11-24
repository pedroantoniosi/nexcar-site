import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";
import Template from "../../components/Template/Index";
import CardAbout from "../../components/CardAbout/Index";

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
          <CarFinder></CarFinder>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center text-capitalize py-2">Nexcar Dealer</h2>
          <Template columns={4} gap="4rem">
            <CardAbout
              ico="bi bi-android m-auto"
              title="All Brands"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta, aperiam itaque facilis eligendi odit."
            />
            <CardAbout
              ico="bi bi-android m-auto"
              title="Free Suport"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta, aperiam itaque facilis eligendi odit."
            />
            <CardAbout
              ico="bi bi-android m-auto"
              title="Dealership"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta, aperiam itaque facilis eligendi odit."
            />
            <CardAbout
              ico="bi bi-android m-auto"
              title="Affordable"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta, aperiam itaque facilis eligendi odit."
            />
          </Template>
        </Container>
      </section>
    </>
  );
};

export default Home;
