function validarCostoNormal(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function descuento(){
	var valorDescuento = document.Ejercicio3.costoNormal.value;
	var cantidad = parseInt(valorDescuento);
	var descontazo = 0.07*cantidad;
	var totalFinal = cantidad-descontazo;
	document.Ejercicio3.precioFinal.value="$"+totalFinal;
}