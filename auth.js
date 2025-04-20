// Dummy credentials for demonstration purposes
const credentials = {
    username: "Admin",
    password: "password@123"
};

window.onload = function() {
    // Check if the user is already authenticated in this session
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        redirectToIndex();
    }
};

// Event listener for the Login button
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === credentials.username && password === credentials.password) {
        // Save the session
        sessionStorage.setItem("loggedInUser", username);
        redirectToIndex();
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Redirect to index.html
function redirectToIndex() {
    window.location.href = "index.html"; // Redirects the user to index.html
}