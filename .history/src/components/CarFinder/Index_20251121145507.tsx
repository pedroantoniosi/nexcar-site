import styles from "./index.module.css";

interface CarFinderProps {
  className?: string;
  children?: React.ReactNode;
}

const CarFinder = ({ className, children }: CarFinderProps) => {
  return (
    <div
      className={`${styles["CarFinder"]} ${className ? className : ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default CarFinder;
