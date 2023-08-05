import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btShoeAction } from '../../../store/action'

const ProductDetail = () => {
  const { productDetail } = useSelector((state) => state.btShoeRedux)
  const dispatch = useDispatch()
  return (
    <div className='productDetail'>
        {/* Modal */}
      <div className="Modal modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{ background: '#F5F5F5' }}>
            <div className="modal-header">
              <h1 className="modal-title mx-5" id="exampleModalLabel">{productDetail.name}</h1>
              <button type="button" className="mx-4 btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-7 p-5 row justify-content-between align-items-center' style={{height: 'fit-content'}}>
                  <div className='desc'>
                    <h4 className='my-3'>Description</h4>
                    <p className='mb-3'>{productDetail.description}</p>
                    <h4 className='my-3'>Quantity<span className='ms-3 badge text-bg-warning'>{productDetail.quantity}</span></h4>
                  </div>
                  <hr className='my-3'/>
                  <div className='col-5 price'>$ {productDetail.price}</div>
                  <div className='col-6 divBtn'>
                    <button className='btn addCart' data-bs-toggle="modal" data-bs-target="#cartModal" onClick={() => {
                      dispatch(btShoeAction.handleCart(productDetail))
                    }}>BUY NOW</button>
                  </div>
                </div>
                <div className='col-5 position-relative'>
                  <div className='itemOverlay'></div>
                  <img src={productDetail.image} alt="..." style={{ width: 400, rotate: '-30deg' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail