import styles from "./index.module.css";

interface TemplateProps {
  auto: string;
  columns: number;
  gap: string;
  children?: React.ReactNode;
  className?: string; // classes adicionais
}

const GridAuto = ({ columns, auto, gap, children }: TemplateProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${auto}, minmax(${columns}, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default GridAuto;
