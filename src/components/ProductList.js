import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import styles from './ProductList.module.css';
import plantA from '../assets/plant-a.jpg';
import plantB from '../assets/plant-b.jpg';
import plantC from '../assets/plant-c.jpg';
import plantD from '../assets/plant-d.jpg';
import plantE from '../assets/plant-e.jpg';
import plantF from '../assets/plant-f.jpg'
import plantG from '../assets/plant-g.jpg';
import plantH from '../assets/plant-h.jpg';
import plantI from '../assets/plant-i.jpg';
import plantJ from '../assets/plant-j.jpg';
import plantK from '../assets/plant-k.jpg';
import plantL from '../assets/plant-l.jpg';
import plantM from '../assets/plant-m.jpg';

const products = [
  { id: 1,  name: 'Plant A', price: 20, image: plantA },
  { id: 2,  name: 'Plant B', price: 15, image: plantB },
  { id: 3,  name: 'Plant C', price: 25, image: plantC },
  { id: 4,  name: 'Plant D', price: 55, image: plantD },
  { id: 5,  name: 'Plant E', price: 20, image: plantE },
  { id: 6,  name: 'Plant F', price: 11, image: plantF },
  { id: 7,  name: 'Plant G', price: 28, image: plantG },
  { id: 8,  name: 'Plant H', price: 15, image: plantH },
  { id: 9,  name: 'Plant I', price: 18, image: plantI },
  { id: 10, name: 'Plant J', price: 20, image: plantJ },
  { id: 11, name: 'Plant K', price: 25, image: plantK },
  { id: 12, name: 'Plant L', price: 20, image: plantL },
  { id: 13, name: 'Plant M', price: 15, image: plantM },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Beautiful Plant Collection</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>${product.price}</p>
            <button
              className={styles.addButton}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
