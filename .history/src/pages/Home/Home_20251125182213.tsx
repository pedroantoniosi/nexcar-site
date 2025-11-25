import styles from "./index.module.css";
import Container from "../../components/Container/Index";
import CarFinder from "../../components/CarFinder/Index";
// import Template from "../../components/Template/Index";
import TemplateAuto from "../../components/Template/template-auto";
import CardAbout from "../../components/CardAbout/Index";
import Logo from "../../assets/img/logo.png";
import firstNews from "../../assets/img/news-1.png";
import secondNews from "../../assets/img/news-2.png";
import thirdNews from "../../assets/img/news-3.png";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <Container className={styles.homeContent}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeTitle}>
              <span>ONE MISSION</span>
              <span>ONE PASSION</span>
            </h2>
            <p className={styles.homeText}></p>
          </div>
          <CarFinder></CarFinder>
        </Container>
      </section>

      <section className={styles.newsContainer}>
        <Container className={styles.newsContent}>
          <div className={styles.newsCard}>
            <img className={styles.newsImg} src={firstNews} alt="" />
            <div className={styles.newsCaption}>
              <h2 className={styles.newsTitle}>Lorem ipsum dolor sit</h2>
              <p className={styles.newsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                assumenda numquam velit?
              </p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <img className={styles.newsImg} src={secondNews} alt="" />
            <div className={styles.newsCaption}>
              <h2 className={styles.newsTitle}>Lorem ipsum dolor sit</h2>
              <p className={styles.newsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                assumenda numquam velit?
              </p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <img className={styles.newsImg} src={thirdNews} alt="" />
            <div className={styles.newsCaption}>
              <h2 className={styles.newsTitle}>Lorem ipsum dolor sit</h2>
              <p className={styles.newsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                assumenda numquam velit?
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center text-capitalize py-2">Nexcar Dealer</h2>
          <TemplateAuto
            mode="auto-fit"
            minWidth="250px"
            minHeight="unset"
            gap="4rem"
          >
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
          </TemplateAuto>
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
