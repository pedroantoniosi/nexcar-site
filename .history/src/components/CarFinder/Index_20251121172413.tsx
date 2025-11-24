import styles from "./index.module.css";

const CarFinder = () => {
  const [estado, setEstado] = useState("novo");
  const [modelo, setModelo] = useState("Nexus");
  const [km, setKm] = useState(0);
  const [preco, setPreco] = useState(0);

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
          <button className={styles.btnSearch}>Mostrar Resultados</button>
        </div>
      </div>
    </section>
  );
};

export default CarFinder;
