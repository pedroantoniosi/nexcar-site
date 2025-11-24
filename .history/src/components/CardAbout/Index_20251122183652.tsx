import styles from "./index.module.css";

interface CardAboutProps {
  title: string;
  text: string;
  ico: string;
  children?: React.ReactNode;
}

const CarFinder = ({ title, text, ico, children }: CardAboutProps) => {
  return (
    <section className={styles.CarFinder}>
      <div className="card col">
        <span className="cardIco">
          <i>{ico}</i>
        </span>
        <h2 className="cardTitle">{title}</h2>
        <p className="cardText">{text}</p>

        {children && <div className="cardChildren">{children}</div>}
      </div>
    </section>
  );
};

export default CarFinder;
