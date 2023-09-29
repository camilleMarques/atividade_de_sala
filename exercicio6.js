class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
const cachorro = new Animal("Rex", "Cachorro");
console.log(`Nome do animal: ${cachorro.nome}`);
console.log(`Espécie do animal: ${cachorro.especie}`);
