import React, { useState, useEffect } from "react";
import { data } from "../data/backpacks";
import BackPack from "../interfaces/backpackinterface";
import styles from "../styles/Product.module.css";
import Layout from "../ui/Layout";

export default function Products() {
  const [products, setProducts] = useState<BackPack[]>([]);

  const loadProducts = async () => {
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      <div className={styles.productGrid}>
        {products.map((product) => {
          return (
            <div className="product">
              <img className={styles.productImage} src={product.image} />
              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.productInfo}>{product.info}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
