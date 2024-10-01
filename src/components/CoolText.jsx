import styles from "./cooltext.module.css";

export default function CoolText({ children }) {
  return <span className={styles.coolText}>{children}</span>;
}
