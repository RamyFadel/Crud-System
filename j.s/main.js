var ProductName = document.getElementById("Input1");
var ProductPrice = document.getElementById("Input2");
var ProductDescription = document.getElementById("Textarea1");
var AddProduct = document.getElementById("Add");
var numberIndex = 0;
var productsArray =[]

if(JSON.parse(localStorage.getItem('productItem'))!=null){
    productsArray = JSON.parse(localStorage.getItem('productItem'));
    dataDisplay()
}

AddProduct.onclick =function(){
    if(AddProduct.innerHTML == 'Add Product')
    {
        getDataInput();       
    }else{

        updateProduct();
    }

}

function getProductInfo(index){
    numberIndex =index;
    var change =productsArray[numberIndex];
    ProductName.value = change.name ;
    ProductPrice.value = change.prise ;
    ProductDescription.value = change.Description;
    AddProduct.innerHTML ="Update Product "

}

function updateProduct(){
    var product = {
        name:ProductName.value,
        prise:ProductPrice.value,
        Description :ProductDescription.value,
    };
    productsArray[numberIndex] = product;
    localStorage.setItem('productItem',JSON.stringify(productsArray));
    AddProduct.innerHTML ="Add product";
    dataDisplay();
    clear();  
}

function getDataInput(){
var product = {
    name:ProductName.value,
    prise:ProductPrice.value,
    Description :ProductDescription.value,
}

productsArray.unshift(product)
localStorage.setItem('productItem',JSON.stringify(productsArray))
dataDisplay();
clear();

}

function dataDisplay(){
    var cartona=''
    for(i=0 ; i<productsArray.length ;i++){
        cartona+=`
        
        <tr>
        <td>${productsArray[i].name}</td>
        <td>${productsArray[i].prise}</td>
        <td>${productsArray[i].Description}</td>
        <td><button onclick="deleteItem(${i})" type="button" class="btn btn-danger">Delete</button></td>
        <td><button onclick="getProductInfo(${i})" type="button" class="btn btn-success">Update</button></td>
      </tr>

        `
    }
    document.getElementById("table").innerHTML=cartona
}

function deleteItem(index){
    productsArray.splice(index,1)
    localStorage.setItem('productItem',JSON.stringify(productsArray))
    dataDisplay()
}

function clear(){
    ProductName .value=""
    ProductPrice.value=""
    ProductDescription.value=""
}
// or
// function clear() {
//     for (var i = 0; i < inputs.length; i++) {
//       inputs[i].value = ''
//     }
//   }

function clearAll(){
  localStorage.clear()
  productsArray =[]
    dataDisplay()
}
function search (search){

    var cartona=''
    for(i=0 ; i<productsArray.length ;i++){
       if(productsArray[i].name.toLowerCase().includes(search.toLowerCase())) {
        cartona+=`
        
        <tr>
        <td>${productsArray[i].name}</td>
        <td>${productsArray[i].prise}</td>
        <td>${productsArray[i].Description}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
        <td><button type="button" class="btn btn-success">Update</button></td>
      </tr>

        `
     }
     
    }
    document.getElementById("table").innerHTML=cartona
}
