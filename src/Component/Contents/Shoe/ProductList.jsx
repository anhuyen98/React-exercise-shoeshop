import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ dataList }) => {
  return (
    <div className='row container m-auto text-center p-0'>
      {
        dataList.map((shoeItem) =>
          <ProductItem
            shoeItem={shoeItem}
            key={shoeItem.id} />
        )
      }
    </div>
  )
}

export default ProductList