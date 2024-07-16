import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import ProductCard from "../../components/product-card/ProductCard"
import { useSelector } from "react-redux"
import Spinner from "../../components/spinner/Spinner"
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector"
import "./Category.scss"

const Category = () => {
    const isLoading = useSelector(selectCategoriesIsLoading)
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])
    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner /> :
                    <div className="category-container">
                        {products &&
                            products.map(product =>
                                <ProductCard key={product.id} product={product} />
                            )}
                    </div>
            }
        </Fragment>
    )
}

export default Category