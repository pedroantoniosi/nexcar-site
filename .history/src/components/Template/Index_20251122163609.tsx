import styles from "./index.module.css";

interface ButtonProps {
  columns: number;
  gap: string;
  children: React.ReactNode;
  text: string;
  className?: string; // classes adicionais
}

const Grid = ({ columns = 3, gap = "16px", children }: ButtonProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
