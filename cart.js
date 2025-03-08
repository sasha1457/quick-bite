let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sectionm h3").forEach((button) => {
        button.addEventListener("click", () => {
            let item = button.parentElement;
            let name = item.querySelector("h1").textContent;
            let price = parseFloat(item.querySelector("h2").textContent.replace("$", ""));
            
            addToCart(name, price);
        });
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-list');
    let totalPrice = document.getElementById('total-price');

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}