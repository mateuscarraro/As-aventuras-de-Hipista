class Inimigo extends Animacao {
 
  constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, daley){
    super (matriz, imagem, x, variacaoY,  largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade;
    this.daley = daley;
    this.x = width + daley;
  }
  
  move()
  {
    this.x = this.x - this.velocidade;
    
    if( this.x < -this.largura - this.daley){
    this.x = width;
    
    }
  }
}