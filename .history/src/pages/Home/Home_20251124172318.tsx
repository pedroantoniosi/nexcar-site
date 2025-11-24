import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";
import Template from "../../components/Template/Index";
import TemplateAuto from "../../components/Template/template-auto";
import CardAbout from "../../components/CardAbout/Index";
import Logo from "../../assets/img/logo.png";

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
          <TemplateAuto mode="auto-fit" minWidth="350px" minHeight="600px">
            <div className={styles.ccc}>
              <div className={styles.newsCaption}></div>
            </div>
            <div className={styles.ccc}>
              <div className={styles.newsCaption}></div>
            </div>
            <div className={styles.ccc}>
              <div className={styles.newsCaption}></div>
            </div>
            <div className={styles.ccc}>
              <div className={styles.newsCaption}></div>
            </div>
            <div className={styles.ccc}>
              <div className={styles.newsCaption}></div>
            </div>
          </TemplateAuto>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center text-capitalize py-2">Nexcar Dealer</h2>
          <Template columns={4} gap="4rem">
            <CardAbout
              ico="bi bi-android"
              title="All Brands"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta."
            />
            <CardAbout
              ico="bi bi-android"
              title="Free Suport"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta."
            />
            <CardAbout
              ico="bi bi-android"
              title="Dealership"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta."
            />
            <CardAbout
              ico="bi bi-android"
              title="Affordable"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto aliquid officia impedit culpa dicta."
            />
          </Template>
        </Container>
      </section>

      <section className={styles.contactContainer}>
        <div className={styles.contactCaption}>
          <div className={styles.contacImg}>
            <img src={Logo} alt="" />
          </div>
          <h2 className={styles.contactTitle}>(24) 99999-9999</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
