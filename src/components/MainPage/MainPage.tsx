import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { Topbar } from "../Topbar/Topbar";
import { ProductSelectionBox } from "../ProductSelection/Box";
import { Listbox } from "../List/Box";

export function MainPage() {
  const [storedData, setStoredData] = useState<{
    listOfProducts: [{ id: number; name: string; value: number }] | [];
  }>({
    listOfProducts: [{ id: -1, name: "Loading...", value: 0 }]
  });

  useEffect(() => {
    fetch("https://api.testeposnowhq.com/api/v4/Product", {
      method: "GET",
      headers: {
        authorization: "Basic APIKEYHERE"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data) {
          const formattedProducts = data.map((product: any) => {
            return { name: product.Name, id: product.Id, value: 0 };
          });

          setStoredData({ listOfProducts: formattedProducts });
        }
      });
    return;
  }, []);

  const addValueToProduct = (productId: number) => {
    const arrayToEdit = storedData.listOfProducts;
    const product = arrayToEdit.find(product => product.id === productId);
    if (product) {
      product.value = product.value + 1;
    }
    setStoredData({ listOfProducts: arrayToEdit });
  };

  return (
    <div className={styles.mainBlock}>
      <div className={styles.productBlock}>
        <Topbar />
        <ProductSelectionBox
          products={storedData.listOfProducts}
          addProductOnList={addValueToProduct}
        />
      </div>

      <Listbox products={storedData.listOfProducts} />
    </div>
  );
}
