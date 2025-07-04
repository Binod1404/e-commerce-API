import { authHeader } from './auth.js';

export async function fetchProducts() {
  const res = await fetch('/products');
  return res.json();
}

export async function addToCart(productId, quantity) {
  const res = await fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    body: JSON.stringify({ productId, quantity })
  });
  return res.json();
}
