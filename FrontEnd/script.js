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
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        document.getElementById('form-message').innerText = '¡Mensaje enviado con éxito!';
        
        setTimeout(function() {
            document.getElementById('contact-form').reset();
            document.getElementById('form-message').innerText = ''; 
        }, 2000); 
    });
});

