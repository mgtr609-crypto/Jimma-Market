// Register
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Registration Successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Logout
function logout() {
    firebase.auth().signOut().then(() => {
        alert("Logged Out");
        location.reload();
    });
}