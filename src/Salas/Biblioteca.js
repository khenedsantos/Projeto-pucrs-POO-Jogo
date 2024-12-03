const Sala = require('../Sala');
const Objeto = require('../Objeto');

class Biblioteca extends Sala {
  constructor(engine) {
    super("Biblioteca", engine);
    this.mensagemLivroExibida = false; // Controle para exibir a mensagem apenas uma vez

    // Adiciona um objeto "Livro Antigo" à Biblioteca
    this.objetos.set("livro antigo", new Objeto(
      "Livro Antigo",
      "Você encontrou uma pista no livro: 'A chave está escondida no Quarto Secreto.'",
      "Você já encontrou essa pista."
    ));
  }

  entrar() {
    if (!this.mensagemLivroExibida) {
      console.log("Há um livro antigo no chão.");
      this.mensagemLivroExibida = true; // Marca a mensagem como exibida
    }
  }
}

module.exports = Biblioteca;
