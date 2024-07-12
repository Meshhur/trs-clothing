import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import ProductCard from "../../components/product-card/ProductCard"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"
import "./Category.scss"

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])
    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
            </div>
        </Fragment>
    )
}

export default Category