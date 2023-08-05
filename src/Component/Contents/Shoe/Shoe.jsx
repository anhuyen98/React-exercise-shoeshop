import React from 'react'
import ProductList from './ProductList'
import dataList from './data.json'
import Cart from './Cart'
import ProductDetail from './ProductDetail'

const Shoe = () => {
  return (
    <div className='shoe py-5'>
      <Cart />
      <ProductList dataList={dataList}/>
      <ProductDetail />
    </div>
  )
}

export default Shoe