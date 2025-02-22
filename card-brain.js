document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pay-button").addEventListener("click", function () {
        const cardNumber = document.getElementById("card-number").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cardRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
        const cvvRegex = /^\d{3}$/; 
        const expiryRegex = /^\d{2}\/\d{2}$/; 
       if (!cardRegex.test(cardNumber) || !cvvRegex.test(cvv) || !expiryRegex.test(expiryDate)) {
            alert("Invalid card data");
        } else {
            alert("Payment successful!");
            window.location.href = "index.html"; 
        }
    });
});