import React from 'react'
import HeroSlider from '../components/HeroSlider/HeroSlider'
// import Product from '../components/Products/Product'
import SectionTitle from '../components/SectionTitle'
import { useParams } from 'react-router-dom'
import Category from '../components/Categories/Category'
import LatestCollection from '../components/LatestCollection/LatestCollection'

const HomePage = () => {
  const {category,section} = useParams();
  return (
    <>
        <HeroSlider />
        <Category title='Shop For' category={category} section={section} />
        <LatestCollection pageTitle='Latest Collection' />
    </>
  )
}

export default HomePage