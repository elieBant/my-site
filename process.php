<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    $subject = "order confirmation";
    $message = "Thank you, $name, for your purchase! your order being processed.";
    $headers = "from: contact@yoursite.com";

    mail($email, $subject, $message, $header);

    echo "Email sent sucesfully!";
} else {
    echo "processing error. ";
}
?>        