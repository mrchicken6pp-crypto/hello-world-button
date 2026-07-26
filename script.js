document.getElementById('helloBtn').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = "Hello from the button!";
});