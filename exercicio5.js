class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio * this.raio;
    }
  }
  const circulo = new Circulo(5);
  
  const areaDoCirculo = circulo.calcularArea();
  console.log(`A área do círculo é ${areaDoCirculo.toFixed(2)}`);
  