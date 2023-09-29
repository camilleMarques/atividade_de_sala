class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  class Retangulo extends FiguraGeometrica {
    calcularArea() {
      return this.base * this.altura;
    }
  }
  const retangulo = new Retangulo(5, 10);
  const areaDoRetangulo = retangulo.calcularArea();
  console.log(`A área do retângulo é ${areaDoRetangulo}`);
  