import React from "react";
import styles from "./style.module.css";
interface IProps {
  name: string;
  value: number;
}

export function ListItem({ name, value }: IProps) {
  return (
    <div className={styles.itemLayoutBox}>
      <div className={styles.contentBox}>
        {value} | {name}
      </div>
    </div>
  );
}
