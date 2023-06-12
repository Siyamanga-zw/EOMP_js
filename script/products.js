let products = document.querySelector('#products .row');
let productsContent=[
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
    },
]
productsContent.forEach((content) => {
    products.innerHTML +=`
    <div class="card" style="width: 18rem; margin:20px; height:30rem;">
  <img src="${content.image}" class="card-img-top" alt="products">
  <div class="card-body">
    <h5 class="card-title">${content.name}</h5>
    <p class="card-text">${content.price}</p>
    <a href="#" class="addbtn">Add to cart</a>
  </div>
</div>`
});


let addCart=document.querySelector('.addbtn');
let show = document.querySelector('.cart span')

for (let i=0; i < addCart.length; i++){
    addCart[i].addEventlistener('click',()=>{
        cartCount();
    })
}
function cartCount(){
    let productCount = localStorage.getItem('cartsCount');
    productCount = parseInt(productCount);
    if(productCount){
localStorage.setItem('cartsCount', productCount +1);
show.textContent=productCount + 1
    }else{
        localStorage.setItem('cartsCount',1)
        show.textContent=productCount = 1 ;
    }
   
}