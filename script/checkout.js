let cart = JSON.parse(localStorage.getItem('cartItems')) ;
let displaycheck = document.querySelector("#displaycheck");

function displayContent() {
    displaycheck.innerHTML = "";
    cart.forEach((item) => {
      displaycheck.innerHTML += `
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>delete</td> 
    </tr>
      `
    });
    document.querySelector('#totalDisplay').innerHTML = `<div class="total">Total Amount Due: </div>`

  }

  displayContent()