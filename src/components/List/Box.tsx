import React from "react";
import { ListItem } from "./Item";
import styles from "./style.module.css";

interface IProps {
  products: { name: string; value: number; id: number }[];
}

export function Listbox({ products }: IProps) {
  return (
    <div className={styles.overlayBox}>
      {products
        .filter(product => product.value !== 0)
        .map(product => (
          <ListItem {...product} />
        ))}
    </div>
  );
}
