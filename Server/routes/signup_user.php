<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $data = json_decode(file_get_contents("php://input"), true);

    $username = trim($data["username"] ?? '');
    $passwrd = trim($data["passwrd"] ?? '');
    $email   = trim($data["email"] ?? '');

    try {
        require_once '../includes/dbHandler.php';
        require_once '../models/signup_model.php';
        require_once '../controllers/signup_controller.php';

        $errors = [];

        if (isInputEmpty($username, $passwrd, $email)) {
            $errors["empty_input"] = "All fields are required.";
        }

        if (isEmailInvalid($email)) {
            $errors["invalid_email"] = "Invalid email format.";
        }

        if (isUserNameInvalid($pdo, $username)) {
            $errors["invalid_username"] = "Username already exists.";
        }

        if (isEmailRegistered($pdo, $email)) {
            $errors["email_used"] = "Email already registered.";
        }

        if (!empty($errors)) {
            echo json_encode([
                "status" => "error",
                "errors" => $errors
            ]);
            exit;
        }

        create_user($pdo, $passwrd, $username, $email);

        echo json_encode([
            "status" => "success",
            "message" => "User registered successfully."
        ]);
        exit;

    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Query failed: " . $e->getMessage()
        ]);
        exit;
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request method"
    ]);
    exit;
}
