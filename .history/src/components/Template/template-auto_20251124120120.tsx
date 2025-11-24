import styles from "./index.module.css";

interface AutoGridProps {
  mode: "auto-fill" | "auto-fit";
  minWidth: string;
  gap?: string;
  children?: React.ReactNode;
  className?: string;
}

const AutoGrid = ({
  mode,
  minWidth,
  gap = "16px",
  children,
  className,
}: AutoGridProps) => {
  return (
    <div
      className={`${styles.grid} ${className || ""}`}
      style={{
        gridTemplateColumns: `repeat(${mode}, minmax(${minWidth}, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default AutoGrid;
