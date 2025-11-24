import styles from "./index.module.css";

interface CardAboutProps {
  children: React.ReactNode;
}

const CarFinder = ({ children }: CardAboutProps) => {
  return (
    <section className={styles.CarFinder}>
      <div className="card">
        <h2>Olá Mundo</h2>
        <p>
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
