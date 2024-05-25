import React from 'react'
import { CategoryItem } from '../category-item/Category-item'
import "./Directory.styles.scss"

const Directory = ({categories}) => {
    return (
        <div className="categories-container">
            {
                categories.map((categorie) => (
                    <CategoryItem key={categorie.id} category={categorie} />
                ))
            }
        </div>
    )
}

export default Directory