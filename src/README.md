Aventura na Mansão Abandonada
Aventura na Mansão Abandonada é um jogo de aventura em texto, onde o jogador explora uma mansão misteriosa, coleta ferramentas e resolve enigmas para escapar. O jogo foi projetado utilizando conceitos de Programação Orientada a Objetos, como encapsulamento, herança e polimorfismo.

Estrutura do Jogo
O jogo possui quatro salas principais conectadas entre si:

Hall de Entrada
Biblioteca
Quarto Secreto
Sala de Jantar
Cada sala contém objetos e/ou ferramentas que ajudam o jogador a resolver o enigma final e escapar da mansão.

As interações permitem que o jogador descubra pistas e utilize ferramentas para avançar no enredo.

Instruções de Jogo
Durante o jogo, o jogador pode usar os seguintes comandos para interagir com as salas e objetos:

coletar [ferramenta]: Permite pegar uma ferramenta disponível na sala atual.
Exemplo: coletar lanterna

examinar [objeto]: Investiga um objeto específico para descobrir segredos ou pistas.
Exemplo: examinar livro antigo

inventario: Mostra a ferramenta que o jogador possui no momento.
Exemplo: inventario

mover [sala]: Desloca o jogador para uma sala conectada.
Exemplo: mover biblioteca

sair: Encerra o jogo.
Exemplo: sair

Mecânica do Jogo
Exploração: Navegue pelas salas usando o comando mover para encontrar ferramentas e objetos importantes.
Interação: Use os comandos examinar e coletar para interagir com os elementos das salas.
Solução do Enigma: Combine ferramentas e pistas coletadas para avançar até o final do jogo.
Exemplo de Fluxo de Jogo
Passo a Passo:
O jogador começa no Hall de Entrada:

Comando: coletar lanterna
Move-se para a Biblioteca:

Comando: mover biblioteca
Examina o livro antigo:

Comando: examinar livro antigo
Move-se para o Quarto Secreto:

Comando: mover quarto secreto
Coleta a chave enferrujada:

Comando: coletar chave enferrujada
Move-se para a Sala de Jantar:

Comando: mover sala de jantar
Examina o relógio de ouro para encontrar a chave secreta e escapar:

Comando: examinar relogio de ouro
Detalhes Técnicos
O jogo foi implementado utilizando:

JavaScript (Node.js) como linguagem principal.
Arquitetura modular para separação de responsabilidades (salas, ferramentas, objetos, etc.).
Conceitos de Programação Orientada a Objetos:
Encapsulamento: Atributos privados com métodos get e set.
Herança: Classes específicas, como Ferramenta e Objeto, derivadas de uma classe base.
Map: Para gerenciar as conexões entre salas e itens disponíveis.