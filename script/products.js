let products = document.querySelector('#products .row:last-child');
let productsContent = JSON.parse(localStorage?.getItem("products")) ? 
    JSON.parse(localStorage?.getItem("products")) : 
    localStorage.setItem("products", JSON.stringify(
        [
            {
                id:1,
                name:'Lancome',
                image:'https://i.postimg.cc/8sQt6C2d/lanc-ome.png ',
                price:'R 2830.00',
            },
            {
                id:2,
                name:'Poison Girl',
                image:'https://i.postimg.cc/kM2L6Rrm/poison-girl.webp',
                price:'R 1799.99'
            },
            {
                id:3,
                name:'Royalty scent',
                image:'https://i.postimg.cc/xTzZTwwy/royalty.webp',
                price: 'R 2000.50'
            },
            {
                id:4,
                name:'Ellie saab',
                image:'https://i.postimg.cc/nhBdKq2y/eliesaab.jpg',
                price:'R 1010.00'
            },
            {
                id:5,
                name:'Narciso rodriguez',
                image:'https://i.postimg.cc/J0YFgmHS/1590012511-b37a1be8-95a1-44c7-81c8-ef5801a48026.jpg',
                price:'R 3899.99'
            },
            {
                id:6,
                name:'chance channel',
                image:'https://i.postimg.cc/y8ZGfM1r/chance-channl.jpg',
                price:'R 7880.00'
            }
        ]
    ))

try{
    productsContent.forEach((show) => {
        products.innerHTML+=`
        <div class="card" style="width: 20rem; margin:20px; height:30rem;">
        <img src="${show.image}" loading="lazy" class="card-img-top" alt="products">
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">${show.price}</p>
         <a href="#" class="btn" id="addItem" onclick='addToCart(${JSON.stringify(show)})'>Add to cart</a>
        </div>
      </div>
      `
    });
}catch(e) {
    location.reload()
}

let carts = JSON.parse(localStorage.getItem('cartItems'))?JSON.parse(localStorage.getItem('cartItems')):[];
localStorage.setItem('cartItems', JSON.stringify(carts))
let inOrout=false;
function addToCart(item) {
    if (outOfStock(item.id)) {
        alert("OUT OF STOCK!")
    } else {
        carts.push(item)
        console.log(carts);
        localStorage.setItem("cartItems", JSON.stringify(carts));
        alert("Item added to cart");
    }
   
}

function outOfStock(itemId) {
   
    carts=JSON.parse(localStorage.getItem('cartItems'))
    carts.forEach((item)=>{
        if (item.id === itemId) {
            inOrout=true
        } 
    })
    return inOrout
    
}

let priceSelect = document.getElementById("Prices");

priceSelect.addEventListener("change", filterProducts);

function filterProducts() {
  let selectedRange = priceSelect.value;
  let products = document.getElementsByClassName("card");

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productPrice = parseFloat(product.getElementsByClassName("card-text")[0].textContent.replace("R ", ""));

    if (selectedRange === "all" ||
      (selectedRange === "0-2000" && productPrice <= 2000) ||
      (selectedRange === "2000+" && productPrice >= 2000)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}