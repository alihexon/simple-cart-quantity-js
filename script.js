let cartQuantity = 0;
const cartQuantityCounter = document.querySelector('.cart-quantity-counter');

function updateCartQuantityHigher(value) {
  const cartQuantityCounter = document.querySelector('.cart-quantity-counter');

  if (cartQuantity + value > 10) {
    alert('You can not store that many items in your cart.');
    return;
  }
  cartQuantity += value;
  cartQuantityCounter.innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function updateCartQuantityLower(value) {

  if (cartQuantity - value < 0) {
    alert('You do not have any items in your cart to remove.');
    return;
  }
  cartQuantity -= value;
  cartQuantityCounter.innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function updateCounterOnReset() {
  cartQuantity = 0;
  cartQuantityCounter.innerHTML = `The cart was reset. Cart Quantity: ${cartQuantity}`;
}