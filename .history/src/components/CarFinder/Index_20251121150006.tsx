import styles from "./index.module.css";

const CarFinder = () => {
  return (
    <div className="col gap-1 p-1">
      <div className="grid-2">
        <button className={styles.btnSelector}>Novo</button>
        <button className={styles.btnSelector}>Modelo</button>
        <button className={styles.btnSelector}>Quilometros</button>
        <button className={styles.btnSelector}>Preço</button>
      </div>
      <div className="row justify-center">
        <button className={styles.btnSelector}>Mostrar Resultados</button>
      </div>
    </div>
  );
};

export default CarFinder;
