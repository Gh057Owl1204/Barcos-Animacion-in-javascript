class bar2{
	constructor (x,y,la,an,v){
		this.X = x;
		this.Y = y;
		this.largo = la;
		this.ancho = an;
	this.velocidad = v;}
	
	Dibujar(context){
		context.beginPath();
		context.fillStyle ="red";
		context.moveTo(this.X,this.Y);
		context.bezierCurveTo(this.X-this.ancho, this.Y,
							this.X-this.ancho/2,this.Y+this.largo,
							this.X,this.Y+this.largo);	
		context.bezierCurveTo(this.X+this.ancho/2, this.Y+this.largo,
							this.X+this.ancho,this.Y,
							this.X,this.Y);
		context.closePath();
		context.fill();	
		context.stroke();				
	}
}