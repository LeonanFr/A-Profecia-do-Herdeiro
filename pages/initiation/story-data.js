export const StoryNodes = {
  start: {
    text: "<p>A palavra de Deus, para os guardiões, era uma que lhes rodeava impiedosamente: morte. O ano é 2000, e a ameaça paira no ar como fumaça.</p><p>Como líder da Ordem Inglesa, Ariel sente o peso da profecia. Em sua mão repousa o anel com o símbolo do lobo, a marca da magia selvagem da família Sheridan. Ela sabe que a guerra está às portas.</p>",
    choices: [
      {
        text: "Buscar um momento de paz no santuário antes do conselho.",
        next: "sanctuary",
      },
      {
        text: "Ir diretamente para o Salão de Guerra planejar as defesas.",
        next: "war_room",
      },
      {
        text: "Escrever uma carta ao cunhado na França pedindo reforços.",
        next: "letter_france",
      },
    ],
  },
  sanctuary: {
    text: "<p>Ariel caminha a passos silenciosos até o santuário, um quarto sem janelas com um tapete felpudo laranja e vermelho. O local não recebe visitas há muito tempo e está empoeirado.</p><p>Ajoelhada, ela precisa decidir se apenas fará uma prece no silêncio ou se usará sua própria essência para purificar o ambiente.</p>",
    choices: [
      {
        text: "Recitar o feitiço de limpeza 'Hirgvar Tut'.",
        next: "magic_clean",
      },
      {
        text: "Ignorar a poeira e rezar para a Chama em silêncio.",
        next: "silent_prayer",
      },
      {
        text: "Usar a prece para tentar se conectar com a energia da Chama.",
        next: "pray_connection",
      },
    ],
  },
  war_room: {
    text: "<p>Ariel entra no salão ornamentado com armaduras de ouro. Ela se senta e a coroa do Grande Conselheiro desce magicamente, encaixando-se em sua cabeça.</p><p>Ao anunciar a retirada das tropas, Iron, o responsável pelo treinamento, levanta a voz em um tom desafiador: 'Isso é loucura'. Ele ainda guarda rancor por ela ter escolhido Arthuro no passado.</p>",
    choices: [
      {
        text: "Repreendê-lo com autoridade, lembrando-o de sua posição como líder.",
        next: "reprimand_iron",
      },
      {
        text: "Tentar apaziguar os ânimos com a ajuda de Ava, a curandeira-chefe.",
        next: "ava_help",
      },
      {
        text: "Ignorar o ataque e focar no plano de contingência militar.",
        next: "military_focus",
      },
    ],
  },
  letter_france: {
    text: "<p>Com dedos trêmulos, Ariel escreve uma mensagem para seu cunhado. As palavras de alerta sobre a profecia parecem infundadas mesmo para ela. O corvo mensageiro parte antes do amanhecer.</p><p>Mas o tempo é cruel. A resposta nunca chegará. Em seu lugar, o silêncio da derrota ecoará da França até a Inglaterra.</p>",
    choices: [
      {
        text: "Aceitar que está sozinha e seguir para o conselho.",
        next: "war_room",
      },
      { text: "Fazer uma última prece antes da reunião.", next: "sanctuary" },
    ],
  },
  magic_clean: {
    text: "<p>'Hirgvar Tut', ela pronuncia, e uma luz azul irrompe. Como o custo da magia para os guardiões é alto, a pele de seus dedos esquenta e um fio de sangue escorre de sua mão.</p><p>Ela sussurra 'Revüert' — Justo é o fogo. Porém, a paz dura pouco. O tempo avança implacavelmente para o outono de 2004.</p>",
    choices: [
      {
        text: "Avançar no tempo e encarar o destino inevitável.",
        next: "the_fall",
      },
    ],
  },
  silent_prayer: {
    text: "<p>Sem vocação para a religião, sua prece serve mais para tentar esquecer o que a aguarda. A ansiedade ainda corrói seu estômago em um formigamento hostil.</p><p>Ela se levanta e segue para seus deveres. Quatro longos anos de terror se passam rapidamente.</p>",
    choices: [
      { text: "Avançar para novembro de 2004. O massacre.", next: "the_fall" },
    ],
  },
  pray_connection: {
    text: "<p>Ariel fecha os olhos e clama à Chama com toda a sua essência. Por um instante, ela vislumbra um campo de flores douradas — um fragmento de um futuro que talvez nunca exista. A visão some, deixando um gosto amargo na boca.</p><p>Algo naquele vislumbre a faz duvidar ainda mais. Ela sai do santuário com o coração apertado.</p>",
    choices: [
      {
        text: "Compartilhar a visão com Ava, sua melhor amiga.",
        next: "vision_ava",
      },
      {
        text: "Guardar o presságio para si e seguir para o conselho.",
        next: "war_room",
      },
    ],
  },
  vision_ava: {
    text: "<p>Ava a escuta em silêncio, depois segura sua mão. 'Talvez a Chama ainda nos escute, Ariel. Talvez haja esperança.'</p><p>As duas combinam um plano sigiloso: esconder um artefato mágico no castelo, caso tudo desmorone. Uma carta na manga para o futuro.</p>",
    choices: [
      {
        text: "Preparar o esconderijo e então enfrentar o conselho.",
        next: "war_room",
      },
      {
        text: "Confiar apenas na força da Ordem e ignorar o presságio.",
        next: "the_fall_short",
      },
    ],
  },
  military_focus: {
    text: "<p>Iron range, mas Ariel mantém a calma. Ela delineia um plano de defesa por camadas, usando os poucos magos restantes para reforçar os pilares do feitiço ancestral. Luke, o bibliotecário, resmunga algo sobre 'profecia antiga', mas é ignorado.</p><p>Por um momento, parece que a estratégia pode funcionar. Mas o tempo conspira contra eles.</p>",
    choices: [
      {
        text: "Acompanhar a execução do plano nos meses seguintes.",
        next: "months_later",
      },
    ],
  },
  months_later: {
    text: "<p>O inverno de 2000 passa, depois a primavera, o verão... As vitórias são poucas, as perdas, muitas. Ariel começa a perder a conta dos guardiões que enterrou. A única luz nos seus dias são os filhos que ainda não nasceram.</p><p>O ataque final não vem do front esperado. Vem de dentro.</p>",
    choices: [
      { text: "Descobrir a traição e lutar até o fim.", next: "the_fall" },
    ],
  },
  reprimand_iron: {
    text: "<p>'Recomendo que diminua o tom de voz da próxima vez que falar comigo', Ariel diz ríspida. O silêncio perturbador toma conta da sala.</p><p>Luke, o jovem bibliotecário, a acusa de não se importar com as pessoas e abandona a sala batendo a porta. A cisão na Ordem apenas antecipa o fim. Quatro anos depois, o pior acontece.</p>",
    choices: [
      { text: "Enfrentar as consequências no ano de 2004.", next: "the_fall" },
    ],
  },
  ava_help: {
    text: "<p>Ava tenta interceder, mas o medo já tomou conta do conselho. As nuvens marrons que se alastram pelo céu lá fora são um presságio claro.</p><p>A reunião termina sem uma estratégia verdadeira. Em novembro de 2004, a ilusão de segurança finalmente se despedaça.</p>",
    choices: [
      { text: "Ouvir os estrondos da invasão ao castelo.", next: "the_fall" },
    ],
  },
  the_fall: {
    text: "<p>29 de novembro de 2004. A sede inglesa, o último pilar de esperança, está em ruínas. O sangue derramado tinge de vermelho as rosas brancas do jardim.</p><p>Ariel encontra seu marido, Arthuro, deitado sem vida, com uma adaga traiçoeira perfurando seu estômago. Em meio às lágrimas, ela vê seu cunhado Chester jogado aos pés de uma árvore.</p>",
    choices: [
      {
        text: "Ir até Chester e ouvir suas últimas palavras.",
        next: "comfort_chester",
      },
      {
        text: "Deixá-lo para trás e correr para salvar seus bebês.",
        next: "run_babies",
      },
      {
        text: "Buscar a espada de Arthuro para usar na fuga.",
        next: "take_arthur_sword",
      },
    ],
  },
  take_arthur_sword: {
    text: "<p>Com mãos trêmulas, Ariel arranca a adaga do corpo do marido e pega sua espada ensanguentada. 'Perdoe-me', sussurra. A lâmina brilha uma vez — um último adeus.</p><p>Ela corre em direção ao castelo em chamas, mas um gemido a faz parar. É Chester.</p>",
    choices: [
      { text: "Socorrer o cunhado agonizante.", next: "comfort_chester" },
      { text: "Ignorá-lo e salvar os filhos primeiro.", next: "run_babies" },
    ],
  },
  comfort_chester: {
    text: "<p>'Acabou, Ariel', ele tosse. Chester entrega a ela o metal que por tanto tempo o acompanhou: sua espada. 'Dê a ele. O guiará na jornada'.</p><p>Ariel fecha os olhos do cunhado. Com instintos maternais aguçados, ela corre para os escombros do castelo para pegar os gêmeos.</p>",
    choices: [
      {
        text: "Recolher o cesto de ouro e iniciar a fuga.",
        next: "take_babies",
      },
    ],
  },
  run_babies: {
    text: "<p>O luto quase a paralisa, mas a promessa de um novo mundo brilha nos olhos de seus filhos. Ela corre para os aposentos destruídos, ignorando os chamados distantes do campo de batalha.</p><p>Ela pega os gêmeos, aninhados em toalhas de seda dentro de um cesto de ouro.</p>",
    choices: [
      {
        text: "Garantir a sobrevivência deles custe o que custar.",
        next: "take_babies",
      },
    ],
  },
  take_babies: {
    text: "<p>Ariel corre descalça pela floresta escura, com o ar frio secando sua pele molhada. Ao chegar em Londres, ela encontra a casa 12 na Lyndhurst Square.</p><p>Ela gira o símbolo da chama na maçaneta e a porta se abre. Lá dentro, a imortal Ariadne a recebe em um salão com portas flutuantes.</p>",
    choices: [
      { text: "Pedir que Ariadne cuide das crianças.", next: "ask_ariadne" },
      { text: "Pedir que ela crie um portal para Durham.", next: "use_portal" },
      {
        text: "Entregar a espada de Chester e pedir um último conselho.",
        next: "last_counsel",
      },
    ],
  },
  ask_ariadne: {
    text: "<p>'Sabe que não posso cuidar deles, aqui é um lugar de passagem', responde Ariadne, pesarosa. Ariel entende. Ela deixa a espada com a mulher e pede que os oriente quando retornarem no futuro.</p><p>Ariadne gesticula e cria um símbolo de Jano no ar, abrindo um portal laranja para o mundo humano.</p>",
    choices: [
      { text: "Atravessar o portal rumo ao sacrifício final.", next: "durham" },
    ],
  },
  use_portal: {
    text: "<p>Ariel não tem tempo. Ela confia a espada a Ariadne e pede uma passagem direta. A mulher desenha o símbolo de Jano no ar, abrindo uma porta laranja.</p><p>'Vá, mas o portal é só de ida como bem sabe. Adeus, Ariel'.</p>",
    choices: [
      {
        text: "Cruzar o portal e ir até a casa de sua meia-irmã.",
        next: "durham",
      },
    ],
  },
  last_counsel: {
    text: "<p>Ariadne olha para a espada e para os bebês. 'Guardarei isto até que eles retornem. A profecia os aguarda, mas o caminho será deles para escolher.' Ariel guarda as palavras no coração, sem entender por completo.</p><p>Ela atravessa o portal para Durham com um novo peso na alma.</p>",
    choices: [{ text: "Seguir para a casa de Amélia.", next: "durham" }],
  },
  durham: {
    text: "<p>Peter e James são deixados na porta de Amélia em Durham. Ariel coloca duas cartas no cesto e acaricia os pingentes de sol e lua no pescoço dos bebês. 'A mamãe ama vocês', ela sussurra, em pranto.</p><p>Passos ruidosos se aproximam da porta. Ariel sabe que os demônios a rastrearam e não há mais para onde fugir.</p>",
    choices: [
      { text: "Conjurar o feitiço de proteção final.", next: "final_stand" },
      {
        text: "Beijar os filhos pela última vez e sair correndo.",
        next: "distraction",
      },
    ],
  },
  distraction: {
    text: "<p>Ariel foge para a floresta, fazendo barulho proposital. Os demônios a seguem. A casa fica a salvo, por enquanto. Ela corre até não aguentar mais, até sentir o sopro do inferno no pescoço.</p><p>Antes de tudo escurecer, ela sorri. Seus filhos viverão.</p>",
    choices: [{ text: "Aceitar o fim da Quarta Era.", next: "ending_teaser" }],
  },
  final_stand: {
    text: "<p>Ela encosta a mão no chão: 'Ystavr tay röspata' — Que a chama os proteja. Um campo de força azul se ergue ao redor da casa.</p><p>Do outro lado da rua, um demônio de olhos completamente escuros e um sorriso sádico a aguarda. No bolso dele, repousa uma flor íris negra. Ariel corre para atraí-lo para longe da casa.</p>",
    choices: [{ text: "Aceitar o fim da Quarta Era.", next: "ending_teaser" }],
  },
  ending_teaser: {
    text: "<p>A visão de Ariel escurece para sempre. O demônio não poupa a última guardiã da Inglaterra.</p><p>Mas o sacrifício não foi em vão. Dezoito anos depois, a profecia despertará nos sangues corrompidos.</p><p>Em uma pacata cidade inglesa, dois irmãos gêmeos se preparam para completar dezoito anos. Um deles tem uma mecha de cabelo que insiste em brilhar dourada. O outro sonha com guerras que nunca lutou. O destino está prestes a bater à porta.</p>",
    choices: [
      { text: "Continuar a jornada em 'O declínio da Ordem'...", next: "end" },
    ],
  },
  the_fall_short: {
    text: "<p>Sem um plano sólido, a Ordem se fragmenta. Em novembro de 2004, os demônios invadem a sede inglesa. Ariel luta até o fim, mas é sobrepujada. O mesmo destino se repete: ela corre para salvar os gêmeos e os deixa em Durham.</p>",
    choices: [{ text: "Ver o desfecho trágico.", next: "ending_teaser" }],
  },
  end: {
    text: "<p>(Fim da introdução. A história continua nos capítulos seguintes.)</p>",
    choices: [],
  },
};
