import styles from "./index.module.css";

interface CardAboutProps {
  title: string;

  children: React.ReactNode;
}

const CarFinder = ({ children }: CardAboutProps) => {
  return (
    <section className={styles.CarFinder}>
      <div className="card col">
        <span className="cardIco">
          <i></i>
        </span>
        <h2 className="cardTitle">Olá Mundo</h2>
        <p className="cardText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic minus
          porro eos corporis, tenetur, vero qui ut nobis explicabo reprehenderit
          perferendis at quasi voluptate asperiores vitae, sint deleniti tempora
          modi.
        </p>
      </div>
    </section>
  );
};

export default CarFinder;
