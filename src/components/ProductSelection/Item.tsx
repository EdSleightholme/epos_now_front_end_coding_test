import React from "react";
import styles from "./style.module.css";
interface IProps {
  productName: string;
  onClick: () => void;
}

export function ProductSelectionItem({ productName, onClick }: IProps) {
  return (
    <div className={styles.layoutBox} onClick={onClick}>
      <div className={styles.contentBox}>
        <p>{productName}</p>
      </div>
    </div>
  );
}
