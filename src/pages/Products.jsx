import React from 'react'
import Product from '../components/Products/Product'
import { useParams } from 'react-router-dom'

const Products = () => {
  const {category,subcategory} = useParams();
  // console.log("Category ",category,subcategory);
  
  return (
    <div>
        <Product title='Products' category={category} subcategory={subcategory} />
    </div>
  )
}

export default Products