const balanceEl = document.getElementById("balance");
const mensajeEl = document.getElementById("mensaje");
const monedasDiv = document.getElementById("monedas");

let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
let ultimaFecha = localStorage.getItem("ultimaFecha");
let hoy = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

if (ultimaFecha === hoy) {
    mensajeEl.textContent = "Ya abriste un regalo hoy. ¡Vuelve mañana!";
    // Deshabilitar todos los regalos
    let regalos = document.querySelectorAll(".regalo");
    regalos.forEach(regalo => regalo.onclick = null); // Elimina el evento click
}

balanceEl.textContent = balance;

function abrirRegalo(index) {
    // Verificar nuevamente antes de permitir abrir el regalo
    if (ultimaFecha === hoy) {
        mensajeEl.textContent = "Solo puedes abrir un regalo por día.";
        return;
    }

    let premios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let premio = premios[Math.floor(Math.random() * premios.length)];

    balance += premio;
    balanceEl.textContent = balance;
    localStorage.setItem("balance", balance);
    localStorage.setItem("ultimaFecha", hoy);

    let regalos = document.querySelectorAll(".regalo");
    regalos.forEach(regalo => regalo.onclick = null); // Deshabilitar todos los regalos después de abrir uno
    regalos[index].classList.add("abierto");
    regalos[index].textContent = `${premio} USDT`;

    mensajeEl.textContent = `¡Felicidades! Has ganado ${premio} USDT. Vuelve mañana para abrir otro regalo.`;
    soltarMonedas(10);
}
