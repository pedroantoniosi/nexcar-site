import styles from "./Grid.module.css";

const Grid = ({ columns = 3, gap = "16px", children }) => {
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
