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
    // Extract the price from each item and remove "R"
    const priceWithoutR = item.price.replace("R", "");
    
    // Remove the decimal point
    // const priceWithoutDecimal = priceWithoutR.replace(".", "");
    
    // Convert the modified price to a number and add it to totalPrice
    totalPrice += parseFloat(priceWithoutR);
  });

  total.innerHTML = `Total Amount Due:R ${totalPrice.toFixed(2)}`;
}

displayContent();

