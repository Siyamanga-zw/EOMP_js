let tableRow = document.querySelector('#tableRow');
let displayContent = JSON.parse(localStorage.getItem('products')) || 
    [
      {
        id: 1,
        name: 'Lancome',
        image: 'https://i.postimg.cc/8sQt6C2d/lanc-ome.png',
        price: 'R 2830.00',
        btn1: 'edit',
        btn2: 'delete',
      },
      {
        id: 2,
        name: 'Poison Girl',
        image: 'https://i.postimg.cc/kM2L6Rrm/poison-girl.webp',
        price: 'R 1799.99',
        btn1: 'edit',
        btn2: 'delete',
      },
      {
        id: 3,
        name: 'Royalty scent',
        image: 'https://i.postimg.cc/xTzZTwwy/royalty.webp',
        price: 'R 2000.50',
        btn1: 'edit',
        btn2: 'delete',
      },
      {
        id: 4,
        name: 'Ellie saab',
        image: 'https://i.postimg.cc/nhBdKq2y/eliesaab.jpg',
        price: 'R 1010.00',
        btn1: 'edit',
        btn2: 'delete',
      },
      {
        id: 5,
        name: 'Narciso rodriguez',
        image: 'https://i.postimg.cc/J0YFgmHS/1590012511-b37a1be8-95a1-44c7-81c8-ef5801a48026.jpg',
        price: 'R 3899.99',
        btn1: 'edit',
        btn2: 'delete',
      },
      {
        id: 6,
        name: 'chance channel',
        image: 'https://i.postimg.cc/y8ZGfM1r/chance-channl.jpg',
        price: 'R 7880.00',
        btn1: 'edit',
        btn2: 'delete',
      },
    ]
    displayData();

  
function addItem(){
    let id = document.querySelector('#ID').value;
    let productName = document.querySelector('#Name').value;
    let image = document.querySelector('#Image').value;
    let price = document.querySelector('#Price').value;
    
   let newObj = {
    id:parseInt(id),
    name:productName,
    image:image,
    price:price,
    btn1:'edit',
    btn2:'delete',
   };
   console.log(newObj);
   displayContent.push(newObj);
   localStorage.setItem('products', JSON.stringify(displayContent));
   displayData()
}

function displayData() {
    tableRow.innerHTML = ""
    displayContent.forEach((content)=> {
        tableRow.innerHTML += `
        <tr>
          <th scope="row">${content.id}</th>
          <td>${content.name}</td>
          <td><img src="${content.image}" alt="tables"></td>
          <td>${content.price}</td>
          <td><button>${content.btn1}</button></td>
          <td><button>${content.btn2}</button></td>
        </tr>
      `});

}
displayData()

