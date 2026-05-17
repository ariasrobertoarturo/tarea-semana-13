document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MANIPULACIÓN DEL DOM: Menú Hamburguesa ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace (Mobile)
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // --- 2. VALIDACIÓN DE FORMULARIO ---
    const form = document.getElementById("reservaForm");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar envío automático

        // Capturar campos
        const nombre = document.getElementById("nombre");
        const personas = document.getElementById("personas");
        const fecha = document.getElementById("fecha");

        let isValid = true;

        // Validar Nombre
        if (nombre.value.trim() === "") {
            document.getElementById("error-nombre").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("error-nombre").style.display = "none";
        }

        // Validar Número de Personas
        if (personas.value === "" || personas.value < 1 || personas.value > 20) {
            document.getElementById("error-personas").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("error-personas").style.display = "none";
        }

        // Validar Fecha
        if (fecha.value === "") {
            document.getElementById("error-fecha").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("error-fecha").style.display = "none";
        }

        // Si todo es válido, mostrar mensaje de éxito y limpiar formulario
        if (isValid) {
            successMsg.style.display = "block";
            form.reset();
            
            // Ocultar mensaje después de 10 segundos
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 10000);
        }
    });
});
