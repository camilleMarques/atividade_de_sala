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
  const cachorro = new Cachorro("Totó");
  
  cachorro.latir();
  