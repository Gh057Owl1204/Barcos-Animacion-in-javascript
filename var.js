var iniX = 650;
var iniY = 100;
var tiempo = 0;
var aux;
var barco1;
var barco2;
function Barco()
{
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	barco1 = new bar1 (iniX, 90, 100, 25, 12);
	barco1.Dibujar(context);
	barco2 = new bar2 (650, iniY, 100, 25, 17);
	barco2.Dibujar(context);
	context.strokeStyle = "black";
	context.font = "16px Arial";
	context.fillText("distancia = 0", iniX, iniY);
	
}

function animacion() {
		aux = setInterval( animar, 42);
	}

function animar(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	context.strokeStyle = "black";
	
	barco1.X = iniX - (barco1.velocidad*(tiempo/1000));
	barco1.Dibujar(context);
	barco2.Y = iniY + (barco2.velocidad*(tiempo/1000));
	barco2.Dibujar(context);
	tiempo+=42;
	context.font = "16px Arial";
	var ex = barco1.X - 650;
	var ey = barco2.Y - 100;
	var H = Math.sqrt((ex*ex)+(ey*ey));
	context.fillText("distancia = "+H, barco1.X-(ex/2), barco2.Y-(ey/2));
	}

function parar() {

	clearInterval(aux);
	tiempo = null;
	
}

