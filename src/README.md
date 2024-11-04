# Aventura na Mansão Abandonada

**Aventura na Mansão Abandonada** é um jogo de aventura em texto, onde o jogador explora uma mansão misteriosa, coleta ferramentas e resolve enigmas para escapar.

## Estrutura do Jogo

O jogo possui quatro salas principais:
- **Hall de Entrada**
- **Biblioteca**
- **Quarto Secreto**
- **Sala de Jantar**

Cada sala contém objetos e/ou ferramentas que ajudam o jogador a resolver o enigma final.

## Instruções de Jogo

O jogador pode usar os seguintes comandos durante o jogo para interagir com as salas e objetos:

- **coletar [ferramenta]** - Permite ao jogador pegar uma ferramenta disponível na sala atual. Exemplo: `coletar lanterna`
- **examinar [objeto]** - Comando para investigar um objeto específico e descobrir segredos ou pistas. Exemplo: `examinar livro antigo`
- **inventario** - Exibe a ferramenta que o jogador possui no momento, permitindo verificar o que está carregando.
- **mover [sala]** - Permite que o jogador se desloque para uma sala conectada. Exemplo: `mover biblioteca`
- **sair** - Encerra o jogo.

### Exemplo de fluxo Jogo
### Exemplo de como o jogador pode interagir com o jogo

1. O jogador começa no Hall de Entrada e digita o comando: `coletar lanterna`
2. Depois, ele se move para a Biblioteca com o comando: `mover biblioteca`
3. Na Biblioteca, o jogador examina o livro antigo com o comando: `examinar livro antigo`
4. Em seguida, ele se move para o Quarto Secreto: `mover quarto secreto`
5. No Quarto Secreto, ele coleta a chave enferrujada: `coletar chave enferrujada`
6. O jogador então se move para a Sala de Jantar: `mover sala de jantar`
7. Finalmente, ele examina o relógio de ouro com o comando: `examinar relogio de ouro`

### Produzido por Khened Santos