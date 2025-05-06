<?php

declare(strict_types=1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents("php://input"), true);

$username = htmlspecialchars($input["username"] ?? '');
$passwrd = $input["passwrd"] ?? '';

try {
    require_once "../includes/dbHandler.php";
    require_once "../models/login_model.php";
    require_once "../controllers/login_controller.php";

    if (isInputEmpty($username, $passwrd)) {
        http_response_code(400); 
        echo json_encode(["status" => "error", "message" => "Please fill in all fields."]);
        exit;
    }

    $result = get_user($pdo, $username);

    if (!$result || is_username_wrong($result)) {
        http_response_code(401); 
        echo json_encode(["status" => "error", "message" => "Incorrect username or user does not exist."]);
        exit;
    }

    if (is_password_wrong($passwrd, $result["passwrd"])) {
        http_response_code(401); 
        echo json_encode(["status" => "error", "message" => "Incorrect password."]);
        exit;
    }

    session_start();
    session_regenerate_id(true); 

    $_SESSION["user_id"] = $result["id"];
    $_SESSION["user_name"] = htmlspecialchars($result["username"]);
    $_SESSION["last_regeneration"] = time();

    echo json_encode([
        "status" => "success",
        "message" => "Login successful.",
        "session_id" => session_id(),
        "user_id" => $result["id"],
        "username" => $result["username"]
    ]);
    exit;

} catch (PDOException $e) {
    error_log('Login Query Failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Server error. Please try again later."]);
    exit;
}
