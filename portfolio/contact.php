<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "makersduniya73@gmail.com"; 
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        
        echo "Thank you! Your message has been sent.";
    } else {
        
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    
    header("Location: contact.php");
    exit();
}
?>
