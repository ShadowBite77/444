
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío automático del formulario
        
        let telefono = document.getElementById("telefono").value.trim();
        let password = document.getElementById("password").value;
        let passwordConfirm = document.getElementById("password-confirm").value;
        

        // Validación de la contraseña
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== passwordConfirm) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Si todo está bien, se envía el formulario
        alert("Registro exitoso!");
        this.submit();
    });
    
    
