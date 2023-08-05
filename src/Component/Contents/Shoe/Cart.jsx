import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btShoeAction } from '../../../store/action'
const Cart = () => {
  const dispatch = useDispatch()
  const { carts } = useSelector((state) => state.btShoeRedux)
  return (
    <div className='Cart text-end me-5 my-4'>
      <button className='btn myCart' data-bs-toggle="modal" data-bs-target="#cartModal">
        <i className="fa-solid fa-cart-shopping fa-bounce"></i>
        <h4 className='d-inline-block ms-2 my-0'>Cart</h4>
      </button>
      {/* Modal */}
      <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">My Cart</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body text-center">
              {
                carts.length ? (
                  <table className='table' style={{borderRadius: 6}}>
                    <thead className='thead'>
                      <tr className='tr'>
                        <th>Code</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        carts.map((cart, index) => {
                          return (
                            <tr key={cart.id}>
                              <td>{index + 1}</td>
                              <td>{cart.name}</td>
                              <td><img className='img-fluid' style={{ width: 100, height: 100 }} src={cart.image} alt="..." /></td>
                              <td>$ {cart.price}</td>
                              <td>
                                <button className='btn btn-success' onClick={() => {
                                  dispatch(btShoeAction.handleQuantity({
                                    id: cart.id,
                                    quantity: 1
                                  }))
                                }}>+</button>
                                <span className='mx-3'>{cart.cartQuantity}</span>
                                <button className='btn btn-danger' onClick={() => {
                                  dispatch(btShoeAction.handleQuantity({
                                    id: cart.id,
                                    quantity: -1
                                  }))
                                }}>-</button>
                              </td>
                              <td>$ {cart.cartQuantity * cart.price}</td>
                              <td>
                                <button className='btn btn-danger' onClick={() => {
                                  dispatch(btShoeAction.deleteProduct(cart.id))
                                }}>x</button>

                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                ) : (
                  <h2 className='text-center'>Please add products</h2>
                )
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btnPay" data-bs-dismiss="modal">Pay up</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Cart