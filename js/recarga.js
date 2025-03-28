function copiarTexto() {
    const input = document.getElementById("direccionBinance");
    input.select();
    document.execCommand("copy");
    alert("Dirección copiada: " + input.value);
}

function confirmarDeposito() {
    const monto = document.getElementById("monto").value;
    alert(`Se ha confirmado el depósito de ${monto} USDT.`);
    return false; // Cambiar a true si quieres enviar el formulario
}
document.getElementById("comprobante").addEventListener("change", function () {
const fileName = this.files[0] ? this.files[0].name : "Ningún archivo seleccionado";
document.getElementById("file-name").textContent = fileName;
});