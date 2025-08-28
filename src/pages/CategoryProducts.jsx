import React from 'react'
import CategoryProduct from '../components/CategoryProduct/CategoryProduct'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const { category } = useParams();
    console.log(category);
    
  return (
    <div>
        <CategoryProduct category={category} />
    </div>
  )
}

export default CategoryProducts