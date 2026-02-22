document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".project-link");

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const description = this.nextElementSibling;

            // Fecha todas as outras descrições
            document
                .querySelectorAll(".project-description")
                .forEach((desc) => {
                    if (desc !== description) {
                        desc.classList.remove("active");
                    }
                });

            // Alterna a clicada
            description.classList.toggle("active");
        });
    });
});

document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
        });
    });
});
