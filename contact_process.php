<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer classes
require 'vendor/autoload.php';

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
        // Instantiate PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Server settings (use your Robotics Club's SMTP server details here)
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com'; // Set the SMTP server for Robotics Club
            $mail->SMTPAuth   = true;
            $mail->Username   = 'robotics@gcet.edu.in'; // Robotics Club's email
            $mail->Password   = 'Robotics@gcet';  // SMTP password for the Robotics Club email
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom($email, $name);               // User's email
            $mail->addAddress('robotics@gcet.edu.in');   // Robotics Club email recipient

            // Content
            $mail->isHTML(false); // Set email format to plain text
            $mail->Subject = $subject;
            $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$messageContent";

            // Send email
            $mail->send();
            $resultMessage = "<div class='success'>Email sent successfully!</div>";
        } catch (Exception $e) {
            $resultMessage = "<div class='error'>Failed to send email. Error: {$mail->ErrorInfo}</div>";
        }
    } else {
        $resultMessage = "<div class='error'>Invalid input. Please ensure all fields are filled out correctly.</div>";
    }
}

// Store the result message in session to access it on the redirected page
session_start();
$_SESSION['resultMessage'] = $resultMessage;

// Redirect back to the contact page with the result message
header("Location: contact.html");
exit;
?>
