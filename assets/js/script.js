const container = document.querySelectorAll('.caja1');
container.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.classList.add('activo');
    });

    e.addEventListener('mouseout', () => {
        e.classList.remove('activo');
    });
});

document.addEventListener("DOMContentLoaded", function(event) {

    let imagen = document.getElementById("img");
    imagen.addEventListener("click", function() {
        imagen.classList.toggle('big');
    });
});


document.addEventListener("DOMContentLoaded", function(event) {

    let text3 = document.getElementById("caja3");
    text3.addEventListener("dblclick", function() {
        text3.classList.toggle('big');
    });
});

