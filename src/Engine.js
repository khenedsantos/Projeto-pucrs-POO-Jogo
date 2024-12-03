const Sala = require('./Sala');

class Engine {
  constructor() {
    this.mochila = null;
    this.salaCorrente = null;
    this.fim = false;
    this.mensagemInicialHallEntradaExibida = false; // Variável para controlar a exibição da mensagem
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
        if (this.salaCorrente.ferramentas.has(argumento)) {
          this.mochila = this.salaCorrente.ferramentas.get(argumento);
          this.salaCorrente.ferramentas.delete(argumento);
          console.log(`Você coletou: ${this.mochila.nome}`);
        } else {
          console.log("Ferramenta não encontrada na sala.");
        }
        break;
  
        case 'examinar':
          if (this.salaCorrente.objetos.has(argumento)) {
            const objeto = this.salaCorrente.objetos.get(argumento);
            objeto.usar(this.mochila); // Exibe as mensagens apropriadas
          } else {
            console.log("Objeto não encontrado na sala.");
          }
          break;        
        
  
      case 'inventario':
        console.log(`Você tem: ${this.mochila ? this.mochila.nome : 'nada'}`);
        break;
  
      case 'mover':
        const novaSala = this.salaCorrente.sai(argumento);
        this.salaCorrente = novaSala;
        
        // Chama o método `entrar`, se existir, na nova sala
        if (typeof novaSala.entrar === "function") {
            novaSala.entrar();
        }
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
    const prompt = require('prompt-sync')();

    // Mensagem de boas-vindas com quebras de linha para legibilidade
    console.log("Bem-vindo à Aventura na Mansão Abandonada!\n");
    console.log("Você está preso em uma mansão misteriosa. Para sair, será necessário:");
    console.log("- Explorar as salas");
    console.log("- Seguir as pistas");
    console.log("- Usar as ferramentas corretamente.\n");
    console.log("Boa sorte!\n");

    while (!this.fim) {
      console.log(`\nVocê está na sala: ${this.salaCorrente.nome}`);
      
      // Exibe a mensagem apenas na primeira vez no Hall de Entrada
      if (this.salaCorrente.nome === "Hall de Entrada" && !this.mensagemInicialHallEntradaExibida) {
        console.log("Há uma lanterna velha no chão.\n");
        this.mensagemInicialHallEntradaExibida = true; // Marca como exibida
      }

      const comando = prompt("O que deseja fazer? ");
      this.executaComando(comando);
    }
  }
}

module.exports = Engine;
