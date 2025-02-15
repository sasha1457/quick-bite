document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById('cart-button');
    const cart = document.getElementById('cart');
    const closeCart = document.getElementById('close-cart');

    if (cartButton && cart && closeCart) {
        cart.style.display = "none";

        cartButton.addEventListener('click', function () {
            cart.style.display = (cart.style.display === "none") ? "block" : "none";
        });

        closeCart.addEventListener('click', function () {
            cart.style.display = "none";
        });
    }
});