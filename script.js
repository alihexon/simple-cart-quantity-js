let cartQuantity = 0;

function updateCartQuantityHigher(value) {
  if (cartQuantity + value > 10) {
    alert('You can not store that many items in your cart.');
    return;
  }
  cartQuantity += value;
  console.log(`Cart Quantity: ${cartQuantity}`);
}

function updateCartQuantityLower(value) {
  if (cartQuantity - value < 0) {
    alert('You do not have any items in your cart to remove.');
    return;
  }
  cartQuantity -= value;
  console.log(`Cart Quantity: ${cartQuantity}`);
}