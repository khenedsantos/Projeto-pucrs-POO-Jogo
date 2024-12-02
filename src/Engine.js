const Sala = require('./Sala');

class Engine {
  constructor() {
    this.mochila = null;
    this.salaCorrente = null;
    this.fim = false;
    this.criaCenario();
  }

  criaCenario() {
    const HallEntrada = require('./Salas/HallEntrada');
    const Biblioteca = require('./Salas/Biblioteca');
    const QuartoSecreto = require('./Salas/QuartoSecreto');
    const SalaDeJantar = require('./Salas/SalaDeJantar');
    const SalaDeEstar = require('./Salas/SalaDeEstar');
    const Porao = require('./Salas/Porao');
  
    // Instanciando as salas
    this.hallEntrada = new HallEntrada(this);
    this.biblioteca = new Biblioteca(this);
    this.quartoSecreto = new QuartoSecreto(this);
    this.salaDeJantar = new SalaDeJantar(this);
    this.salaDeEstar = new SalaDeEstar(this);
    this.porao = new Porao(this);
  
    // Conectando as salas
    this.hallEntrada.addPorta('biblioteca', this.biblioteca);
    this.hallEntrada.addPorta('quarto secreto', this.quartoSecreto);
    this.hallEntrada.addPorta('sala de jantar', this.salaDeJantar);
    this.hallEntrada.addPorta('sala de estar', this.salaDeEstar);
    this.hallEntrada.addPorta('porao', this.porao);
  
    this.biblioteca.addPorta('hall entrada', this.hallEntrada);
    this.biblioteca.addPorta('quarto secreto', this.quartoSecreto);
    this.biblioteca.addPorta('sala de jantar', this.salaDeJantar);
    this.biblioteca.addPorta('sala de estar', this.salaDeEstar);
    this.biblioteca.addPorta('porao', this.porao);
  
    this.quartoSecreto.addPorta('hall entrada', this.hallEntrada);
    this.quartoSecreto.addPorta('biblioteca', this.biblioteca);
    this.quartoSecreto.addPorta('sala de jantar', this.salaDeJantar);
    this.quartoSecreto.addPorta('sala de estar', this.salaDeEstar);
    this.quartoSecreto.addPorta('porao', this.porao);
  
    this.salaDeJantar.addPorta('hall entrada', this.hallEntrada);
    this.salaDeJantar.addPorta('biblioteca', this.biblioteca);
    this.salaDeJantar.addPorta('quarto secreto', this.quartoSecreto);
    this.salaDeJantar.addPorta('sala de estar', this.salaDeEstar);
    this.salaDeJantar.addPorta('porao', this.porao);
  
    this.salaDeEstar.addPorta('hall entrada', this.hallEntrada);
    this.salaDeEstar.addPorta('biblioteca', this.biblioteca);
    this.salaDeEstar.addPorta('quarto secreto', this.quartoSecreto);
    this.salaDeEstar.addPorta('sala de jantar', this.salaDeJantar);
    this.salaDeEstar.addPorta('porao', this.porao);
  
    this.porao.addPorta('hall entrada', this.hallEntrada);
    this.porao.addPorta('biblioteca', this.biblioteca);
    this.porao.addPorta('quarto secreto', this.quartoSecreto);
    this.porao.addPorta('sala de jantar', this.salaDeJantar);
    this.porao.addPorta('sala de estar', this.salaDeEstar);
  
    // Definindo a sala inicial
    this.salaCorrente = this.hallEntrada;
  }
  

  executaComando(comando) {
    const [acao, ...args] = comando.split(" ");
    const argumento = args.join(" ");

    switch (acao) {
      case 'coletar':
        this.mochila = this.salaCorrente.pega(argumento);
        break;
      case 'examinar':
        this.salaCorrente.usa(argumento);
        break;
      case 'inventario':
        console.log(`Você tem: ${this.mochila ? this.mochila.nome : 'nada'}`);
        break;
      case 'mover':
        this.salaCorrente = this.salaCorrente.sai(argumento);
        break;
      case 'sair':
        this.fim = true;
        console.log("Jogo encerrado.");
        break;
      default:
        console.log("Comando não reconhecido.");
    }
  }

  jogar() {
    const prompt = require('prompt-sync')(); // Certifique-se de que o prompt-sync está instalado
    while (!this.fim) {
      console.log(`\nVocê está na sala: ${this.salaCorrente.nome}`);
      const comando = prompt("O que deseja fazer? ");
      this.executaComando(comando);
    }
  }
}

module.exports = Engine;
