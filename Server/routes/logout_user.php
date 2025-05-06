<?php

declare(strict_types=1);

// --- CORS HEADERS ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Set response content type
header("Content-Type: application/json");

// Start the session
session_start();

try {
    // Destroy session data
    session_unset();
    session_destroy();

    echo json_encode([
        "status" => "success",
        "message" => "Logout successful."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Logout failed. Please try again."
    ]);
}
