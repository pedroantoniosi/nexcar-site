import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";
import Template from "../../components/Template/Index";
import CardAbout from "../../components/CardAbout/Index";
import contactBanner from "../../assets/img/logo.png";
import contactBannerMobile from "../../assets/img/contact-banner-mobile.png";

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

      {/* <section>
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
      </section> */}

      <section className={styles.contactContainer}>
        <div className={styles.contactCaption}>
          <div className={styles.contacImg}>
            <img
              src={
                typeof window !== "undefined" && window.innerWidth < 768
                  ? contactBannerMobile
                  : contactBanner
              }
              alt=""
            />
          </div>
          <h2 className={styles.contactTitle}>(24) 99999-9999</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
