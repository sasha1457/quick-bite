let promoActivated = false;
document.getElementById('enterButton').addEventListener('click', function() {
    var inputField = document.getElementById('inputField');
    if (promoActivated) {
        inputField.disabled = false;
        alert("You've already activated this promo code");
        return;
    }
    if (inputField.value === "FREEBURGER") {
        promoActivated = true;
        inputField.disabled = false;
        alert("Promo code activated");
    } else {
        alert("Invalid promo code");
    }
});