let cart = JSON.parse(localStorage.getItem('cartItems'));
let displaycheck = document.querySelector("#displaycheck");
let total = document.querySelector('#totalDisplay');

function displayContent() {
  displaycheck.innerHTML = "";
  console.log(cart);
  cart.forEach((item) => {
    displaycheck.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button onclick='deleteItem(${item.id})'>delete</button></td> 
      </tr>
    `;
  });

  calculateTotalPrice(); // Call the calculateTotalPrice function to update the total
}

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((item) => {
    // Extract the price from each item and add it to totalPrice
    totalPrice += parseFloat(item.price);
  });

  total.innerHTML = `Total Amount Due: ${totalPrice.toFixed(2)}`;
}

displayContent();
