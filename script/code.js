let home = document.querySelector('#home');
let featured=document.querySelector('section#featured .row')
let homeContent=[
    {
        h1:'GirlHeaven <br> <span style="margin-left:90px;font-size:60px;">Fragrancies</span>',
        h3:'<span style="font-weight: bold;font-size:40px;">Let us transport you to GirlHeaven.</span><br>Get a wonderful and memorable experience from the minute you walk in.',
        btn:'ShopNow',
        img:'https://i.postimg.cc/DyQKSGzJ/top-of-background.jpg',
    }
]

homeContent.forEach((content)=>{
    home.innerHTML +=`
<div id = "landing" class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <h1 class="card-title">${content.h1}</h1><br>
      <h3 class="card-text">${content.h3}</h3>
      <button class="card-text"><a href="../html/products.html">${content.btn}</a></button>
    </div>
    <div class="col">
      <img src="${content.img}" loading="lazy" alt="logo">
    </div>
  </div>
</div>`
})
