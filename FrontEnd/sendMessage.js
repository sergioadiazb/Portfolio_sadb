document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('form-message').innerText = data.message;
        setTimeout(function() {
            document.getElementById('contact-form').reset();
            document.getElementById('form-message').innerText = ''; 
        }, 2000); 
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-message').innerText = 'Error al enviar el formulario.';
    });
});