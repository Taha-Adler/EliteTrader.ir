window.addEventListener("scroll", () => {
    const footer = document.getElementById("pageFooter");
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 50) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const greetingBox = document.getElementById("greetingMessage");
    const now = new Date();
    const hour = now.getHours();

    let greeting = "Hello";
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning 🌅";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon ☀️";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening 🌇";
    } else {
        greeting = "Good Night 🌙";
    }

    greetingBox.textContent = `${greeting}, Welcome back to our trading space!`;
});
