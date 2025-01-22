function calcular(opcion) {
    // Obtener el tipo de bidón seleccionado
    const tipoBidon = document.getElementById('tipoBidon').value;
    
    // Obtener la cantidad ingresada
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Verificar si la cantidad es válida
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese una cantidad válida.";
        return;
    }

    // Definir bolsones por fila según el tipo de bidón
    let bolsonesPorFila = (tipoBidon === '20' || tipoBidon === '12' || tipoBidon === '11') ? 30 : 25;

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

    if (bolsonesPorFila === 0 || bidonesPorBolson === 0) {
        document.getElementById('resultado').innerText = "Seleccione un tipo de bidón válido.";
        return;
    }

    let resultadoTexto = "";

    if (opcion === 1) {
        // Calcular filas necesarias para la cantidad ingresada
        const bidonesPorFila = bolsonesPorFila * bidonesPorBolson;
        const filasCompletas = Math.floor(cantidad / bidonesPorFila);
        const bidonesRestantes = cantidad % bidonesPorFila;
        const bolsonesSueltos = Math.ceil(bidonesRestantes / bidonesPorBolson);

        resultadoTexto = `Para ${cantidad} bidones necesitas: 
            ${filasCompletas} filas completas y ${bolsonesSueltos} bolsones sueltos.`;

    } else if (opcion === 2) {
        // Calcular el total de bidones para la cantidad de filas ingresadas
        const totalBidones = cantidad * bolsonesPorFila * bidonesPorBolson;
        resultadoTexto = `El total de bidones para ${cantidad} filas es: ${totalBidones}.`;
    }

    // Mostrar resultado en la página
    document.getElementById('resultado').innerText = resultadoTexto;
}
