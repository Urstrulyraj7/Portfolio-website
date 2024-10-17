function showAlert() {
    alert("Welcome to my portfolio website!");
}

window.onload = function() {
    var button = document.getElementById("welcomeButton");
    button.onclick = showAlert;
};    
