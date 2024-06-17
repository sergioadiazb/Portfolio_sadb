
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (name === "" || email === "" || message === "") {
        document.getElementById('form-message').innerText = 'Por favor, completa todos los campos.';
        return;
    }
    
    document.getElementById('form-message').innerText = '¡Mensaje enviado con éxito!';
    document.getElementById('contact-form').reset();
});

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        var sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            var top = section.offsetTop - 100; 
            var id = section.getAttribute("id");
            
            if (window.scrollY >= top) {
                document.querySelectorAll('.navbar-nav .nav-item .nav-link').forEach(function(link) {
                    link.classList.remove("active");
                });

                document.querySelector('.navbar-nav .nav-item .nav-link[href="#' + id + '"]').classList.add("active");
            }
        });
    });

    document.querySelector('.navbar-nav .nav-item .nav-link').classList.add("active");
});
