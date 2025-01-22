function calcularBidones() {
    // Obtener el tipo de bidón seleccionado
    const tipoBidon = document.getElementById('tipoBidon').value;
    
    // Obtener la cantidad de filas
    const filas = parseInt(document.getElementById('filas').value);

    // Validar que la cantidad de filas sea un número válido
    if (isNaN(filas) || filas <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese una cantidad válida de filas.";
        return;
    }

    // Definir bolsones por fila según el tipo de bidón
    let bolsonesPorFila;
    switch (tipoBidon) {
        case '6':
        case '8':
        case '5':
        case '10':
            bolsonesPorFila = 25;
            break;
        case '20':
        case '12':
        case '11':
            bolsonesPorFila = 30;
            break;
        default:
            bolsonesPorFila = 0;
    }

    // Definir la cantidad de bidones por bolson según el tipo de bidón
    let bidonesPorBolson;
    switch (tipoBidon) {
        case '6':
        case '8':
            bidonesPorBolson = 20;
            break;
        case '5':
            bidonesPorBolson = 25;
            break;
        case '10':
            bidonesPorBolson = 15;
            break;
        case '20':
        case '11':
            bidonesPorBolson = 5;
            break;
        case '12':
            bidonesPorBolson = 7;
            break;
        default:
            bidonesPorBolson = 0;
    }

    // Verificar si se asignaron valores correctos
    if (bolsonesPorFila === 0 || bidonesPorBolson === 0) {
        document.getElementById('resultado').innerText = "Seleccione un tipo de bidón válido.";
        return;
    }

    // Calcular el total de bidones
    const totalBidones = bidonesPorBolson * bolsonesPorFila * filas;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 
        "El total de bidones para " + filas + " filas es: " + totalBidones;
}
