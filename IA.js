//Example for prediction proyecting amount for 7 Month (6 month have 13000 of amount)
// https://github.com/jbagnato/machine-learning
var JSON_EXAMPLE = 
[
	{
		id    : 1, 
		monto :7000
	},
	{
		id    : 2, 
		monto :9000
	},
	{
		id    : 3, 
		monto :5000
	},
	{
		id    : 4, 
		monto :11000
	},
	{
		id    : 5, 
		monto :10000
	},
	{
		id    : 6, 
		monto :13000
	}
]

/**
*
* Ready DOM!
*
**/
$(document).ready(function()
{
	regresion_lineal(JSON_EXAMPLE);
	
});

/**
*
*
* Regresion Lineal
*
**/
function regresion_lineal(_json)
{
	var sumatoria_1 = 0;
	var sumatoria_2 = 0;
	var sumatoria_3 = 0;
	var sumatoria_4 = 0;
	var sumatoria_5 = 0;
	var pendiente   = 0;
	//pendiente
	var sumatoria_6  = 0;
	var sumatoria_7  = 0;
	var interseccion = 0;
	//pronostico
	var pronostico = 0;
	
	jQuery.each(_json, function(i, json) 
	{	
		console.log(json);
		sumatoria_1 += json.id * json.monto;
		sumatoria_2 += json.monto;
		sumatoria_3 += json.id;
		sumatoria_4 += Math.pow(json.id, 2);				
	});
	//Quinta sumatoria
	sumatoria_5 = Math.pow(sumatoria_3, 2);
	pendiente = (_json.length*(sumatoria_1) - ((sumatoria_2) * (sumatoria_3))) / ((6 * (sumatoria_4)) - (sumatoria_5));
	console.log(pendiente);
	
	//Punto interseccion
	//sumatoria 6
	sumatoria_6 = sumatoria_2 / _json.length;
	sumatoria_7 = sumatoria_3 / _json.length;
	
	interseccion = sumatoria_6 - (pendiente * sumatoria_7);
	console.log(interseccion);
	
	pronostico = interseccion + (pendiente * (_json.length + 1));
	
	console.log(Math.round(pronostico, 1));
}