import styles from "./index.module.css";

interface CarFinderProps {
  className?: string;
  children?: React.ReactNode;
}

const CarFinder = ({ className, children }: CarFinderProps) => {
  return (
    <div className="col gap-1 p-1">
      <div className="grid-4">
        <button className="btnSelector">Novo</button>
        <button className="btnSelector">Modelo</button>
        <button className="btnSelector">Quilometros</button>
        <button className="btnSelector">Preço</button>
      </div>
      <div className="row">
        <button className="btnSelector">Mostrar Resultados</button>
      </div>
    </div>
  );
};

export default CarFinder;
