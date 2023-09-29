class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  class Gato extends Animal {
    constructor(nome) {
      super(nome, "Gato");
    }
  
    miar() {
      console.log(`${this.nome} está miando: Miau!`);
    }
  }
  const gato = new Gato("Mia");
  console.log(`Nome do gato: ${gato.nome}`);
  console.log(`Espécie do gato: ${gato.especie}`);
  gato.miar();
  