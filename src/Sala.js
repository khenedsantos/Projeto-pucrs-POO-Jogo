class Sala {
  constructor(nome, engine) {
    this.nome = nome;
    this.engine = engine;
    this.objetos = new Map();
    this.ferramentas = new Map(); // Certifique-se de que está inicializado
    this.portas = new Map();
  }

  addPorta(direcao, sala) {
    this.portas.set(direcao, sala);
  }

  pega(nomeFerramenta) {
    if (this.ferramentas.has(nomeFerramenta)) {
      console.log(`Você pegou ${nomeFerramenta}.`);
      return this.ferramentas.get(nomeFerramenta);
    }
    console.log(`${nomeFerramenta} não está disponível.`);
    return null;
  }

  usa(nomeObjeto) {
    if (this.objetos.has(nomeObjeto)) {
      return this.objetos.get(nomeObjeto).usar(this.engine.mochila);
    }
    console.log(`Não há ${nomeObjeto} aqui.`);
    return false;
  }

  sai(direcao) {
    if (this.portas.has(direcao)) {
      console.log(`Você entrou no ${direcao}.`);
      return this.portas.get(direcao);
    }
    console.log("Não há saída nessa direção.");
    return this;
  }
}

module.exports = Sala;
