function validarBase(e){
	var tecladoB = (document.all)?e.keyCode:e.which;
	if (tecladoB == 8) return true;
	var patronB = /[0-9\d.]/;
	var tecB = String.fromCharCode(tecladoB);
	return patronB.test(tecB);
}

function validarVentaUno(e){
	var teclado1 = (document.all)?e.keyCode:e.which;
	if (teclado1 == 8) return true;
	var patron1 = /[0-9\d.]/;
	var tec1 = String.fromCharCode(teclado1);
	return patron1.test(tec1);
}

function validarVentaDos(e){
	var teclado2 = (document.all)?e.keyCode:e.which;
	if (teclado2 == 8) return true;
	var patron2 = /[0-9\d.]/;
	var tec2 = String.fromCharCode(teclado2);
	return patron2.test(tec2);
}

function validarVentaTres(e){
	var teclado3 = (document.all)?e.keyCode:e.which;
	if (teclado3 == 8) return true;
	var patron3 = /[0-9\d.]/;
	var tec3 = String.fromCharCode(teclado3);
	return patron3.test(tec3);
}

function validarVentaCuatro(e){
	var teclado4 = (document.all)?e.keyCode:e.which;
	if (teclado4 == 8) return true;
	var patron4 = /[0-9\d.]/;
	var tec4 = String.fromCharCode(teclado4);
	return patron4.test(tec4);
}

function validarVentaCinco(e){
	var teclado5 = (document.all)?e.keyCode:e.which;
	if (teclado5 == 8) return true;
	var patron5 = /[0-9\d.]/;
	var tec5 = String.fromCharCode(teclado5);
	return patron5.test(tec5);
}

function darTodo(){
	var valorBase = document.Ejercicio2.base.value;
	var valorVenta1 = document.Ejercicio2.ventaUno.value;
	var valorVenta2 = document.Ejercicio2.ventaDos.value;
	var valorVenta3 = document.Ejercicio2.ventaTres.value;
	var valorVenta4 = document.Ejercicio2.ventaCuatro.value;
	var valorVenta5 = document.Ejercicio2.ventaCinco.value;
	var comi1 = parseInt(valorVenta1);
	var comi2 = parseInt(valorVenta2);
	var comi3 = parseInt(valorVenta3);
	var comi4 = parseInt(valorVenta4);
	var comi5 = parseInt(valorVenta5);
	var SumVent1 = 0.138*comi1;
	var SumVent2 = 0.138*comi2;
	var SumVent3 = 0.138*comi3;
	var SumVent4 = 0.138*comi4;
	var SumVent5 = 0.138*comi5;
	var total = 1*valorBase+SumVent1+SumVent2+SumVent3+SumVent4+SumVent5;
	document.Ejercicio2.comisionUnoTotal.value="$"+SumVent1;
	document.Ejercicio2.comisionDosTotal.value="$"+SumVent2;
	document.Ejercicio2.comisionTresTotal.value="$"+SumVent3;
	document.Ejercicio2.comisionCuatroTotal.value="$"+SumVent4;
	document.Ejercicio2.comisionCincoTotal.value="$"+SumVent5;
	document.Ejercicio2.sueldoFinal.value="$"+total;
}