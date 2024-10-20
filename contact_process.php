<?php
// Initialize an empty message variable to display feedback after form submission
$resultMessage = "";

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);
    $messageContent = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    // Validate the email address
    if (!empty($name) && !empty($subject) && !empty($messageContent) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Recipient email
        $to = "robotics@gcet.edu.in";

        // Email content
        $emailBody = "Name: $name\nEmail: $email\n\nMessage:\n$messageContent";

        // Set headers
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Attempt to send the email
        if (mail($to, $subject, $emailBody, $headers)) {
            $resultMessage = "<div class='success'>Email sent successfully!</div>";
        } else {
            $resultMessage = "<div class='error'>Failed to send the email. Please try again later.</div>";
        }
    } else {
        $resultMessage = "<div class='error'>Invalid input. Please ensure all fields are filled out correctly.</div>";
    }
}

// Redirect back to the contact page with the result message
header("Location: contact.html");
exit;
?>
