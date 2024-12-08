document.getElementById('btnComparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoIf = document.getElementById('resultadoIf');

    if (num1 > num2) {
        resultadoIf.textContent = `El mayor es ${num1}`;
    } else if (num2 > num1) {
        resultadoIf.textContent = `El mayor es ${num2}`;
    } else {
        resultadoIf.textContent = 'Ambos números son iguales.';
    }
});

document.getElementById('btnMes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mes').value);
    let mensaje;

    switch (mes) {
        case 1: mensaje = 'Enero'; break;
        case 2: mensaje = 'Febrero'; break;
        case 3: mensaje = 'Marzo'; break;
        case 4: mensaje = 'Abril'; break;
        case 5: mensaje = 'Mayo'; break;
        case 6: mensaje = 'Junio'; break;
        case 7: mensaje = 'Julio'; break;
        case 8: mensaje = 'Agosto'; break;
        case 9: mensaje = 'Septiembre'; break;
        case 10: mensaje = 'Octubre'; break;
        case 11: mensaje = 'Noviembre'; break;
        case 12: mensaje = 'Diciembre'; break;
        default: mensaje = 'Número inválido';
    }
    alert(mensaje);
});

let nombres = [];
document.getElementById("btnAgregar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    nombres.push(nombre);
    document.getElementById("listaNombres").textContent = nombres.join(", ");
});
