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
});

