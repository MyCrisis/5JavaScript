function validarParcial1(e){
	var tecladoPar1 = (document.all)?e.keyCode:e.which;
	if (tecladoPar1 == 8) return true;
	var patronPar1 = /[0-9\d.]/;
	var tecPar1 = String.fromCharCode(tecladoPar1);
	return patronPar1.test(tecPar1);
}

function validarParcial2(e){
	var tecladoPar2 = (document.all)?e.keyCode:e.which;
	if (tecladoPar2 == 8) return true;
	var patronPar2 = /[0-9\d.]/;
	var tecPar2 = String.fromCharCode(tecladoPar2);
	return patronPar2.test(tecPar2);
}

function validarParcial3(e){
	var tecladoPar3 = (document.all)?e.keyCode:e.which;
	if (tecladoPar3 == 8) return true;
	var patronPar3 = /[0-9\d.]/;
	var tecPar3 = String.fromCharCode(tecladoPar3);
	return patronPar3.test(tecPar3);
}

function validarExamen(e){
	var tecladoExamen = (document.all)?e.keyCode:e.which;
	if (tecladoExamen == 8) return true;
	var patronExamen = /[0-9\d.]/;
	var tecExamen = String.fromCharCode(tecladoExamen);
	return patronExamen.test(tecExamen);
}

function validarProyecto(e){
	var tecladoProyecto = (document.all)?e.keyCode:e.which;
	if (tecladoProyecto == 8) return true;
	var patronProyecto = /[0-9\d.]/;
	var tecProyecto = String.fromCharCode(tecladoProyecto);
	return patronProyecto.test(tecProyecto);
}

function calificaciones(){
	var par1 = document.Ejercicio4.parcial1.value;
	var par2 = document.Ejercicio4.parcial2.value;
	var par3 = document.Ejercicio4.parcial3.value;
	var exa = document.Ejercicio4.examenFinal.value;
	var proy = document.Ejercicio4.proyectoFinal.value;
	var cant1 = parseInt(par1);
	var cant2 = parseInt(par2);
	var cant3 = parseInt(par3);
	var cantE = parseInt(exa);
	var cantP = parseInt(proy);
	var totalParciales = cant1+cant2+cant3;
	var finalParciales = 0.1834*totalParciales;
	var finalExamen = 0.3*cantE;
	var finalProyecto = 0.15*cantP;
	var finalTodo = finalProyecto+finalExamen+finalParciales;
	document.Ejercicio4.calificacionFinal.value=finalTodo;
}