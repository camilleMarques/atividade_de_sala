class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
const retangulo = new FiguraGeometrica(5, 10);

console.log(`Base do retângulo: ${retangulo.base}`);
console.log(`Altura do retângulo: ${retangulo.altura}`);
