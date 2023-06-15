let tableRow = document.querySelector('#tableRow');
let displayContent = JSON.parse(localStorage?.getItem("products")) 
function addItem(){
    let id = document.querySelector('#ID').value;
    let productName = document.querySelector('#Name').value;
    let image = document.querySelector('#Image').value;
    let price = document.querySelector('#Price').value;
    
   let newObj = {
    id:parseInt(id),
    name:productName,
    image:image,
    price:price
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
          <td><img src="${content.image}" loading="lazy" alt="tables"></td>
          <td>${content.price}</td>
          <td><button class="edit-btn" data-bs-toggle="modal" data-bs-target="#${content.id}">Edit</button>
        <div class="modal fade" id="${content.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form class="form">
          <div class="mb-3">
            <label for="ID" class="col-form-label">ID:</label>
            <input type="text" class="form-control" id="ID-${content.id}" value="${content.id}">
          </div>
          <div class="mb-3">
            <label for="Name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="Name-${content.id}" value="${content.name}">
          </div>
          <div class="mb-3">
            <label for="Image" class="col-form-label">Image:</label>
            <input type="text" class="form-control" id="Image-${content.id}" value="${content.image}">
          </div>
          <div class="mb-3">
            <label for="Price" class="col-form-label">Price:</label>
            <input type="text" class="form-control" id="Price-${content.id}" value="${content.price}" >
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick='new EditProduct(${JSON.stringify(content)})'>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <button class="del" onclick='deleteItem(${JSON.stringify(content)})'>Delete</button></td>
   </tr>
      `});

}
displayData()



// delete
function deleteItem(item) {
  let index = displayContent.findIndex( p=>{
    return p.id == item.id
  })
  // displayContent = displayContent.filter((content) => content.id !== id);
  displayContent.splice(index, 1)
  localStorage.setItem("products", JSON.stringify(displayContent));
  displayData();
}
      
 
function EditProduct(item) {
  // debugger
  this.id = document.querySelector(`#ID-${item.id}`).value
  this.name = document.querySelector(`#Name-${item.id}`).value
  this.image = document.querySelector(`#Image-${item.id}`).value 
  this.price = document.querySelector(`#Price-${item.id}`).value

  let index = displayContent.findIndex( p=>{
    return p.id === item.id
  })
  console.log(item.id, index);
  displayContent[index] = Object.assign({}, this)
  localStorage.setItem("products", JSON.stringify(displayContent));
  location.reload()
}

    // SORT

    function sortItems() {
      displayContent.sort((a, b) => {
        // Compare the names of the items for sorting
        let A = a.name.toUpperCase();
        let B = b.name.toUpperCase();
    
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    
      displayData();
    }
    