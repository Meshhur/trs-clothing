import React, { useContext } from 'react'
import SHOP_DATA from "../../shop-data.json"
import { ProductContext } from '../../context/products'
import ProductCard from '../../components/product-card/ProductCard'
import "./Shop.scss"

const Shop = () => {

    const { products } = useContext(ProductContext)

    return (
        <div className='products-container'>
            {SHOP_DATA.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop