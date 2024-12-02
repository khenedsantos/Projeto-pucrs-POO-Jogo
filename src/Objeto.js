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
    // Verifica se o objeto já está desbloqueado
    if (this.#acaoOk) {
      console.log(this.#descricaoDepoisAcao);
      return true;
    }

    // Lógica para objetos específicos
    if (this.#nome === "cofre trancado" && ferramenta?.nome === "Pé de Cabra") {
      console.log("Você usou o Pé de Cabra para abrir o cofre!");
      this.#acaoOk = true; // Marca como desbloqueado
      console.log(this.#descricaoDepoisAcao); // Exibe a descrição após a ação
      return true;
    }

    if (this.#nome === "porta trancada" && ferramenta?.nome === "Pé de Cabra") {
      console.log("Você usou o Pé de Cabra para abrir a porta!");
      this.#acaoOk = true; // Marca como desbloqueado
      return true;
    }

    // Caso nenhuma condição seja atendida
    console.log(this.#descricaoAntesAcao);
    return false;
  }
}

module.exports = Objeto;
