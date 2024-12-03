class Sala {
  constructor(nome, engine) {
    this.nome = nome; // Nome da sala
    this.engine = engine; // Referência à engine principal
    this.objetos = new Map(); // Mapa para armazenar objetos na sala
    this.ferramentas = new Map(); // Mapa para armazenar ferramentas na sala
    this.portas = new Map(); // Conexões com outras salas
  }

  // Adiciona uma porta para outra sala
  addPorta(direcao, sala) {
    this.portas.set(direcao, sala);
  }

  // Pega uma ferramenta da sala
  pega(nomeFerramenta) {
    if (this.ferramentas.has(nomeFerramenta)) {
      console.log(`Você pegou ${nomeFerramenta}.`);
      const ferramenta = this.ferramentas.get(nomeFerramenta);
      this.ferramentas.delete(nomeFerramenta); // Remove a ferramenta da sala
      return ferramenta;
    }
    console.log(`${nomeFerramenta} não está disponível.`);
    return null;
  }

  // Usa um objeto na sala
  usa(nomeObjeto) {
    if (this.objetos.has(nomeObjeto)) {
      const objeto = this.objetos.get(nomeObjeto);
      return objeto.usar(this.engine.mochila); // Passa a ferramenta atual da mochila, se existir
    }
    console.log(`Não há ${nomeObjeto} aqui.`);
    return false;
  }

  // Sai da sala atual para outra conectada
  sai(direcao) {
    if (this.portas.has(direcao)) {
      const salaDestino = this.portas.get(direcao);
      console.log(`Você entrou no ${direcao}.`);
  
      // Chama o método `entrar`, se existir, na sala de destino
      if (typeof salaDestino.entrar === "function") {
        salaDestino.entrar();
      }
  
      return salaDestino;
    }
    console.log("Não há saída nessa direção.");
    return this;
  }

  // Método para interagir com um objeto
  usarObjeto(nomeObjeto, ferramenta = null) {
    if (this.objetos.has(nomeObjeto)) {
      const objeto = this.objetos.get(nomeObjeto);
      objeto.usar(ferramenta);
    } else {
      console.log(`Não há ${nomeObjeto} aqui.`);
    }
  }
}

module.exports = Sala;
