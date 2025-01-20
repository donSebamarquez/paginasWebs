document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.child'); 
    const body = document.body;

    const colors = {
        "mag1": "#f6e0a4",
        "mag2": "#ff608c",
        "mag3": "#ffffff",
        "mag4": "#00c1b5",
        "mag5": "#ff651a",
        "mag6": "#ffbe00",
        "mag7": "#1d3fbb",
        "mag8": "#e30512",
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                body.style.backgroundColor = colors[entry.target.id];
                console.log(`Cambiando el color de fondo a: ${colors[entry.target.id]}`);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});
