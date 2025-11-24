import styles from "./index.module.css";

interface CardAboutProps {
  title: string;
  text: string;
  ico: string;
}

const CarFinder = ({ title, text, ico }: CardAboutProps) => {
  return (
    <section className={styles.CardAbout}>
      <div className="card col">
        <span className={styles.CardAboutIco}>
          <i className={ico}></i>
        </span>
        <h2 className="cardTitle text-center py-1 text-uppercase">{title}</h2>
        <p className="cardText text-center">{text}</p>
      </div>
    </section>
  );
};

export default CarFinder;
