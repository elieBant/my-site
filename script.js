document.getElementById("buynow").addEventListener("click", () => {
document.getElementById("paymentSection").style.display = "block";
});

// fuction section of payment 
function showPaymentOption(price) {
    document.getElementById('selectedPrice').innerText = price;
    document.getElementById('paymentSection').style.display = 'block';
}

function cofirmPayment () {
    let selectedPayment = document.querySelector('input[name="payment"):checked');
    let price = document.getElementById("selectedPrice").innerText;

    if (!selectedPayment) {
        alert("please select a payment method!");
        return;
    }

    let paymentMethod = selectedPayment.value;
    let paymentLink = "";

    // Define the link of all method payment 
    if (paymentMethod == "bank") {
        paymentLink = "https://www.yourbank.com/payment?amount=" + price;
    } else if (paymentMethod == "Airtel"){
        paymentLink == "https://www.airtelmoney.com/pay?amount=" + price;
    } else if (paymentMethod == "safaricom") {
        paymentLink = "https://www.safaricom.com/mpesa?amount=" + price;
    }
    
    if (paymentLink) {
        window.location.href = paymentLink;
    }  else {
        alert("Payment method not supported!");
    }

}