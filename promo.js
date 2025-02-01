let promoActivated = false;
document.getElementById('enterButton').addEventListener('click', function() {
    var inputField = document.getElementById('inputField');
    if (promoActivated) {
        inputField.disabled = true;
        inputField.value = "You've already activated promo";
        return;
    }
    if (inputField.value === "FREEBURGER") {
        promoActivated = true;
        inputField.disabled = false;
        inputField.value = "Promo code activated";
    } else {
        inputField.value = "Invalid promo";
    }
});