const form = document.getElementById("productForm");
const productList = document.getElementById("productList");

let products = JSON.parse(localStorage.getItem("products")) || [];

function showProducts() {
    productList.innerHTML = "";

    products.forEach(function(item, index) {
        const product = document.createElement("div");

        product.innerHTML = `
            <img src="${item.image}" width="150">
            <h3>${item.name}</h3>
            <p>Price: ${item.price} Birr</p>
            <button onclick="deleteProduct(${index})"><button onclick="editProduct(${index})">Edit</button>
<button onclick="deleteProduct(${index})">Delete</button></button>
            <hr>
        `;

        productList.appendChild(product);
    })// Product List
const products = [
{
name:"Shoes",
price:"2500 ETB",
image:"images/shoes.jpg"
},
{
name:"Phone",
price:"12000 ETB",
image:"images/phone.jpg"
},
{
name:"Laptop",
price:"35000 ETB",
image:"images/laptop.jpg"
},
{
name:"Watch",
price:"1800 ETB",
image:"images/watch.jpg"
}
];

const productContainer = document.getElementById("products");

// Show Products
function displayProducts(items){
productContainer.innerHTML="";

items.forEach(product=>{
productContainer.innerHTML += `
<div class="product">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>

<button onclick="addToCart('${product.name}','${product.price.replace(' ETB','')}')">
Add to Cart
</button>

<button onclick="buyNow('${product.name}')">
Buy Now
</button>
</button>

<button onclick="callSeller()">
Call Seller
</button>

</div>
`;
});
}

displayProducts(products);

// Search
function searchProducts(){
let value=document.getElementById("search").value.toLowerCase();

let result=products.filter(product=>
product.name.toLowerCase().includes(value)
);

displayProducts(result);
}

// Buy Now
function buyNow(product){

let phone="251924381526";

window.open(
`https://wa.me/${phone}?text=Hello, I want to buy ${product}`,
"_blank"
);

}

// Call Seller
function callSeller(){

window.location.href="tel:+251924381526";

}
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const photo = document.getElementById("photo").files[0];

    if (!photo) {
        alert("Please select a photo");
        return;
    }

    const reader = new FileReader();

    reader.onload = function() {
        products.push({
            name: name,
            price: price,
            image: reader.result
        });

        localStorage.setItem("products", JSON.stringify(products));

        showProducts();
        form.reset();
    };

    reader.readAsDataURL(photo);
});

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}

showProducts();
function editProduct(index) {
    const newName = prompt("Enter new product name:", products[index].name);
    if (newName === null) return;

    const newPrice = prompt("Enter new price:", products[index].price);
    if (newPrice === null) return;

    products[index].name = newName;
    products[index].price = newPrice;

    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}
function searchProducts() {
    const text = document.getElementById("search").value.toLowerCase();

    const cards = productList.children;

    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].querySelector("h3").textContent.toLowerCase();

        if (name.includes(text)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "123456") {
    alert("Login Successful");
  } else {
    alert("Incorrect Email or Password");
  }
}// Cart
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });

    alert(name + " added to cart!");

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartList.innerHTML = "";

    let sum = 0;

    cart.forEach(item => {
        cartList.innerHTML += `
        <li>${item.name} - ${item.price} ETB</li>
        `;

        sum += Number(item.price);
    });

    total.innerText = sum;
}function db.collection("products").add({
  name: name,
  price: price,
  image: image
}).then(() => {
  alert("Product Saved!");
});(){

let name=document.getElementById("pname").value;
let price=document.getElementById("pprice").value;
let image=document.getElementById("pimage").value;

if(name=="" || price=="" || image==""){
alert("Fill all fields");
return;
}

products.push({
name:name,
price:price+" ETB",
image:image
});

displayProducts(products);

document.getElementById("pname").value="";
document.getElementById("pprice").value="";
document.getElementById("pimage").value="";

alert("Product Uploaded Successfully!");

}function uploadImage(){

const file=document.getElementById("imageFile").files[0];

if(!file){
alert("Please select image");
return;
}

const storageRef=storage.ref("products/"+file.name);

storageRef.put(file).then(()=>{

storageRef.getDownloadURL().then((url)=>{

document.getElementById("preview").src=url;

alert("Image Uploaded Successfully");

});

});

}