// Seleccionar elementos
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const img = document.getElementById('img');
const caja3 = document.getElementById('caja3');

// Inicialmente ocultar el segundo div
text2.style.display = 'none';

// Mostrar/Ocultar el segundo div al pasar el mouse sobre el primero
text1.addEventListener('mouseenter', () => {
    text2.style.display = 'block';
});

text1.addEventListener('mouseleave', () => {
    text2.style.display = 'none';
});

// Agrandar la imagen al hacer clic y volver al tamaño original al salir
img.addEventListener('click', () => {
    img.style.width = '40%'; // Aumentar el tamaño en un 100%
});

img.addEventListener('mouseleave', () => {
    img.style.width = '20%'; // Volver al tamaño original
});

// Agrandar el texto del tercer div al hacer doble clic
caja3.addEventListener('dblclick', () => {
    caja3.style.fontSize = '2em'; // Agrandar la fuente
});
