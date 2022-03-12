# Game FPS trainer
### Ferramentas: JavaScript, HTML5, CSS3 e Bootstrap 4.

Projeto pessoal de um jogo online com o intuito de colocar em prática conhecimentos intermediários de JavaScript, assim como HTML, CSS e Bootstrap.

O objetivo foi criar um jogo web que simula um "fps trainer", comumente encontrado na internet. O jogo se baseia nos inputs iniciais de time e dificuldade escolhidos. Ao tocar em "Começar a jogar", o usuário é redirecionado para a página onde o jogo é de fato rodado. O intuito é eliminar os targets durante o tempo da rodada, sem perder todas as vidas. O target exibido muda conforme o time escolhido no início, e o tempo de respawn dos targets muda conforme seleção de dificuldade.

O grande desafio deste projeto foi a geração de itens randômicos, manipulação das funções baseadas no tempo restante, adaptação da resolução do jogo a tela em que estiver sendo utilizado, etc.

##

##### Atualização (12/mar/2022)
- Update na forma de passagem das informações de dificuldade para o jogo. Antes era através do 'windows.location.href', agora é feito através de localStorage. Ao encerrar o jogo (vitória ou derrota), o localStorage é limpo;
- Adicionada a funcionalidade de escolher um time na tela inicial, além da seleção de dificuldade já existente. O tipo do target exibido muda conforme escolha do time.

##### Commit inicial (1/mar/2022)
- Upload inicial do projeto com pendências em: - Aprimorar a passagem dos dados de dificuldade da tela inicial para o jogo em si; - Adicionar a funcionalidade de escolher um time na tela inicial e mudar o target exibido baseado nisso.
