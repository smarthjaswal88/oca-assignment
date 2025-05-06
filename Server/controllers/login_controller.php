<?php

declare(strict_types=1);

function isInputEmpty(string $username, string $passwrd): bool {
    return empty($username) || empty($passwrd);
}

function is_username_wrong(bool|array|null $result): bool {
    return !$result;
}

function is_password_wrong(string $passwrd, string $hashedPasswrd): bool {
    return !password_verify($passwrd, $hashedPasswrd);
}
