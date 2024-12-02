class Objeto {
  #nome;
  #descricaoAntesAcao;
  #descricaoDepoisAcao;
  #acaoOk = false;

  constructor(nome, descricaoAntesAcao, descricaoDepoisAcao) {
    this.#nome = nome;
    this.#descricaoAntesAcao = descricaoAntesAcao;
    this.#descricaoDepoisAcao = descricaoDepoisAcao;
  }

  get nome() {
    return this.#nome;
  }

  usar(ferramenta) {
    if (this.#acaoOk) {
      console.log(this.#descricaoDepoisAcao);
      return true;
    } else {
      console.log(this.#descricaoAntesAcao);
      return false;
    }
  }
}

module.exports = Objeto;
