import React from "react";
import "./LogoutButton.css";
import { useToast } from "../../hooks/useToast";

function LogoutButton() {
  const { showSuccess, showError } = useToast();
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/routes/logout_user.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        // Server responded with an error status
        showError(`Logout failed: HTTP error! status: ${response.status}`);
        console.error("Logout failed: HTTP error!", response);
        return; // Stop further processing
      }

      const result = await response.json();

      if (result.status === "success") {
        console.log("User logged out successfully");
        window.location.href = "/";
        showSuccess("User logged out successfully");
      } else {
        showError(`Logout failed: ${result.message}`);
        console.error("Logout failed:", result.message);
      }
    } catch (error) {
      showError(`Logout failed: ${error.message}`);
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout-btn">
        Log Out
      </button>
    </div>
  );
}

export default LogoutButton;
