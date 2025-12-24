// archive-data.js - Dados completos para a página ARQUIVO

const ArchiveData = {
    // Navegação principal (SEM ÍCONES nas abas)
    sections: [
        {
            id: "cartas",
            title: "Cartas & Documentos",
            subtitle: "Correspondências, diários e registros oficiais da Ordem"
        },
        {
            id: "bestiario",
            title: "Bestiário",
            subtitle: "Criaturas, entidades e seres do outro lado"
        },
        {
            id: "glossario",
            title: "Glossário",
            subtitle: "Termos, sigilos e conceitos da magia"
        },
        {
            id: "reliquias",
            title: "Relíquias",
            subtitle: "Artefatos de poder incomensurável"
        },
        {
            id: "timeline",
            title: "Linha do Tempo",
            subtitle: "Cronologia dos eventos do universo"
        }
    ],

    // Cartas & Documentos
    documents: [
        {
            id: "elijah-letter",
            date: "12 de Março, 1893",
            type: "Carta Pessoal",
            title: "Carta de Elijah para seu irmão",
            excerpt: "Irmão, o que descobri na Torre de Avalon vai além da compreensão humana. Os símbolos não são apenas escritos, são portas. E alguém está tentando abri-las...",
            author: "Elijah Vance",
            fullContent: `
                <p><strong>Querido irmão,</strong></p>
                <p>Espero que esta carta o encontre em segurança. As descobertas que fiz na Torre de Avalon ultrapassam tudo o que imaginávamos sobre a natureza da realidade.</p>
                <p>Os símbolos nas paredes não são meras inscrições - são portais. Cada curva, cada linha, forma um padrão que ressoa com energias primordiais. E há evidências de que alguém, ou algo, tem tentado ativá-los.</p>
                <p>Encontrei câmaras ocultas que desafiam as leis da física. Salas que parecem existir em múltiplas dimensões simultaneamente. E pior: registros de experimentos feitos por membros antigos da Ordem, tentando cruzar o Limiar.</p>
                <p>Alguns desapareceram. Outros retornaram... mudados. Falavam em vozes que não eram as deles, com conhecimentos que não deveriam possuir.</p>
                <p>Estou enviando cópias dos meus esboços e anotações por um mensageiro de confiança. Guarde-os com sua vida. Se algo me acontecer, continue a investigação, mas cuidado. Há forças aqui que não compreendemos.</p>
                <p>O Limiar não é apenas uma metáfora, irmão. É real. E está se tornando mais fino a cada dia.</p>
                <p>Com preocupação,</p>
                <p><strong>Elijah</strong></p>
            `
        },
        {
            id: "whispers-report",
            date: "3 de Novembro, 1901",
            type: "Relatório Oficial",
            title: "Relatório do Incidente na Floresta dos Sussurros",
            excerpt: "A expedição nº 47 foi considerada perdida. Dos 12 membros, apenas o Sr. Abernathy retornou, mas suas memórias foram... consumidas.",
            author: "Capitão Reginald Thorne",
            fullContent: `
                <h3>RELATÓRIO DE INCIDENTE - EXPEDIÇÃO Nº 47</h3>
                <p><strong>Local:</strong> Floresta dos Sussurros, região norte</p>
                <p><strong>Data do Incidente:</strong> 15-28 de Outubro, 1901</p>
                <p><strong>Equipe:</strong> 12 membros (listados no Anexo A)</p>
                
                <h4>RESUMO EXECUTIVO</h4>
                <p>A expedição foi enviada para investigar anomalias relatadas na região conhecida como Floresta dos Sussurros. De acordo com relatos locais, a floresta "fala" e "lembra" aqueles que a atravessam.</p>
                
                <h4>EVENTOS</h4>
                <p><strong>Dia 1-3:</strong> Progresso normal. A equipe estabeleceu acampamento base.</p>
                <p><strong>Dia 4:</strong> Primeiros relatos de "sussurros". Membros reportaram ouvir vozes que ecoavam seus pensamentos mais íntimos.</p>
                <p><strong>Dia 5-6:</strong> Dois membros desapareceram durante a noite. Buscas não localizaram vestígios.</p>
                <p><strong>Dia 7:</strong> Restante da equipe começou a mostrar sinais de paranoia severa. Relatos de "sombras que se moviam contra o vento".</p>
                <p><strong>Dia 8-10:</strong> Comunicação perdida.</p>
                <p><strong>Dia 11:</strong> Apenas o Sr. Alistair Abernathy retornou ao acampamento base.</p>
                
                <h4>CONDIÇÃO DO SOBREVIVENTE</h4>
                <p>Sr. Abernathy apresentava:</p>
                <ul>
                    <li>Falta de memória dos eventos dos últimos 4 dias</li>
                    <li>Padrões de fala desconexos, alternando entre 3 idiomas antigos não registrados</li>
                    <li>Tatuagens simbólicas aparecendo em sua pele que não estavam presentes anteriormente</li>
                    <li>Capacidade de recitar passagens de livros que nunca leu</li>
                </ul>
                
                <h4>CONCLUSÃO</h4>
                <p>A Floresta dos Sussurros apresenta perigo de nível A (Extremo). Recomenda-se quarentena da região e classificação do incidente como <strong>CONFIDENCIAL - NÍVEL 9</strong>.</p>
                
                <p><strong>Capitão Reginald Thorne</strong><br>
                Comandante, Unidade de Investigação Paranormal</p>
            `
        },
        {
            id: "guardian-diary",
            date: "Desconhecida (século XIX)",
            type: "Diário Pessoal",
            title: "Diário de um Guardião Anônimo",
            excerpt: "O Limiar não é um lugar, mas um estado de ser. Cruzá-lo não requer movimento físico, mas uma entrega total daquilo que nos define como humanos...",
            author: "Guardião Desconhecido",
            fullContent: `
                <p><em>Anotações fragmentadas recuperadas das ruínas da Torre Oeste</em></p>
                
                <p><strong>Entrada 47:</strong> Hoje completei trinta anos como Guardião. Trinta anos vigiando o Limiar. Ainda me pergunto se estamos certos em mantê-lo fechado.</p>
                
                <p><strong>Entrada 48:</strong> Os Novatos perguntam sempre: "O que há do outro lado?". Respondo que não sei. Mentira. Vi, uma vez. Durante o Eclipse da Alma, quando o Véu se torna tão fino que quase desaparece.</p>
                
                <p><strong>Entrada 49:</strong> Do outro lado não há lugares, apenas estados. Emoções puras. Memórias não vividas. Possibilidades descartadas. É como se toda escolha que não fizéssemos ganhasse vida própria lá.</p>
                
                <p><strong>Entrada 50:</strong> Peter veio hoje. O garoto tem o Dom, mas não o controle. Vejo nele o mesmo brilho que vi em Elijah, anos atrás. Rezei para que seu destino fosse diferente.</p>
                
                <p><strong>Entrada 51:</strong> Os Sussurrantes estão mais ativos. Eles sentem quando o Limiar está instável. Quando Peter está próximo, as barreiras tremem. Ele não percebe, mas carrega uma chave dentro de si.</p>
                
                <p><strong>Entrada 52:</strong> Sonhei com o Abismo novamente. Ele não consome, apenas transforma. O que você é se torna o que você poderia ter sido. Uma versão invertida de si mesmo.</p>
                
                <p><strong>Entrada 53:</strong> A Ordem discute se devemos fortalecer os selos ou estudar formas de atravessar com segurança. Os anciões temem, os jovens curiosos. Ambos têm razão.</p>
                
                <p><strong>Entrada 54:</strong> Hoje senti o Limitar respirar. Sim, respirar. Como um organismo vivo. E em sua respiração, sussurros de verdades que não deveriam ser conhecidas.</p>
                
                <p><strong>Última entrada legível:</strong> Eles estão vindo. As barreiras não vão segurar. Peter deve... [o resto está ilegível, manchado por uma substância escura]</p>
            `
        },
        {
            id: "dissent-manifesto",
            date: "7 de Julho, 1922",
            type: "Manifesto",
            title: "O Manifesto dos Dissidentes",
            excerpt: "A Ordem nos mantém na ignorância. Eles guardam o conhecimento para si, enquanto o mundo desmorona. É hora de tomar o que é nosso por direito...",
            author: "Os Dissidentes",
            fullContent: `
                <h2>MANIFESTO DA VERDADE LIVRE</h2>
                <p><strong>Povos do Limiar,</strong></p>
                
                <p>Por séculos, a chamada "Ordem dos Guardiões" tem nos oprimido com segredos. Eles escondem o conhecimento que é direito de nascença de toda a humanidade. Controlam o acesso ao Limiar como se fossem seus donos, quando na verdade são apenas porteiros.</p>
                
                <h3>NOSSAS REIVINDICAÇÕES</h3>
                
                <p><strong>1. TRANSPARÊNCIA TOTAL:</strong> Todos os arquivos, pesquisas e descobertas sobre o Limiar devem ser disponibilizados publicamente.</p>
                
                <p><strong>2. ACESSO DEMOCRÁTICO:</strong> O Limiar não pertence a uma elite. Qualquer pessoa com a vontade e capacidade deve poder estudá-lo.</p>
                
                <p><strong>3. FIM DA CENSURA:</strong> Parem de classificar como "perigoso" o conhecimento que simplesmente desafia seu controle.</p>
                
                <p><strong>4. RESTITUIÇÃO:</strong> Devolvam as relíquias tomadas de civilizações antigas. Elas não são "protegidas", são roubadas.</p>
                
                <h3>NOSSA VISÃO</h3>
                
                <p>Imaginamos um mundo onde o conhecimento do Limiar seja usado para curar, não para esconder. Para unir, não para dividir. Para elevar a humanidade, não para controlá-la.</p>
                
                <p>Os Guardiões falam de "perigo" e "precaução". Nós vemos medo. Medo de perder o poder. Medo de que, quando todos souberem a verdade, seu papel se torne obsoleto.</p>
                
                <h3>CHAMADO À AÇÃO</h3>
                
                <p>Aos membros da Ordem: juntem-se a nós. Vocês não são guardiões, são prisioneiros do mesmo sistema que nos oprime.</p>
                
                <p>Ao povo: exijam a verdade. O conhecimento é poder, e esse poder pertence a todos nós.</p>
                
                <p><strong>O Limiar é de todos!</strong><br>
                <strong>A verdade será livre!</strong></p>
                
                <p><em>Assinado,<br>
                Os Dissidentes<br>
                Alistair Finch, Cassandra Vance, Marcus Thorne e outros</em></p>
                
                <p class="note">Nota: Este manifesto foi encontrado afixado nas portas da Biblioteca Central da Ordem. Todos os signatários foram declarados "renunciados" pela Ordem no dia seguinte.</p>
            `
        },
        {
            id: "prophecy-scroll",
            date: "Antes da Era Comum",
            type: "Profecia Antiga",
            title: "O Pergaminho das Duas Chaves",
            excerpt: "Quando o sangue dividido encontrar sua sombra, o Véu se rasgará. Dois se tornarão um, e um se tornará a porta...",
            author: "Profeta Desconhecido",
            fullContent: `
                <div class="ancient-text">
                    <p><em>Tradução do texto antigo encontrado nas Catacumbas de Avalon</em></p>
                    
                    <h3>PROFECIA DAS DUAS CHAVES</h3>
                    
                    <p>No tempo em que as estrelas sangrarem no céu do norte,</p>
                    <p>Quando a lua vestir o manto do sol por três dias,</p>
                    <p>Nascidos do mesmo sangue, criados em sombras diferentes,</p>
                    <p>Encontrarão um ao outro no lugar do esquecimento.</p>
                    
                    <p>Um carrega a Chave do Conhecimento,</p>
                    <p>Outro carrega a Chave do Sacrifício,</p>
                    <p>Juntos podem abrir o caminho,</p>
                    <p>Separados só trarão a ruína.</p>
                    
                    <p>A Torre vigiará, a Floresta sussurrará,</p>
                    <p>A Cidade ferida sangrará,</p>
                    <p>No Deserto, a memória morrerá,</p>
                    <p>Nas Ilhas, o destino se decidirá.</p>
                    
                    <p>Quando irmão enfrentar irmão,</p>
                    <p>E o amor for confundido com dever,</p>
                    <p>O Limiar se abrirá,</p>
                    <p>Para um novo amanhecer ou um eterno anoitecer.</p>
                    
                    <p>Escolham com sabedoria,</p>
                    <p>Pois o caminho de volta se perderá,</p>
                    <p>E aqueles que cruzarem,</p>
                    <p>Jamais serão os mesmos.</p>
                </div>
                
                <div class="analysis">
                    <h4>ANÁLISE DO CONSELHO DOS ANCIÕES</h4>
                    <p>Esta profecia é citada frequentemente em relação aos eventos atuais. A referência a "sangue dividido" e "dois se tornando um" sugere uma união ou reconciliação entre forças opostas.</p>
                    
                    <p><strong>Interpretação predominante:</strong> Peter e James, como representantes dos dois lados do mesmo sangue (herança de Elijah), devem unir-se para evitar uma catástrofe.</p>
                    
                    <p><strong>Aviso:</strong> A profecia é ambígua sobre o resultado. "Novo amanhecer" ou "eterno anoitecer" sugerem que o resultado depende de escolhas a serem feitas.</p>
                </div>
            `
        },
        {
            id: "research-notes",
            date: "10 de Janeiro, 1910",
            type: "Notas de Pesquisa",
            title: "Experimentos com o Véu",
            excerpt: "Os resultados do Experimento 23 confirmam: o Véu responde às emoções humanas. Medo o enfraquece, amor o fortalece...",
            author: "Dra. Evelyn Vance",
            fullContent: `
                <h3>NOTAS DE PESQUISA - PROJETO VÉU</h3>
                <p><strong>Pesquisadora Principal:</strong> Dra. Evelyn Vance</p>
                <p><strong>Assistentes:</strong> Dr. Reginald Thorne, Alistair Finch</p>
                <p><strong>Local:</strong> Laboratório Subterrâneo, Torre de Avalon</p>
                
                <h4>EXPERIMENTO 23: RESPOSTA EMOCIONAL</h4>
                
                <p><strong>Hipótese:</strong> O Véu entre as realidades não é apenas uma barreira física, mas responde a estados emocionais humanos.</p>
                
                <p><strong>Metodologia:</strong> Expusemos seções controladas do Véu a voluntários induzidos a estados emocionais específicos, medindo a flutuação energética.</p>
                
                <p><strong>Resultados:</strong></p>
                <ul>
                    <li><strong>Medo/Raiva:</strong> Enfraquece o Véu em 30-40%. Cria "rachaduras" temporárias.</li>
                    <li><strong>Alegria/Amor:</strong> Fortalece o Véu em 20-25%. Sela microfissuras.</li>
                    <li><strong>Tristeza/Luto:</strong> Efeito neutro, mas atrai Entidades dos Sussurros.</li>
                    <li><strong>Curiosidade/Espanto:</strong> Cria ressonância, permitindo "vislumbres" sem enfraquecimento.</li>
                </ul>
                
                <h4>IMPLICAÇÕES</h4>
                
                <p>1. As emoções humanas coletivas podem estar afetando a estabilidade global do Limiar.</p>
                <p>2. Períodos de guerra/conflito podem explicar os "surto de atividade paranormal" históricos.</p>
                <p>3. Técnicas de meditação/controle emocional podem ser ferramentas válidas para fortalecimento do Véu.</p>
                
                <h4>EXPERIMENTO 24 PROPOSTO</h4>
                
                <p>Testar se estados emocionais sincronizados (grupos meditando juntos) têm efeito amplificado.</p>
                
                <p><strong>AVISO ÉTICO:</strong> Os Experimentos 19-22 mostraram efeitos colaterais graves em voluntários. Recomendo pausar testes com seres humanos até desenvolvimento de proteções mais robustas.</p>
                
                <p><em>Nota do Conselho:</em> Pesquisa suspensa indefinidamente após incidente no Experimento 25. Dra. Vance transferida para pesquisa teórica.</p>
            `
        }
    ],

    // Bestiário
    bestiary: [
        {
            category: "Os Observadores",
            description: "Entidades que testemunham sem interferir... ou assim parecem.",
            creatures: [
                {
                    id: "whisperers",
                    name: "Os Sussurrantes",
                    symbol: "whisper",
                    description: "Humanoides esguios e pálidos que habitam a Floresta dos Sussurros. Não possuem boca física, mas comunicam-se implantando pensamentos diretamente na mente da presa. Alimentam-se de memórias felizes, deixando apenas traumas e medos. Movem-se silenciosamente entre as árvores, sempre observando, sempre aprendendo.",
                    dangerLevel: 2,
                    location: "Floresta dos Sussurros",
                    firstSighting: "1901",
                    behavior: "Passivo até provocado. Atraídos por emoções fortes. Coletam memórias como forma de compreender a existência mortal.",
                    weaknesses: "Luz intensa, sons harmônicos, memórias de perda (as repelem)"
                },
                {
                    id: "watchers",
                    name: "Os Vigias Sem Rosto",
                    symbol: "watch",
                    description: "Entidades estáticas encontradas em locais de poder antigo. Aparecem como estátuas humanoides sem características faciais, mas giram lentamente para seguir qualquer movimento em seu raio de visão. Não interagem, apenas observam. Acreditava-se serem artefatos até o Incidente de 1887, quando uma delas desapareceu e reapareceu 50km distante, ainda observando o mesmo ponto.",
                    dangerLevel: 1,
                    location: "Torre de Avalon, Ruínas Antigas",
                    firstSighting: "1887",
                    behavior: "Completamente imóveis exceto para acompanhar movimento. Propósito desconhecido.",
                    weaknesses: "Nenhuma conhecida. Tentativas de destruição resultam no reaparecimento do Vigia intacto"
                }
            ]
        },
        {
            category: "Os Devoradores",
            description: "Seres que consomem aspectos da realidade ou da existência.",
            creatures: [
                {
                    id: "memory-eaters",
                    name: "Devoradores de Memória",
                    symbol: "memory",
                    description: "Formas ameboides translúcidas que habitam o Abismo das Almas. Flutuam silenciosamente, detectando e extraindo memórias específicas de seres conscientes. O processo é descrito como doloroso, deixando o alvo com uma 'sensação de vazio' onde a memória estava. Podem ser direcionados para memórias específicas com treinamento adequado.",
                    dangerLevel: 4,
                    location: "Abismo das Almas",
                    firstSighting: "1910",
                    behavior: "Atraídos por atividade mental intensa. Podem ser controlados por indivíduos com forte vontade.",
                    weaknesses: "Estados mentais meditativos (tornam memórias inacessíveis), certas frequências sonoras"
                },
                {
                    id: "shadow-drinkers",
                    name: "Bebedores de Sombras",
                    symbol: "shadow",
                    description: "Predadores noturnos que se alimentam de sombras literais. Em áreas iluminadas, são invisíveis. Na escuridão, aparecem como silhuetas humanoides distorcidas. A vítima perde sua sombra primeiro, depois seu reflexo, finalmente sua presença na memória de outros. O processo leva aproximadamente 3 dias.",
                    dangerLevel: 5,
                    location: "Biblioteca das Sombras, áreas de escuridão perpetua",
                    firstSighting: "1895",
                    behavior: "Caçam em silêncio absoluto. Evitam luz direta. Ataques aumentam durante luas novas.",
                    weaknesses: "Luz solar direta, espelhos (mostram sua verdadeira forma), ser lembrado por nome"
                }
            ]
        },
        {
            category: "Os Transformadores",
            description: "Entidades que alteram a realidade ou a percepção da mesma.",
            creatures: [
                {
                    id: "reality-weavers",
                    name: "Tecelões da Realidade",
                    symbol: "weave",
                    description: "Seres dimensionais que 'consertam' rasgos no tecido da realidade. Aparecem como constelações de pontos de luz que tecem padrões complexos no ar. Seu trabalho é fundamental para a estabilidade do Limiar, mas sua compreensão da realidade difere radicalmente da humana - podem 'consertar' uma pessoa removendo memórias traumáticas ou mesmo partes de sua personalidade.",
                    dangerLevel: 3,
                    location: "Portal Esquecido, áreas de instabilidade dimensional",
                    firstSighting: "1920",
                    behavior: "Não-hostis, mas perigosamente utilitários. Seguem lógica não-humana.",
                    weaknesses: "Matemática avançada (os distrai), paradoxos lógicos (os confundem)"
                },
                {
                    id: "echo-ghosts",
                    name: "Ecos de Possibilidades",
                    symbol: "echo",
                    description: "Não são fantasmas no sentido tradicional, mas ecos de vidas não vividas, escolhas não feitas. Aparecem como versões translúcidas de pessoas vivas, executando ações que poderiam ter feito. Alguns são inofensivos, outros tentam 'corrigir' sua não-existência substituindo a pessoa real.",
                    dangerLevel: 2,
                    location: "Cruzamentos dimensionais, locais de escolhas importantes",
                    firstSighting: "1915",
                    behavior: "Variável. Alguns são passivos, outros interagem, poucos são hostis.",
                    weaknesses: "Tomada de decisão firme (os dissipa), reconhecimento de sua natureza ilusória"
                }
            ]
        }
    ],

    // Glossário
    glossary: [
        {
            id: "limiar",
            name: "O Limiar",
            symbol: "threshold",
            origin: "Latim: 'limen' - limite, entrada",
            definition: "A fronteira entre a realidade conhecida e as infinitas possibilidades do não-manifestado. Não é um lugar físico, mas um estado de existência que permeia todas as coisas. Pode ser atravessado, mas nunca dominado.",
            usage: "'Cruzar o Limiar exige mais do que coragem - exige a aceitação de que você nunca mais será o mesmo.' - Guardião Anônimo"
        },
        {
            id: "chave",
            name: "A Chave",
            symbol: "key",
            origin: "Desconhecida, anterior à linguagem humana registrada",
            definition: "Um conceito, objeto ou pessoa que permite a travessia controlada do Limiar. Existem múltiplas Chaves, cada uma operando em diferentes 'fechaduras' dimensionais. Algumas são físicas, outras são estados mentais ou emocionais.",
            usage: "Peter descobriu que a primeira Chave não era um objeto, mas uma memória específica de sua infância."
        },
        {
            id: "ordem",
            name: "A Ordem",
            symbol: "order",
            origin: "Latim: 'ordo' - organização, sequência",
            definition: "Organização secreta fundada no século XVI para estudar, mapear e, quando necessário, proteger a humanidade das realidades além do Limiar. Operam sob estrito sigilo, mantendo equilíbrio entre conhecimento e segurança.",
            usage: "A Ordem mantém arquivos de cada evento paranormal documentado desde 1563."
        },
        {
            id: "véu",
            name: "O Véu",
            symbol: "veil",
            origin: "Persa Antigo via latim medieval",
            definition: "A barreira perceptual que separa a consciência humana comum das realidades mais amplas. Pode ser afinado, rasgado ou atravessado, mas nunca removido completamente sem consequências catastróficas.",
            usage: "Durante o Eclipse da Alma, o Véu se torna tão fino que mesmo pessoas sem treinamento podem ter vislumbres do outro lado."
        },
        {
            id: "sussurrante",
            name: "Sussurrante",
            symbol: "whisper",
            origin: "Termo moderno cunhado após incidente de 1901",
            definition: "1. Entidade que habita a Floresta dos Sussurros. 2. Qualquer ser que se comunique através de implantes mentais em vez de fala audível. 3. Coloquialmente, membro da Ordem que estuda comunicação não-verbal.",
            usage: "Os Sussurrantes não falam - eles fazem você ouvir seus próprios pensamentos mais profundos, reformulados."
        },
        {
            id: "abismo",
            name: "O Abismo",
            symbol: "abyss",
            origin: "Grego: 'ábyssos' - sem fundo",
            definition: "1. Local físico onde o Limiar é particularmente fino e instável. 2. Estado psicológico resultante da exposição prolongada a realidades não-humanas. 3. O vazio entre possibilidades que nunca se manifestaram.",
            usage: "Olhar muito tempo para o Abismo faz com que o Abismo olhe de volta - e às vezes, ele decide seguir você de volta."
        }
    ],

    // Relíquias
    relics: [
        {
            id: "mirror",
            name: "Espelho das Almas Perdidas",
            status: "Perdido",
            icon: "fas fa-gem",
            description: "Artefato de origem desconhecida, anterior à civilização humana registrada. Sua superfície não reflete a aparência, mas a essência - mostrando não como você parece, mas como você é percebido por outros, por si mesmo, e como poderia ter sido em diferentes caminhos de vida.",
            powers: [
                "Revela verdades psicológicas profundas",
                "Mostra versões alternativas de si mesmo",
                "Pode armazenar e projetar memórias",
                "Comunica-se com reflexos em outros espelhos"
            ],
            lastKnownLocation: "Torre de Avalon (antes do colapso de 1895)",
            currentHolder: "Desconhecido",
            warnings: "Exposição prolongada pode causar dissociação identitária ou fusão com versões alternativas"
        },
        {
            id: "dagger",
            name: "Adaga do Juramento Quebrado",
            status: "Em posse da Ordem",
            icon: "fas fa-dagger",
            description: "Criada durante o Grande Cisma de 1723, esta adaga é forjada de um metal que não existe na tabela periódica. Não causa feridas físicas, mas corta promessas, votos e juramentos. Cada uso deixa uma cicatriz na alma tanto do usuário quanto do alvo.",
            powers: [
                "Anula juramentos mágicos e mundanos",
                "Corta ligações kármicas",
                "Liberta de votos feitos sob coação",
                "Armazena memória de cada promessa quebrada"
            ],
            lastKnownLocation: "Cofre Principal, Sede Central da Ordem",
            currentHolder: "Arquivo-Mor Alistair Finch",
            warnings: "Uso repetido corrói a própria capacidade do usuário de fazer promessas"
        },
        {
            id: "hourglass",
            name: "Ampulheta do Tempo Rasgado",
            status: "Desconhecido",
            icon: "fas fa-hourglass",
            description: "Relíquia que flui ao contrário. Quando virada, faz com que a areia suba em vez de descer. Observadores relatam experimentar memórias do futuro ou esquecer eventos passados próximos à relíquia. O mecanismo interno desafia leis físicas conhecidas.",
            powers: [
                "Inverte fluxo temporal localizado",
                "Permite vislumbres de futuros potenciais",
                "Apaga memórias recentes",
                "Pode 'congelar' momentos específicos"
            ],
            lastKnownLocation: "Laboratório de Pesquisa Temporal (fechado em 1912)",
            currentHolder: "Desapareceu durante experimento 47",
            warnings: "Exposição causa desordens de memória e percepção temporal"
        },
        {
            id: "book",
            name: "O Livro das Páginas em Branco",
            status: "Perdido",
            icon: "fas fa-book-dead",
            description: "Tomo antigo com capa de pele não identificada. As páginas aparecem em branco até que alguém com 'Visão Verdadeira' as observe. Então, escrevem-se com a história do observador - não como aconteceu, mas como poderia ter acontecido. Cada leitura produz uma narrativa diferente.",
            powers: [
                "Revela caminhos de vida alternativos",
                "Mostra consequências de escolhas não feitas",
                "Armazena infinitas histórias potenciais",
                "Pode reescrever memórias sob condições específicas"
            ],
            lastKnownLocation: "Biblioteca das Sombras (antes de seu fechamento)",
            currentHolder: "Roubado por Dissidentes em 1922",
            warnings: "Leitura prolongada pode fazer com que histórias alternativas se tornem memórias 'reais'"
        },
        {
            id: "lantern",
            name: "Lanterna das Sombras que Falam",
            status: "Em posse da Ordem",
            icon: "fas fa-lightbulb",
            description: "Lanterna de bronze antigo que não emite luz, mas sim sombras conscientes. Quando acesa, suas sombras ganham vida própria, contando histórias, segredos e verdades que a luz comum esconderia. Cada sombra é única e parece ter memória própria.",
            powers: [
                "Ilumina verdades ocultas",
                "Faz sombras falarem segredos",
                "Revela mensagens escritas em luz negra",
                "Pode armazenar informações em sombras"
            ],
            lastKnownLocation: "Sala de Interrogação, Sede da Ordem",
            currentHolder: "Inquisidor-Chefe Marcus Thorne",
            warnings: "As sombras ocasionalmente mentem ou contam verdades que não deveriam ser conhecidas"
        }
    ],

    // Linha do Tempo
    timeline: [
        {
            id: "founding",
            date: "1563",
            title: "Fundação da Ordem",
            description: "Um grupo de estudiosos, místicos e cientistas reúne-se secretamente após uma série de eventos paranormais na Europa. Estabelecem os primeiros protocolos para estudo seguro do Limiar.",
            tags: ["Fundação", "Ordem"],
            significance: "Estabelece estrutura organizacional que perduraria por séculos"
        },
        {
            id: "first-breach",
            date: "1789",
            title: "Primeira Brecha Registrada",
            description: "Durante a Revolução Francesa, uma 'rachadura' no Limiar aparece em Paris. A Ordem contém o incidente, mas não antes que várias Entidades escapassem. O evento é camuflado como 'histeria coletiva'.",
            tags: ["Brecha", "Incidente"],
            significance: "Primeira evidência documentada de que eventos históricos humanos afetam a estabilidade do Limiar"
        },
        {
            id: "tower-discovery",
            date: "1887",
            title: "Descoberta da Torre de Avalon",
            description: "Expedição liderada por Elijah Vance localiza a lendária Torre de Avalon, anteriormente considerada mitológica. A torre contém arquivos e artefatos que revolucionam o entendimento da Ordem sobre o Limiar.",
            tags: ["Descoberta", "Torre", "Elijah Vance"],
            significance: "Expansão massiva do conhecimento sobre o Limiar; início da 'Era de Ouro' da pesquisa"
        },
        {
            id: "whispers-incident",
            date: "1901",
            title: "Incidente da Floresta dos Sussurros",
            description: "Expedição à recém-descoberta Floresta dos Sussurros termina em tragédia. Apenas um sobrevivente retorna, mudado irrevogavelmente. A floresta é colocada em quarentena permanente.",
            tags: ["Incidente", "Floresta", "Tragédia"],
            significance: "Leva ao estabelecimento de protocolos de segurança mais rigorosos"
        },
        {
            id: "schism",
            date: "1922",
            title: "O Grande Cisma",
            description: "Divisão interna na Ordem entre os 'Guardiões' (que defendem contenção) e os 'Dissidentes' (que defendem exploração aberta). Vários membros proeminentes, incluindo o Arquivo-Mor Alistair Finch, renunciam.",
            tags: ["Conflito", "Divisão", "Dissidentes"],
            significance: "Enfraquece significativamente a Ordem; conhecimento valioso é perdido ou roubado"
        },
        {
            id: "modern-era",
            date: "Atualidade",
            title: "Era Moderna do Limiar",
            description: "Com o surgimento de indivíduos como Peter e James, o Limiar mostra sinais de atividade sem precedentes. A Ordem, ainda se recuperando do Cisma, luta para manter o equilíbrio enquanto novas ameaças e possibilidades emergem.",
            tags: ["Atualidade", "Transição"],
            significance: "Período de mudança radical; o futuro do Limiar e da humanidade está em jogo"
        }
    ]
};