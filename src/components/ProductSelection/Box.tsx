import React from "react";
import styles from "./style.module.css";
import { ProductSelectionItem } from "./Item";

interface IProps {
  products: { name: string; id: number }[];
  addProductOnList: (id: number) => void;
}

export function ProductSelectionBox({ products, addProductOnList }: IProps) {
  return (
    <div className={styles.gridLayout}>
      {products.map(product => (
        <ProductSelectionItem
          productName={product.name}
          onClick={async () => addProductOnList(product.id)}
        />
      ))}
    </div>
  );
}
