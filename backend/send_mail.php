<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data    = json_decode(file_get_contents("php://input"), true);
    $name    = htmlspecialchars($data['name']);
    $email   = htmlspecialchars($data['email']);
    $phone   = htmlspecialchars($data['phone'] ?? '');
    $message = htmlspecialchars($data['message']);

    $to      = "info@greenalisolar.com";
    $subject = "New Contact Form - " . $name;
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: info@greenalisolar.com\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
?>