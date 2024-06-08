document.getElementById("btn").addEventListener("click", function() {
    var message = document.getElementById("message");
    if (message.innerText === "¡Hola desde desde SAMSUNG IA !") {
        message.innerText = "¡Haz clic de nuevo!";
    } else {
        message.innerText = "¡La nueva inteligencia artifial !";
    }
});
