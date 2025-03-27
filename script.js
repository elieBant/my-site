document.getElementById("buynow").addEventListener("click", () => {
    document.getElementById("paymentSection").style.display = "block";
});

// fuction section of payment 
function showPaymentOption(price) {
    document.getElementById('selectedPrice').innerText = price;
    document.getElementById('paymentSection').style.display = 'block';
}

// 

document.getElementById("payNow").addEventListener("click", () => {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');

    if (selectedPayment && selectedPayment.value == "safaricom") {
        document.getElementById("paymentSection").style.display = "none";
        document.getElementById("safaricompaymentform").style.display = "block";
    } else if (selectedPayment) {
        alert("payment method selected: " + selectedPayment.value);
    } else {
        alert("please select a payment method.");
    }
});

document.getElementById("safaricompaymentform").addEventListener("submit", (e) => {
    e.preventDefault();
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
    alert(`payment of $${amount} for phone number ${phone} confirmed!`);
});
