import styles from "./index.module.css";
import { useState } from "react";

const CarFinder = () => {
  const [estado, setEstado] = useState("novo");
  const [modelo, setModelo] = useState("Nexus");
  const [km, setKm] = useState(0);
  const [preco, setPreco] = useState(0);

  return (
    <section className={styles.CarFinder}>
      <h2 className="text-capitalize">Find your next car</h2>

      <div className={styles.CarFinderContent}>
        <div className="grid-2 gap-1">
          {/* Novo / Usado */}
          <select
            className={styles.btnSelector}
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="novo">New</option>
            <option value="usado">Used</option>
          </select>

          {/* Modelo */}
          <select
            className={styles.btnSelector}
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          >
            <option value="Nexus">Nexus</option>
            <option value="Velara">Velara</option>
            <option value="Voltura">Voltura</option>
          </select>

          {/* Quilometragem */}
          <div className={styles.rangeContainer}>
            <label>Miles: {km.toLocaleString()} km</label>
            <input
              type="range"
              min={0}
              max={150000}
              step={1000}
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className={styles.range}
            />
          </div>

          {/* Preço */}
          <div className={styles.rangeContainer}>
            <label>Price: R$ {preco.toLocaleString()}</label>
            <input
              type="range"
              min={0}
              max={250000}
              step={1000}
              value={preco}
              onChange={(e) => setPreco(Number(e.target.value))}
              className={styles.range}
            />
          </div>
        </div>

        <div className="row justify-center">
          <button className={styles.btnSearch}>Mostrar Resultados</button>
        </div>
      </div>
    </section>
  );
};

export default CarFinder;
