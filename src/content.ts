// Todo o texto do site vive aqui. Troque os exemplos pelos dados reais.
export const site = {
  heroVariant: "ripples" as "waves" | "aurora" | "ripples", // fundo do hero; compare em /preview/waves, /preview/aurora, /preview/ripples
  name: "Joia Silva Fono",
  short: "JSF",
  tagline: "Fonoaudiologia",
  city: "São Paulo, SP",
  crfa: "CRFa 0-00000", // TODO
  whatsapp: "5511997749073", // DDI+DDD+número, só dígitos
  whatsappLabel: "(11) 99774-9073",
  instagram: "@joiasilvafono", // TODO
  email: "contato@joiasilvafono.com.br", // TODO
};

export const waLink = (msg = "Olá! Gostaria de agendar uma avaliação fonoaudiológica.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    n: "01",
    title: "Linguagem e fala infantil",
    text: "Atrasos de fala, trocas na pronúncia e dificuldade de se expressar. Sessões lúdicas que respeitam o tempo de cada criança.",
    tags: ["Atraso de linguagem", "Trocas de fala", "Autismo (TEA)"],
    color: "#C4572E",
  },
  {
    n: "02",
    title: "Voz",
    text: "Rouquidão, cansaço vocal e cuidado com a voz profissional. Para quem vive da fala: professores, cantores, vendedores.",
    tags: ["Saúde vocal", "Voz profissional", "Disfonias"],
    color: "#7C8B6F",
  },
  {
    n: "03",
    title: "Motricidade orofacial",
    text: "Respiração, mastigação, deglutição e postura da língua. Equilíbrio das funções que sustentam a fala e a saúde.",
    tags: ["Respiração oral", "Deglutição", "Mastigação"],
    color: "#B8893B",
  },
  {
    n: "04",
    title: "Leitura e escrita",
    text: "Apoio a crianças com dificuldade na alfabetização, em parceria com a escola e a família.",
    tags: ["Dislexia", "Alfabetização", "Apoio escolar"],
    color: "#8A4B3A",
  },
  {
    n: "05",
    title: "Fluência",
    text: "Acompanhamento da gagueira em crianças, jovens e adultos, com acolhimento e estratégias práticas para o dia a dia.",
    tags: ["Gagueira", "Taquifemia", "Comunicação segura"],
    color: "#4F6B5E",
  },
];

export const steps = [
  { n: "I", title: "Primeiro contato", text: "Você chama no WhatsApp e conta o que está acontecendo. Sem burocracia, sem pressa." },
  { n: "II", title: "Avaliação", text: "Conversa detalhada e observação clínica para entender as necessidades reais do paciente." },
  { n: "III", title: "Plano individual", text: "Um caminho desenhado sob medida, com metas claras e acompanhadas junto com a família." },
  { n: "IV", title: "Evolução", text: "Sessões regulares, orientações para casa e devolutivas para você ver cada avanço." },
];

export const testimonials = [
  { quote: "Meu filho tinha vergonha de falar. Hoje ele conta tudo do dia na mesa do jantar.", who: "Mãe de paciente, 5 anos" }, // TODO: depoimentos reais
  { quote: "Voltei a dar aula sem sentir a voz falhar. O cuidado foi do começo ao fim.", who: "Professora, paciente de voz" },
  { quote: "Atendimento acolhedor e explicações que a gente realmente entende.", who: "Pai de paciente, 7 anos" },
];

export const faqs = [
  { q: "Com que idade posso procurar uma fonoaudióloga?", a: "Em qualquer fase da vida. Há atendimento desde bebês, com questões de sucção e alimentação, até adultos e idosos." },
  { q: "Como sei se meu filho precisa de avaliação?", a: "Se aos 2 anos ele ainda fala poucas palavras, se troca sons após os 5 anos ou se você sente que 'algo não flui', vale agendar. A avaliação esclarece." },
  { q: "Quanto tempo dura o tratamento?", a: "Depende de cada caso. Na avaliação você recebe uma estimativa honesta e metas revisadas ao longo do processo." },
  { q: "Atende por convênio ou emite recibo?", a: "Atendimento particular com recibo para reembolso. Consulte condições pelo WhatsApp." }, // TODO
  { q: "Existe atendimento online?", a: "Sim, para casos em que faz sentido. Pelo WhatsApp avaliamos juntos a melhor modalidade." }, // TODO
];
