import React, { Component } from 'react'

class Cart extends Component  {
  render() {
    return (
      <section className="cart-info">
        <h3>카트정보</h3>
        <p>수량 : 1</p>
        <p>가격 : \ 11,000</p>
        <a href="#" className="btn main">카트정보 상세보기</a>
      </section>
    );
  }
}

export default Cart