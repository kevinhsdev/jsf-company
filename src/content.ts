// Todo o texto do site vive aqui. Troque os exemplos pelos dados reais.
export const site = {
  heroVariant: "ripples" as "waves" | "aurora" | "ripples", // fundo do hero; compare em /preview/waves, /preview/aurora, /preview/ripples
  name: "Joia Silva Fono",
  short: "JSF",
  tagline: "Fonoaudiologia",
  city: "São Paulo, SP",
  crfa: "CRFa 2-25224",
  whatsapp: "5511997749073", // DDI+DDD+número, só dígitos
  whatsappLabel: "(11) 99774-9073",
  instagram: "@joiasilvafono",
  email: "contato@joiasilvafono.com.br", // TODO
};

export const waLink = (msg = "Olá! Gostaria de agendar uma avaliação fonoaudiológica.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    n: "01",
    title: "Audiologia",
    text: "Exames e reabilitação da audição para todas as idades, com atenção especial a crianças e ao autismo.",
    tags: ["Exames de audição", "Processamento auditivo", "Treinamento auditivo"],
    color: "#4F6B5E",
  },
  {
    n: "02",
    title: "Motricidade orofacial – Disfagia",
    text: "Avaliação e terapia da deglutição, mastigação e respiração, com experiência hospitalar da UTI neonatal à adulta.",
    tags: ["Disfagia", "Deglutição", "Respiração oral"],
    color: "#B8893B",
  },
  {
    n: "03",
    title: "Linguagem e fala infantil",
    text: "Atrasos de fala, trocas na pronúncia e dificuldade de se expressar. Sessões lúdicas que respeitam o tempo de cada criança.",
    tags: ["Atraso de linguagem", "Trocas de fala", "Autismo (TEA)"],
    color: "#C4572E",
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
    color: "#7C8B6F",
  },
];

// Seção de audiologia. TODO: confirmar com ela a lista de exames que realiza.
export const hearing = [
  { title: "Audiometria tonal e vocal", text: "Mede o quanto e como você ouve, em cabine acústica." },
  { title: "Imitanciometria", text: "Avalia a orelha média e os reflexos auditivos." },
  { title: "Processamento auditivo central", text: "Investiga como o cérebro interpreta o que ouve, mesmo com audição normal." },
  { title: "Treinamento auditivo", text: "Terapia que fortalece atenção, memória e compreensão auditiva." },
  { title: "Avaliação no autismo e TDAH", text: "Protocolos comportamentais adaptados a cada criança." },
];

// Certificados (imagens em src/assets/certificados; o CPF do CBFONO foi tarjado na renderização).
export const credentials = [
  { img: "audiologia-tea", year: "2026", title: "Avaliação audiológica no TEA: protocolos comportamentais e eletrofisiológicos", where: "41º Encontro Internacional de Audiologia" },
  { img: "treinamento-auditivo", year: "2025", title: "Treinamento auditivo neurocognitivo de A a Z", where: "30 horas" },
  { img: "habilidades-auditivas", year: "2024", title: "Terapia das habilidades auditivas no autismo e treinamento auditivo no TDAH", where: "Curso de extensão" },
  { img: "fala-linguagem", year: "2024", title: "Avaliação de fala e linguagem infantil", where: "30 horas" },
  { img: "hospitalar", year: "", title: "Fonoaudiologia hospitalar, da UTI neonatal à UTI adulto", where: "Fono Mater Cursos · 24 horas" },
  { img: "cbfono", year: "", title: "1º Congresso Brasileiro Online de Fonoaudiologia", where: "CBFONO · 40 horas" },
];

export const steps = [
  { n: "I", title: "Primeiro contato", text: "Você chama no WhatsApp e conta o que está acontecendo. Sem burocracia, sem pressa." },
  { n: "II", title: "Avaliação", text: "Conversa detalhada e observação clínica para entender as necessidades reais do paciente." },
  { n: "III", title: "Plano individual", text: "Um caminho desenhado sob medida, com metas claras e acompanhadas junto com a família." },
  { n: "IV", title: "Evolução", text: "Sessões regulares, orientações para casa e devolutivas para você ver cada avanço." },
];

export const testimonials = [
  { quote: "Meu filho tinha vergonha de falar. Hoje ele conta tudo do dia na mesa do jantar.", who: "Mãe de paciente, 5 anos" }, // TODO: depoimentos reais
  { quote: "Fiz o exame de audição com calma e saí entendendo cada resultado. O cuidado foi do começo ao fim.", who: "Paciente de audiologia" },
  { quote: "Atendimento acolhedor e explicações que a gente realmente entende.", who: "Pai de paciente, 7 anos" },
];

export const faqs = [
  { q: "Com que idade posso procurar uma fonoaudióloga?", a: "Em qualquer fase da vida. Há atendimento desde bebês, com questões de sucção e alimentação, até adultos e idosos." },
  { q: "Como sei se meu filho precisa de avaliação?", a: "Se aos 2 anos ele ainda fala poucas palavras, se troca sons após os 5 anos ou se você sente que 'algo não flui', vale agendar. A avaliação esclarece." },
  { q: "Quanto tempo dura o tratamento?", a: "Depende de cada caso. Na avaliação você recebe uma estimativa honesta e metas revisadas ao longo do processo." },
  { q: "Você faz exames de audição?", a: "Sim. A audiologia é minha especialidade: exames, avaliação do processamento auditivo e treinamento auditivo, para crianças e adultos." },
  { q: "O que é disfagia?", a: "É a dificuldade para engolir alimentos, líquidos ou saliva. Engasgos frequentes, tosse ao comer e perda de peso são sinais de alerta e merecem avaliação." },
  { q: "Atende por convênio ou emite recibo?", a: "Atendimento particular com recibo para reembolso. Consulte condições pelo WhatsApp." }, // TODO
  { q: "Existe atendimento online?", a: "Sim, para casos em que faz sentido. Pelo WhatsApp avaliamos juntos a melhor modalidade." }, // TODO
];
