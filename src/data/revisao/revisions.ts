export type RevisionTopic = {
  id: string;
  icon: string;
  title: string;
  items: string[];
};

export type RevisionChapter = {
  id: number;
  title: string;
  estimatedTime: string;
  topics: RevisionTopic[];
};

export const revisions: RevisionChapter[] = [
  {
    id: 1,
    title: "Capítulo 1",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "Bênçãos espirituais em Cristo e oração pela sabedoria e conhecimento dos efésios.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Timóteo (implícito como servo)", "Deus Pai", "Jesus Cristo", "Espírito Santo", "Igreja (santos em Éfeso)"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Paulo saúda os santos em Éfeso e fiéis em Cristo Jesus (v.1-2)",
          "Listagem das bênçãos espirituais: eleição, adoção, redenção, perdão, herança (v.3-14)",
          "O Espírito Santo é dado como selo e penhor da herança (v.13-14)",
          "Paulo ora para que os efésios recebam espírito de sabedoria e revelação no conhecimento de Deus (v.17-19)",
          "Declaração do poder de Deus que ressuscitou e exaltou Cristo acima de todo principado e potestade (v.20-22)",
          "Cristo é declarado cabeça sobre todas as coisas para a Igreja, que é seu corpo (v.22-23)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 1:3 — Bendito o Deus e Pai de nosso Senhor Jesus Cristo, que nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo.",
          "Efésios 1:7 — Nele temos a redenção pelo seu sangue, a remissão das ofensas, segundo as riquezas da sua graça.",
          "Efésios 1:13-14 — O Espírito Santo como selo e penhor da herança.",
          "Efésios 1:22-23 — Cristo, cabeça de todas as coisas para a Igreja, que é o seu corpo.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "O Espírito Santo é o 'penhor' (garantia) da herança dos crentes.",
          "Cristo foi exaltado acima de todo principado, potestade, poder e domínio.",
          "A Igreja é descrita como o 'corpo' de Cristo e Cristo como a 'cabeça'.",
          "As bênçãos espirituais estão nos 'lugares celestiais em Cristo'.",
          "A eleição dos crentes ocorreu 'antes da fundação do mundo' (v.4).",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Capítulo 2",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "Salvação pela graça mediante a fé, e reconciliação entre judeus e gentios em Cristo.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Deus", "Jesus Cristo", "Espírito Santo", "Gentios", "Israel (judeus)"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Descrição do estado dos crentes antes da salvação: mortos em delitos e pecados (v.1-3)",
          "Deus, rico em misericórdia, vivifica os crentes juntamente com Cristo (v.4-6)",
          "Declaração da salvação pela graça, mediante a fé, não por obras (v.8-9)",
          "Os crentes são criação de Deus em Cristo Jesus para boas obras (v.10)",
          "Os gentios eram 'estrangeiros' e 'forasteiros' dos pactos da promessa (v.11-12)",
          "Cristo derrubou o 'muro de separação' entre judeus e gentios (v.14)",
          "Ambos (judeus e gentios) têm acesso ao Pai por um mesmo Espírito (v.18)",
          "A Igreja é edificada sobre o fundamento dos apóstolos e profetas, sendo Cristo a pedra angular (v.20)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 2:8-9 — Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.",
          "Efésios 2:10 — Porque somos feitura sua, criados em Cristo Jesus para as boas obras.",
          "Efésios 2:14 — Porque ele é a nossa paz, que de ambos fez um.",
          "Efésios 2:20 — Edificados sobre o fundamento dos apóstolos e profetas, sendo o próprio Jesus Cristo a pedra angular.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "Salvação é pela graça, mediante a fé — não de obras (2:8-9).",
          "Os crentes são 'feitura' (poema/obra) de Deus, criados para boas obras.",
          "Cristo é a 'pedra angular' da Igreja.",
          "O 'muro de separação' entre judeus e gentios foi derrubado por Cristo.",
          "Os gentios eram 'estrangeiros dos pactos da promessa' antes de Cristo.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Capítulo 3",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "O mistério de Cristo revelado a Paulo e oração pela plenitude de Deus nos crentes.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Jesus Cristo", "Deus", "Espírito Santo", "Gentios", "Apóstolos e profetas"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Paulo se descreve como prisioneiro de Cristo Jesus por causa dos gentios (v.1)",
          "Revelação do 'mistério': os gentios são co-herdeiros, membros do mesmo corpo e participantes da promessa em Cristo (v.3-6)",
          "Paulo recebeu graça para pregar as 'insondáveis riquezas de Cristo' aos gentios (v.8)",
          "A Igreja manifesta a multiforme sabedoria de Deus aos principados e potestades (v.10)",
          "Segunda oração de Paulo: que os efésios sejam fortalecidos pelo Espírito, que Cristo habite em seus corações pela fé (v.16-17)",
          "Oração para que compreendam a largura, comprimento, altura e profundidade do amor de Cristo (v.18)",
          "Doxologia: a Deus seja glória na Igreja e em Cristo Jesus (v.20-21)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 3:6 — Serem os gentios co-herdeiros, membros do mesmo corpo e co-participantes da promessa em Cristo Jesus.",
          "Efésios 3:8 — As insondáveis riquezas de Cristo.",
          "Efésios 3:10 — A multiforme sabedoria de Deus, manifestada pela Igreja aos principados e potestades.",
          "Efésios 3:18-19 — Largura, comprimento, altura e profundidade do amor de Cristo.",
          "Efésios 3:20 — Aquele que é poderoso para fazer tudo muito mais abundantemente.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "O 'mistério' revelado: gentios são co-herdeiros juntamente com Israel.",
          "Paulo ora pelas quatro dimensões do amor de Cristo: largura, comprimento, altura e profundidade.",
          "A Igreja manifesta a sabedoria de Deus aos principados e potestades nos lugares celestiais.",
          "Paulo é descrito como 'o mínimo de todos os santos' (v.8).",
          "A doxologia final glorifica a Deus 'na Igreja e em Cristo Jesus' (v.21).",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Capítulo 4",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "Chamado à unidade do corpo de Cristo e ao crescimento espiritual, abandonando o velho homem.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Cristo", "Deus", "Espírito Santo", "Apóstolos", "Profetas", "Evangelistas", "Pastores e doutores"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Exortação a andar dignamente com humildade, mansidão, longanimidade e amor (v.1-3)",
          "Sete elementos da unidade: um corpo, um espírito, uma esperança, um Senhor, uma fé, um batismo, um Deus e Pai (v.4-6)",
          "Cristo deu dons à Igreja: apóstolos, profetas, evangelistas, pastores e doutores (v.11)",
          "Objetivo dos dons: aperfeiçoar os santos para a obra do ministério e edificar o corpo de Cristo (v.12)",
          "Exortação a não ser mais como crianças flutuantes em doutrinas (v.14)",
          "Contraste entre o 'velho homem' e o 'novo homem' criado segundo Deus (v.22-24)",
          "Instruções práticas: abandonar mentira, ira, furto, palavras corruptas (v.25-29)",
          "Não contristar o Espírito Santo (v.30)",
          "Abandono de amargura, ira, clamor e malícia; praticar bondade e perdão (v.31-32)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 4:4-6 — Um só corpo, um só Espírito... um só Senhor, uma só fé, um só batismo, um só Deus e Pai de todos.",
          "Efésios 4:11-12 — Os dons de Cristo para equipar os santos à obra do ministério.",
          "Efésios 4:22-24 — Despir o velho homem e revestir o novo homem.",
          "Efésios 4:30 — Não contristeis o Espírito Santo de Deus.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "Os sete 'uns' da unidade cristã (4:4-6).",
          "Lista dos cinco dons ministeriais: apóstolos, profetas, evangelistas, pastores e doutores.",
          "Finalidade dos dons: aperfeiçoar os santos para a obra do ministério.",
          "Contraste entre 'velho homem' e 'novo homem'.",
          "Proibição de contristar o Espírito Santo.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Capítulo 5",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "Imitação de Deus na vida prática, contraste entre trevas e luz, e relação entre marido e mulher comparada a Cristo e a Igreja.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Deus", "Cristo", "Espírito Santo", "Marido", "Mulher", "Igreja"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Exortação a ser imitadores de Deus como filhos amados (v.1)",
          "Cristo nos amou e se entregou como oferta e sacrifício a Deus (v.2)",
          "Lista de comportamentos a evitar: impureza, avareza, palavras torpes (v.3-5)",
          "Contraste entre as obras das trevas e os filhos da luz (v.8-14)",
          "Exortação a ser cheios do Espírito Santo (v.18)",
          "Manifestações do ser cheio do Espírito: salmos, hinos, cânticos espirituais, ação de graças (v.19-20)",
          "Submissão mútua no temor de Deus (v.21)",
          "Instrução às mulheres: sujeição ao marido como ao Senhor (v.22-24)",
          "Instrução aos maridos: amar a mulher como Cristo amou a Igreja, entregando-se por ela (v.25-27)",
          "O casamento é comparado ao mistério de Cristo e da Igreja (v.32)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 5:1-2 — Sede, pois, imitadores de Deus... e andai em amor, como também Cristo nos amou.",
          "Efésios 5:18 — Não vos embriagueis com vinho... mas enchei-vos do Espírito.",
          "Efésios 5:25 — Maridos, amai vossas mulheres, como também Cristo amou a Igreja e a si mesmo se entregou por ela.",
          "Efésios 5:32 — Grande é este mistério; digo-o, porém, a respeito de Cristo e da Igreja.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "Contraste entre embriaguez com vinho e ser cheio do Espírito (5:18).",
          "O casamento é um 'grande mistério' que reflete Cristo e a Igreja.",
          "O marido deve amar a mulher como Cristo amou a Igreja.",
          "Os crentes são chamados de 'filhos da luz' (5:8).",
          "Exortação a ser 'imitadores de Deus' como filhos amados.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Capítulo 6",
    estimatedTime: "2 min",
    topics: [
      {
        id: "theme",
        icon: "🎯",
        title: "Tema Principal",
        items: [
          "Instruções para filhos, pais e escravos, e a armadura completa de Deus para a guerra espiritual.",
        ],
      },
      {
        id: "characters",
        icon: "👤",
        title: "Personagens",
        items: ["Paulo", "Deus", "Cristo", "Diabo", "Tíquico", "Filhos", "Pais", "Servos (escravos)", "Senhores"],
      },
      {
        id: "events",
        icon: "⚡",
        title: "Eventos Importantes",
        items: [
          "Filhos devem obedecer aos pais no Senhor; honrar pai e mãe é o primeiro mandamento com promessa (v.1-3)",
          "Pais não devem provocar ira nos filhos, mas criá-los na disciplina e admoestação do Senhor (v.4)",
          "Servos devem obedecer aos senhores como ao Cristo, de coração (v.5-7)",
          "Senhores devem tratar os servos igualmente, pois há um Senhor nos céus (v.9)",
          "Exortação a revestir toda a armadura de Deus para resistir às ciladas do diabo (v.11)",
          "A luta não é contra a carne e o sangue, mas contra os principados, potestades e hostes espirituais da maldade (v.12)",
          "Descrição das peças da armadura: cinto da verdade, couraça da justiça, calçado do evangelho da paz, escudo da fé, capacete da salvação, espada do Espírito (v.13-17)",
          "Exortação à oração e vigília em todo tempo no Espírito (v.18)",
          "Paulo pede oração para falar o mistério do evangelho com ousadia (v.19-20)",
          "Tíquico é enviado para informar sobre Paulo e encorajar os efésios (v.21-22)",
          "Bênção final de paz, amor, fé e graça (v.23-24)",
        ],
      },
      {
        id: "verses",
        icon: "📖",
        title: "Versículos-chave",
        items: [
          "Efésios 6:1-3 — Filhos, obedecei a vossos pais no Senhor... Honra teu pai e tua mãe, que é o primeiro mandamento com promessa.",
          "Efésios 6:11 — Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as ciladas do diabo.",
          "Efésios 6:12 — Porque não temos que lutar contra a carne e o sangue, mas contra os principados, contra as potestades.",
          "Efésios 6:17 — A espada do Espírito, que é a palavra de Deus.",
          "Efésios 6:18 — Orando em todo tempo com toda oração e súplica no Espírito.",
        ],
      },
      {
        id: "review",
        icon: "🧠",
        title: "O que costuma cair",
        items: [
          "As seis peças da armadura de Deus: cinto, couraça, calçado, escudo, capacete e espada.",
          "A espada do Espírito é identificada como 'a palavra de Deus'.",
          "A luta cristã é espiritual, não contra 'carne e sangue'.",
          "Honrar pai e mãe é o 'primeiro mandamento com promessa'.",
          "Tíquico é o portador da carta aos efésios.",
          "Paulo se autodescreve como 'embaixador em cadeias' (v.20).",
        ],
      },
    ],
  },
];