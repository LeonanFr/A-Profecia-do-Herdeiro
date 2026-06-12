const ArchiveData = {
  sections: [
    {
      id: "cartas",
      title: "Cartas & Documentos",
      subtitle: "Correspondências e registros oficiais da Ordem",
      icon: "fas fa-scroll",
    },
    {
      id: "bestiario",
      title: "Bestiário",
      subtitle: "Criaturas e seres do outro lado",
      icon: "fas fa-dragon",
    },
    {
      id: "glossario",
      title: "Glossário",
      subtitle: "Termos, feitiços e conceitos da magia",
      icon: "fas fa-book-open",
    },
    {
      id: "reliquias",
      title: "Relíquias",
      subtitle: "Artefatos de poder e invenções",
      icon: "fas fa-ring",
    },
    {
      id: "timeline",
      title: "Linha do Tempo",
      subtitle: "Cronologia da Quarta Era",
      icon: "fas fa-hourglass-half",
    },
  ],

  documents: [
    {
      id: "ariel-letter",
      date: "Novembro de 2004",
      type: "Carta Pessoal",
      title: "A Última Carta de Ariel",
      excerpt:
        "Te entrego, em desespero, a única parte da minha vida pela qual ainda vale a pena lutar...",
      author: "Ariel Sheridan",
      fullContent: `
                <p><strong>Querida Amélia,</strong></p>
                <p>Me perdoe por ter sumido, os últimos tempos têm sido especialmente difíceis. A Ordem sucumbe, dia após dia, aos ataques dos demônios. Já não é mais seguro perambular pelo mundo dos homens, nem mesmo sair do castelo é viável.</p>
                <p>Te entrego, em desespero, a única parte da minha vida pela qual ainda vale a pena lutar. Cuide deles por mim, por favor. Garanta que leiam a outra carta aos dezoito anos, e em nenhum momento antes disso. É quando as habilidades começarão a aparecer, e os inimigos. Desculpe por jogar tanta informação e nem poder me despedir, mas são dias sombrios no nosso mundo.</p>
                <p>Adeus, irmã, sempre te amarei.</p>
            `,
    },
    {
      id: "prophecy-heir",
      date: "Era Antiga",
      type: "Profecia",
      title: "O Poema do Herdeiro",
      excerpt: "Uma criança entre mundos forjada, Por muitas eras esperada...",
      author: "Oráculo Desconhecido",
      fullContent: `
                <p><em>Fragmento recuperado das memórias do Reino Inerte.</em></p>
                <p>Uma criança entre mundos forjada<br>
                Por muitas eras esperada<br>
                Nasce do fogo que queima ancestral<br>
                Para a glória eterna, na batalha crucial</p>
                <p>A profecia original se perdeu com o tempo, escondida além do perigoso Bosque de Hedonê, nas Planícies de Prata. Este pequeno poema é tudo o que restou na memória dos Guardiões, a fagulha que manteve a última sede de pé.</p>
            `,
    },
    {
      id: "fall-report",
      date: "Dezembro de 2004",
      type: "Registro de Deliberação",
      title: "O Fim da Quarta Era",
      excerpt:
        "Não enviaremos mais resgates. Acolheremos os sobreviventes que alcançarem nossas defesas, mas a Sede Brasileira não marchará para a morte.",
      author: "Miguel, Líder da Sede Brasileira",
      fullContent: `
        <h3>PRONUNCIAMENTO AO CONSELHO</h3>
        <p>Irmãos, a notícia que temíamos foi confirmada ao amanhecer. O castelo ao sul de Londres sucumbiu. Ariel Sheridan lutou até o último instante, mas as abominações que marcharam contra a Sede Inglesa superaram qualquer defesa descrita em nossos grimórios.</p>
        <p>O que presenciamos não é uma batalha perdida, mas o fim da nossa Era. Nova Iorque foi asfixiada sem suprimentos, Paris caiu antes que pudéssemos reagir, e agora o feitiço que conectava as grandes casas se apagou. Restou apenas a Sede Brasileira. Apenas o nosso Cristal de Pura Magia ainda mantém a escuridão do lado de fora.</p>
        <p>É com o peso dessa realidade que estabeleço nossa nova e definitiva diretriz. Nossas portas permanecerão abertas para os refugiados e irmãos que conseguirem alcançar nossas fronteiras — não daremos as costas aos que buscam abrigo. No entanto, proíbo terminantemente o envio de qualquer guardião ou esquadrão de auxílio para o exterior. Não dispersaremos as poucas forças que nos restam.</p>
        <p>Assumo a responsabilidade por esta decisão. A Ordem precisa que este último bastião permaneça de pé a qualquer custo. Que a Chama ilumine a alma dos que caíram, e que o Fogo nos julgue com justiça pelas escolhas de hoje.</p>
      `,
    },
  ],

  bestiary: [
    {
      category: "Criaturas do Submundo",
      description: "Seres forjados pelo Tártaro e pela magia selvagem.",
      creatures: [
        {
          id: "empusa",
          name: "Empusa",
          imageUrl: "../../assets/images/empusa.png",
          symbol: "fas fa-skull",
          description:
            "Monstruosidade de dois metros de altura com o rosto de uma bela mulher. Possui pernas de bode, asas afiadas de morcego e escamas. O torso é protegido por uma armadura em forma de cabeça de touro, e seus cabelos e braceletes emanam chamas. É ágil, furiosa e praticamente imune a ataques físicos comuns.",
          dangerLevel: 5,
          location: "Vales do Bosque de Hedonê",
          firstSighting: "Desconhecido",
        },
      ],
    },
    {
      category: "Seres Mágicos e Familiares",
      description:
        "Criaturas com ligação umbilical à magia ou aos seus mestres.",
      creatures: [
        {
          id: "maleagri",
          name: "Maleagri",
          symbol: "fas fa-paw",
          description:
            "Besta quadrúpede dócil ao dono, mas assustadora. Possui uma carapaça maciça, cauda enrijecida e espinhos macios na cabeça. Seus olhos minúsculos quase somem diante dos grandes dentes caninos. Empregado frequentemente por bruxas como carregador ou protetor.",
          dangerLevel: 3,
          location: "Cidade dos Sonhos Perdidos",
          firstSighting: "Eras Antigas",
        },
        {
          id: "jigue-jigue",
          name: "Jigue-Jigue",
          symbol: "fas fa-horse-head",
          description:
            "Assemelha-se a um lobo-guará, mas possui cascos no lugar de patas e uma cauda preta sem pelos. Não possui olhos; em seu lugar, ostenta uma galhada de ossos laranjas que o orienta. É invisível aos humanos e corre a velocidades sobre-humanas.",
          dangerLevel: 1,
          location: "Sede Brasileira (Utilizado como transporte)",
          firstSighting: "América do Sul",
        },
      ],
    },
    {
      category: "Espécies Livres",
      description: "Seres que habitam ou buscam as sedes por sobrevivência.",
      creatures: [
        {
          id: "zyggdons",
          name: "Zyggdons",
          symbol: "fas fa-fish",
          description:
            "Humanoides de cerca de 1,5m de altura com rostos de peixe. Possuem grandes cabeças e fios sensoriais que balançam sob o queixo. Muito prestativos e amigáveis, voluntariaram-se para cozinhar na Sede Brasileira em troca de refúgio, após perderem seus lares para o desmatamento.",
          dangerLevel: 1,
          location: "Sede Brasileira da Ordem",
          firstSighting: "Desconhecido",
        },
        {
          id: "deslizante",
          name: "Deslizante (Andarilho)",
          symbol: "fas fa-ghost",
          description:
            "Raça em extinção com aparência de orc esquelético. Seu exoesqueleto mágico toma a forma de uma capa fantasmagórica que lhes confere invisibilidade. Possuem um trágico vício natural por sangue que os torna perigosos se não controlados.",
          dangerLevel: 4,
          location: "Escondidos em dimensões paralelas",
          firstSighting: "Idade Média",
        },
      ],
    },
  ],

  glossary: [
    {
      id: "chama",
      name: "A Chama",
      symbol: "fas fa-fire",
      origin: "Conceito Primordial",
      definition:
        "A essência criadora. Deus é uma figura arcaica criada para incutir medo, mas a Chama é a própria criação. Os guardiões não são apenas produtos dela, mas são a Chama em todo seu resplendor.",
      usage: "Revüert. Justo é o Fogo.",
    },
    {
      id: "ziagvenir",
      name: "Ziagvenir",
      symbol: "fas fa-dna",
      origin: "Genética Guardiã",
      definition:
        "Uma habilidade mágica de sangue passada por gerações, que não envolve diretamente artes místicas. Pode se manifestar como sentidos aguçados, falar línguas desconhecidas ou uma maestria inata com armas.",
      usage:
        "O talento de James com a espada era prova de seu poderoso Ziagvenir, herdado da família Blake.",
    },
    {
      id: "nyag-behu",
      name: "Nyag-behu",
      symbol: "fas fa-bolt",
      origin: "Despertar Mágico",
      definition:
        "Fenômeno extremamente raro onde um guardião desenvolve um novo Ziagvenir em momentos de necessidade absoluta. É a tentativa do universo de equilibrar um mundo em caos.",
      usage:
        "A capacidade de Peter de compreender a Língua Antiga instantaneamente foi classificada como Nyag-behu.",
    },
    {
      id: "tortura-belial",
      name: "Tortura de Belial",
      symbol: "fas fa-brain",
      origin: "Magia Demoníaca",
      definition:
        "O método mais sádico de tortura demoníaca. Prende a vítima na própria mente, fragmentando sua sanidade com cenários desesperadores para extrair segredos, até deixá-la morrer de fome e sede.",
      usage: "Ninguém jamais sobreviveu à tortura de Belial. Exceto ele.",
    },
    {
      id: "sonho-faidatico",
      name: "Sonho Faidático",
      symbol: "fas fa-cloud-moon",
      origin: "Magia Psíquica",
      definition:
        "Técnica complexa e perigosa que permite a um guardião viajar pelo Reino Inerte para acessar a mente de alguém através de um sonho. Exige anos de prática e foco absoluto.",
      usage:
        "Helena arriscou sua própria sanidade ao iniciar um Sonho Faidático para encontrar Peter.",
    },
  ],

  relics: [
    {
      id: "fio-ariadne",
      name: "Fio de Ariadne",
      status: "Com o Herdeiro",
      icon: "fas fa-slash",
      description:
        "Um pequeno e simples fio dourado concedido à Princesa Ariadne eras atrás. Não apenas revela saídas, mas também destinos.",
      powers: [
        "Aponta a direção do desejo sincero de quem o segura",
        "Brilha intensamente em tom amarelo quando ativado",
        "Deixa rastros de pó mágico na estrada a seguir",
      ],
      lastKnownLocation: "Casa 12 da Lyndhurst Square",
      currentHolder: "Peter Sheridan",
      warnings:
        "Exige clareza de mente; não aponta caminhos vagos ou sentimentais.",
    },
    {
      id: "piloto-fuga",
      name: "Piloto de Fuga",
      status: "Usado",
      icon: "fas fa-fan",
      description:
        "Uma pequena bola de metal desenvolvida na década de 1950. Expande-se em hélices que transportam um guardião pelo ar rapidamente.",
      powers: [
        "Georadar embutido",
        "Voo tático automático",
        "Alcance máximo de 1 quilômetro",
      ],
      lastKnownLocation: "Sede Canadense",
      currentHolder: "Destruído após o uso",
      warnings:
        "Só suporta um passageiro; o percurso pode causar intensas náuseas e medo de altura.",
    },
    {
      id: "espada-blake",
      name: "Espada dos Blake",
      status: "Ativa",
      icon: "fas fa-khanda",
      description:
        "Lâmina forjada com o fogo dos antigos dragões e finalizada com um rubi no cabo contendo um pequeno B em grafia arcaica. Fria ao toque, mas esquenta ao reconhecer o dono.",
      powers: [
        "Luminosidade amarela pulsante",
        "Absurdamente leve para quem tem o sangue da família",
        "Resistência dracônica",
      ],
      lastKnownLocation: "Casa 12 da Lyndhurst Square",
      currentHolder: "James Blake",
      warnings:
        "Possui um encanto de sangue; inútil e pesada para quem não for da linhagem.",
    },
    {
      id: "orbe-viagem",
      name: "Orbe de Viagem Élfico",
      status: "Usado",
      icon: "fas fa-globe",
      description:
        "Esfera vermelha como sangue com uma estrutura de metal. No centro, uma flor rosa gira infinitamente. Utilizada para saltos interdimensionais precisos.",
      powers: [
        "Abertura de fendas espaciais em formato de X",
        "Transposição de barreiras mágicas primitivas",
      ],
      lastKnownLocation: "Loja dos Sete Mundos",
      currentHolder: "Destruído",
      warnings:
        "O salto causa grave desorientação e a sensação do corpo se refazendo.",
    },
  ],

  timeline: [
    {
      id: "era-um",
      date: "Primeira Era",
      title: "A Era do Medo",
      description:
        "O despertar dos Guardiões. Criados em um tempo de trevas, enfrentaram males ancestrais e criaturas terríveis que ameaçavam a existência da humanidade em seus primórdios.",
      tags: ["Criação", "Origens"],
    },
    {
      id: "era-dois",
      date: "Segunda Era",
      title: "A Era da Harmonia",
      description:
        "Um período de paz idílica onde humanos e anjos caminhavam lado a lado. Antes da corrupção, antes do ódio; uma era de luz que se tornou o padrão ouro de memória para todos os Guardiões.",
      tags: ["Paz", "Harmonia"],
    },
    {
      id: "era-tres",
      date: "Terceira Era",
      title: "A Era da Destruição",
      description:
        "O nascimento dos demônios. Anjos corrompidos pelo orgulho, raiva e medo rebelaram-se, trazendo caos e devastação implacável sobre a humanidade, que quase foi extinta.",
      tags: ["Demônios", "Rebelião"],
    },
    {
      id: "era-quatro",
      date: "Quarta Era",
      title: "A Era do Controle",
      description:
        "O triunfo da Ordem através do grande feitiço de proteção. O ataque aos humanos foi freado, estabelecendo uma frágil segurança que perdurou por séculos sob a vigília das sedes.",
      tags: ["Feitiço", "Controle"],
    },
    {
      id: "era-cinco",
      date: "Quinta Era",
      title: "A Era da Queda (Atual)",
      description:
        "O domínio demoníaco se concretiza. A Ordem dos Guardiões encontra-se desmantelada, com poucas sedes sobreviventes em um mundo onde as barreiras foram rompidas e a escuridão avança.",
      tags: ["Atualidade", "Ruína"],
    },
  ],
};
