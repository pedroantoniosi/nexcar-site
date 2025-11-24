import styles from "./index.module.css";

const CarFinder = () => {
  return (
    <section className={styles.CarFinder}>
      <h2>Encontre agora seu próximo veículo</h2>
      <div className={styles.CarFinderContent}>
        <div className="grid-2  gap-1">
          <button className={styles.btnSelector}>Novo</button>
          <button className={styles.btnSelector}>Modelo</button>
          <button className={styles.btnSelector}>Quilometros</button>
          <button className={styles.btnSelector}>Preço</button>
        </div>
        <div className="row justify-center">
          <button className={styles.btnSelector}>Mostrar Resultados</button>
        </div>
      </div>
    </section>
  );
};

export default CarFinder;
