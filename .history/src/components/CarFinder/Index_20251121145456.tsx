import styles from "./index.module.css";

interface CarFinder {
  className?: string;
  children?: React.ReactNode;
}

const CarFinder = ({ className, children }: CarFinder) => {
  return (
    <div
      className={`${styles["CarFinder"]} ${className ? className : ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default CarFinder;
