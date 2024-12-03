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
    // Caso o objeto já tenha sido usado
    if (this.#acaoOk) {
      console.log(this.#descricaoDepoisAcao);
      return true;
    }

    // Caso o objeto não precise de ferramenta
    if (!ferramenta) {
      console.log(this.#descricaoAntesAcao);
      this.#acaoOk = true; // Marca como desbloqueado após a interação
      return true;
    }

    // Caso o objeto precise de uma ferramenta específica
    console.log("Nada aconteceu.");
    return false;
  }
}

module.exports = Objeto;
