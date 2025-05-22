// Dummy credentials for demonstration purposes
const credentials = {
    password: "123@admin"
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
    const password = document.getElementById("password").value;

    // Check credentials
    if ( password === credentials.password) {
        // Save the session
        sessionStorage.setItem("loggedInUser", username);
        redirectToIndex();
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Redirect to index.html
function redirectToIndex() {
    window.location.href = "dashboard.html"; // Redirects the user to index.html
}
