import { CSSProperties } from "react";
import styles from "./Card.module.css";

interface Props {
  title?: React.ReactNode;
  content?: React.ReactNode;
  addStyles?: CSSProperties;
}

export const Card = ({ title, content, addStyles }: Props) => {
  return (
    <div className={styles.root} style={addStyles}>
      {title && <div className={styles.title}>{title}</div>}
      {content && <div>{content}</div>}
    </div>
  );
};
