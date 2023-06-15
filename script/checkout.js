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
      </tr>
    `;
  });

  calculateTotalPrice(); // Call the calculatePrice function to update the total
}


function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((item) => {
    
    const priceWithoutR = item.price.replace("R", "");
    
    totalPrice += parseFloat(priceWithoutR)
   
   });

  total.innerHTML = `<p>Total Amount Due:R ${totalPrice.toFixed(2)}</p>`;
}

displayContent();


