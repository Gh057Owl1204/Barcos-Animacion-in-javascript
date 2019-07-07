class bar1{
	constructor (x,y,la,an,v){
		this.X = x;
		this.Y = y;
		this.largo = la;
		this.ancho = an;
	this.velocidad = v;}
	
	Dibujar(context){
		context.beginPath();
		context.fillStyle ="blue";
		context.moveTo(this.X,this.Y);
		context.bezierCurveTo(this.X, this.Y-this.ancho,
							this.X-this.largo,this.Y-this.ancho/2,
							this.X-this.largo,this.Y);	
		context.bezierCurveTo(this.X-this.largo, this.Y+this.ancho/2,
							this.X,this.Y+this.ancho,
							this.X,this.Y);
		context.closePath();
		context.fill();	
		context.stroke();				
	}
}