function validarMujer(e){
	var tecladoM = (document.all)?e.keyCode:e.which;
	if (tecladoM == 8) return true;
	var patronM = /[0-9\d.]/;
	var tecM = String.fromCharCode(tecladoM);
	return patronM.test(tecM);
}

function validarHombre(e){
	var tecladoH = (document.all)?e.keyCode:e.which;
	if (tecladoH == 8) return true;
	var patronH = /[0-9\d.]/;
	var tecH = String.fromCharCode(tecladoH);
	return patronH.test(tecH);
}

function porcentaje(){
	var mujeresOriginal = document.Ejercicio5.cantMujeres.value;
	var hombresOriginal = document.Ejercicio5.cantHombres.value;
	var cantidadMujeres = parseInt(mujeresOriginal);
	var cantidadHombres = parseInt(hombresOriginal);
	var cantidadTotal = cantidadHombres+cantidadMujeres;
	var cantidadPorcentaje = 100/cantidadTotal;
	var porcentajeFinalMujer = cantidadMujeres*cantidadPorcentaje;
	var porcentajeFinalHombre = cantidadHombres*cantidadPorcentaje;
	document.Ejercicio5.porcentajeTotalMujeres.value=porcentajeFinalMujer+"%";
	document.Ejercicio5.porcentajeTotalHombres.value=porcentajeFinalHombre+"%";
}