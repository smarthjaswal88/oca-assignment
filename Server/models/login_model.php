<?php

declare(strict_types=1);

function get_user(object $pdo, string $username): ?array {
    try {
        // Prepare and execute the query
        $query = "SELECT * FROM users_oca WHERE username = :username;";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":username", $username);
        $stmt->execute();

        // Fetch the result
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Close the statement to free up memory
        $stmt = null;

        // Return the result or null if no user found
        return $result ?: null;
    } catch (PDOException $e) {
        // Log the error for debugging purposes
        error_log('Database query error: ' . $e->getMessage());
        
        // You could return null or handle the error appropriately
        return null;
    }
}
