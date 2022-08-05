import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className = "pl">
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-desc">
                Please find below my Web Development projects.
                <br></br>For more details, please click on a project to view the website or check out my <a href="https://github.com/paulinakopec" target="_blank" rel="noreferrer" className="pl-github-link">GitHub</a> account.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList
