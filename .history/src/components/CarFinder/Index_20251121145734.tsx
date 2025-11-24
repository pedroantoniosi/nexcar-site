import styles from "./index.module.css";

interface CarFinderProps {
  className?: string;
  children?: React.ReactNode;
}

const CarFinder = ({ className, children }: CarFinderProps) => {
  return (
    <div className="col gap-1 p-1">
      <div className="grid-4">
        <button className="btnSelector"></button>
        <button className="btnSelector"></button>
        <button className="btnSelector"></button>
        <button className="btnSelector"></button>
      </div>
      <div className="row">
        <button className="btnSelector"></button>
      </div>
    </div>
  );
};

export default CarFinder;
