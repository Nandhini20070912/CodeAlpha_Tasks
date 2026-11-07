
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// Close mobile menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("show");
    });
});

// Contact form
document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent("Portfolio Contact Message");
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        window.location.href =
            "mailto:yourmail@gmail.com?subject=" +
            subject + "&body=" + body;
    }
);
