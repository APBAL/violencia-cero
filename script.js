// Animación de conteo para los números de impacto
const counters = document.querySelectorAll('.numero');
const speed = 200; // Ajusta la velocidad

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('%', ''); // Quitamos el % para calcular

        // Valor de incremento
        const inc = target / speed;

        // Si el conteo es menor que el objetivo, sumar incremento
        if (count < target) {
            // Añadir incremento y renderizar
            const newCount = (count + inc).toFixed(1);
            counter.innerText = (newCount % 1 === 0 ? parseInt(newCount) : newCount);
            if(counter.getAttribute('data-target').includes('%')) {
                counter.innerText += '%';
            }
            // Llamar a la función cada milisegundo
            setTimeout(updateCount, 1);
        } else {
            // Asegurar que el número final es exacto
            counter.innerText = counter.getAttribute('data-target');
        }
    };

    updateCount();
});
