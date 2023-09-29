class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome, "Cachorro");
    }
  
    latir() {
      console.log(`${this.nome} está latindo: Au Au!`);
    }
  }

  const cachorro = new Cachorro("Rex");
  
  console.log(`Nome do cachorro: ${cachorro.nome}`);
  console.log(`Espécie do cachorro: ${cachorro.especie}`);

  cachorro.latir();
  