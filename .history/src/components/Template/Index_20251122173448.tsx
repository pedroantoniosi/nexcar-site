import styles from "./index.module.css";
import Container from "../Container/Index";

interface TemplateProps {
  columns: number;
  gap: string;
  children: React.ReactNode;
  text: string;
  className?: string; // classes adicionais
}

const Grid = ({ columns, gap, children }: TemplateProps) => {
  return (
    <Container>
      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {children}
      </div>
    </Container>
  );
};

export default Grid;
