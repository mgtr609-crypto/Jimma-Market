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
    });
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
}