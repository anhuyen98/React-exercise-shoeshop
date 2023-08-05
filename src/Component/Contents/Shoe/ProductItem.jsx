import React from 'react'
import { useDispatch } from 'react-redux'
import { btShoeAction } from '../../../store/action'

const ProductItem = ({ shoeItem }) => {
  const dispatch = useDispatch()
  return (
    <div className='productItem col-4'>
      <div className='cardCustom card my-3 mx-2'>
        <div className='card-body position-relative my-1'>
          <img className='overlays' src="./images/sale/saleimgcopy.png" alt="..." />
          <img src={shoeItem.image} alt="..." style={{ width: 300, rotate: '-30deg' }} />
          <h4 className='card-title'>{shoeItem.name}</h4>
          <div className='card-subtitle'>{shoeItem.shortDescription}. . etc</div>
          <div className='star'>
            <i className="fa-solid fa-star fa-beat" style={{ color: '#ffea61' }} />
            <i className="fa-solid fa-star fa-beat" style={{ color: '#ffea61' }} />
            <i className="fa-solid fa-star fa-beat" style={{ color: '#ffea61' }} />
            <i className="fa-solid fa-star fa-beat" style={{ color: '#ffea61' }} />
            <i className="fa-solid fa-star fa-beat" style={{ color: '#ffea61' }} />
            <span> (100)</span>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <span className='card-text price'>$ {shoeItem.price}</span>
            <button className='btn addCart' onClick={() => {
              dispatch(btShoeAction.handleCart(shoeItem))
            }}>Add to Cart</button>
            <button className='btn addDetail' data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick={() => {
                dispatch(btShoeAction.handleProductDetail(shoeItem))
              }}>Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem