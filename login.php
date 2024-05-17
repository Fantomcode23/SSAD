<?php
$email = $_POST['email'];
$password = $_POST['password'];
$conn = new mysqli("localhost", "root", "", "hackathon");

if ($conn->connect_error) {
    die("Failed to connect: " . $conn->connect_error);
} else {
    $statement = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $statement->bind_param("s", $email);
    $statement->execute();
    $sta_result = $statement->get_result();

    if ($sta_result->num_rows > 0) {
        $data = $sta_result->fetch_assoc();
        // Verify password using password_hash and password_verify
        if (password_verify($password, $data['password'])) {
            echo "<h2>Login successfully</h2>";
        } else {
            echo "<h2>Invalid email or password</h2>";
        }
    } else {
        echo "<h2>Invalid email</h2>";
    }
    $statement->close();
}
$conn->close();
?>
