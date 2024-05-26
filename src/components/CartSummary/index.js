// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary">
            <h1 className="order-total">
              <span className="order-total-label">Order Total:</span> RS {total}{' '}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart </p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
