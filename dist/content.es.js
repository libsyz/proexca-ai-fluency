// Todo el texto y los datos de la propuesta de fluidez en IA, en español. Es el espejo de content.js.
// Lo que aún haya que confirmar va envuelto en c("...") y se subraya en modo revisión (?review=1).

export const c = (text) => `<span class="confirm" title="Por confirmar">${text}</span>`;

export const meta = {
  title: "Fluidez en IA para PROEXCA: una propuesta de Miguel Jimenez",
  shortTitle: "Propuesta de fluidez en IA para PROEXCA",
  description:
    "Una propuesta a precio fijo de Miguel Jimenez para un programa de fluidez en IA en PROEXCA: una base común en Gemini para todo el equipo, champions que construyen y una dirección que decide qué merece la pena.",
  url: "https://libsyz.github.io/proexca-ai-fluency/",
  preparedBy: "Miguel Jimenez",
  preparedFor: "Dani y el equipo directivo de PROEXCA",
  date: "Noviembre de 2026",
  email: "denkatalabeno@gmail.com",
  validity: "Esta propuesta es válida durante 30 días.",
};

export const nav = [
  { id: "start", label: "Punto de partida" },
  { id: "heard", label: "Lo que escuchamos" },
  { id: "goals", label: "Objetivos de fluidez en IA" },
  { id: "approach", label: "Nuestro enfoque" },
  { id: "included", label: "Qué está incluido" },
  { id: "courses", label: "Cursos de ejemplo" },
  { id: "rolebased", label: "Formación por áreas" },
  { id: "runs", label: "Hoja de ruta de ejemplo" },
  { id: "measure", label: "Medición y retorno" },
  { id: "trainer", label: "El formador" },
  { id: "pricing", label: "Inversión y próximos pasos" },
];

export const start = {
  h1: "Damos a tu equipo las habilidades para la era de la IA",
  h1em: "",
  lead: "PROEXCA ya ha desplegado Gemini. El siguiente paso es equipar al equipo con las habilidades para aprovechar la IA al máximo.",
  components: [
    { n: "01", key: "everyone", title: "Todo el equipo", text: "Usa bien Gemini en trabajo real, cada día.", status: "this", statusLabel: "Conoce → Usa a diario" },
    { n: "02", key: "champions", title: "Champions", text: "Mapean un proceso, definen un caso de uso y lo construyen.", status: "this", statusLabel: "Usa a diario → Construye" },
    { n: "03", key: "leadership", title: "Dirección", text: "Decide qué merece la pena hacer con IA, y lo lidera.", status: "this", statusLabel: "Usa a diario → Estratega" },
  ],
};

export const heard = {
  who:
    "PROEXCA lleva a las empresas canarias al exterior, atrae inversión a las islas, desarrolla talento y gestiona un calendario denso de misiones, ferias y eventos desde Las Palmas y Santa Cruz de Tenerife. El trabajo se basa en la gestión del conocimiento: perfiles, informes, propuestas, contratos, seguimientos.",
  intro: "Tres puntos clave que hemos escuchado hasta ahora:",
  quotes: [
    {
      quote: c("Todo el mundo tiene acceso a Gemini. No todo el mundo lo usa."),
      by: c("Dani"),
      question: "¿Cómo pasa Gemini de estar activado a aprovecharse del todo?",
    },
    {
      quote: c("Queremos un plan de formación propio, no un módulo dentro de otro proyecto."),
      by: c("Dirección de PROEXCA"),
      question: "¿Cómo debería ser un programa de formación en IA para PROEXCA?",
    },
    {
      quote: c("Queremos que nuestra gente construya cosas con IA, no solo que le haga preguntas."),
      by: c("Dani"),
      question: "¿Cómo logramos que el equipo pase de preguntar a construir con IA?",
    },
  ],
};

export const goals = {
  intro:
    "En un mismo programa formamos a todo el equipo para usar Gemini en su trabajo real y automatizar con IA. También formamos a champions para construir con IA, y a la dirección para marcar el rumbo de la estrategia.",
  groups: [
    { title: "Todo el equipo", who: "la mayoría de la organización", from: "Conoce", to: "Usuario diario", text: "Usar Gemini en el trabajo real y aprender a ser productivo con IA." },
    { title: "Champions", who: c("uno o dos por área, y quien lo pida"), from: "Usuario diario", to: "Constructor", text: "Mapear un proceso, acotar un caso de uso y saber desplegarlo en su equipo." },
    { title: "Dirección", who: c("Dani y la dirección de PROEXCA"), from: "Usuario diario", to: "Estratega", text: "Liderar la organización en la era de la IA." },
  ],
  levels: {
    names: ["Conoce", "Usuario diario", "Constructor", "Estratega"],
    // Puntos por nivel en el día 0 y en el día 60. Solo ilustrativo.
    day0: [13, 7, 1, 1],
    day60: [0, 13, 6, 3],
    steps: [
      { key: "day0", label: "Día 0", caption: "Hoy suponemos que la mayoría conoce Gemini y solo unos pocos lo aprovechan de verdad.", ms: 3400 },
      { key: "day60", label: "Día 60", caption: "Tras el programa, la organización usa la IA de forma constante, los champions construyen con IA y la dirección es dueña de la estrategia.", ms: 4200 },
    ],
    static: "Distribución ilustrativa del equipo en cuatro niveles. En el día 0 la mayoría conoce Gemini y unos pocos lo usan a diario. En el día 60 nadie queda en el nivel de conocer, la mayoría son usuarios diarios, los champions son constructores y la dirección son estrategas.",
  },
};

export const approach = {
  intro: "Cinco principios de diseño del programa.",
  principles: [
    { icon: "cohort", title: "Formación experiencial, por grupos", text: "La gente aprende con gente. Los cursos online, por sí solos, no generan cambios reales." },
    { icon: "workshops", title: "Talleres sobre casos de uso reales", text: "Adaptamos los talleres al trabajo real de PROEXCA, con casos de uso tangibles construidos al terminar." },
    { icon: "community", title: "Una comunidad con seguimiento estructurado", text: "Entre sesiones los casos de uso y las dudas se comparten y se responden." },
    { icon: "builders", title: "Horas de consulta con practicantes de IA", text: "Cada dos semanas, a horas fijas, para quien quiera." },
    { icon: "material", title: "Un solo lugar para todo el material", text: "Usamos una plataforma para alojar los cursos y los talleres." },
  ],
};

export const included = {
  intro: "",
  note: "",
  tiles: [
    {
      title: "Plataforma de aprendizaje",
      sub: "un único sitio online para el programa",
      points: [
        "El hogar de todos los cursos y el material de PROEXCA",
        "Cada persona ve su propio progreso",
        "Informes y seguimiento del rendimiento para RR. HH. y dirección",
        c("Seis meses de acceso para todas las personas en alcance"),
      ],
    },
    {
      title: "Talleres",
      sub: "presenciales o en remoto",
      points: [
        "Dos talleres en directo por cohorte, presenciales en Las Palmas o en remoto",
        "Construidos sobre el trabajo de la propia cohorte",
        "Todo el mundo se va con algo construido y un caso de uso prototipado",
        "Una sesión de dirección para Dani y los responsables de área",
      ],
    },
    {
      title: "Comunidad",
      sub: "entre sesiones",
      points: [
        "Un espacio en el canal que ya usan (Slack, Google Chat, etc.)",
        "Las preguntas y dudas tienen un sitio, y el formador responde en el día",
        "Los champions pueden quedarse con el canal al terminar el programa",
      ],
    },
    {
      title: "Horas de consulta",
      sub: "con el formador, cada semana",
      points: [
        "Una hora fija cada semana con alguien que construye, para quien quiera",
        "Donde los champions llegan con un mapa de proceso y se van con una Gem o un borrador de automatización",
        c("Tres meses de horas semanales, ampliables"),
        "La misma persona de principio a fin, para no explicar nada dos veces",
      ],
    },
  ],
};

export const courses = {
  intro:
    "Tres cursos en la plataforma de aprendizaje. AI Operator es Gemini 101 para todo el equipo: una apertura y tres módulos. No-Code Operator y AI Automations son para champions. Los cursos son el trabajo previo; los talleres son donde la cohorte aplica lo aprendido en trabajo real.",
  hint: "Seleccione un módulo o un curso, o use las flechas del teclado",
  tracks: [
    { label: "Curso AI Operator · todo el equipo", items: ["opener", "m1", "m2", "m3"] },
    { label: "Cursos de constructor · champions", items: ["nocode", "auto"] },
  ],
  items: {
    opener: { kicker: "Apertura", title: "La mentalidad de IA", level: "Usuario diario", topics: ["Para qué sirve la IA, y para qué no", "Las seis mentalidades", "Cómo funciona el programa"], time: "45 minutos", tools: "Gemini" },
    m1: { kicker: "Módulo 1", title: "Fundamentos de IA", level: "Usuario diario", topics: ["IA generativa", "Modelos de IA", "Grandes modelos de lenguaje"], time: "2 a 3 horas", tools: "Gemini" },
    m2: { kicker: "Módulo 2", title: "IA en la práctica", level: "Usuario diario", topics: ["Ingeniería de prompts", "Gemini en Docs, Sheets, Slides y Gmail", "Encontrar casos de uso de IA en su propio trabajo"], time: "2 a 3 horas", tools: "Gemini · Docs · Sheets · Slides · Gmail" },
    m3: { kicker: "Módulo 3", title: "IA responsable", level: "Usuario diario", topics: ["Limitaciones de la IA", "Regulación de la IA y qué implica para un organismo público", "Ética de la IA y las normas propias de PROEXCA"], time: "2 a 3 horas", tools: "Gemini · Drive" },
    nocode: { kicker: "Curso de constructor", title: "No-Code Operator", level: "Constructor", topics: ["Mapear un proceso antes de tocar una herramienta", "Construir una Gem personal con sus propias instrucciones y archivos", "Acotar un caso de uso y comprobarlo antes de desplegarlo"], time: "4 a 6 horas", tools: "Gems · NotebookLM · AppSheet" },
    auto: { kicker: "Curso de constructor", title: "AI Automations", level: "Constructor", topics: ["Disparadores, pasos y aprobaciones", "Una primera automatización en Workspace", "Dónde debe decidir una persona, y cuál es el control de calidad"], time: "4 a 6 horas", tools: "Apps Script · n8n · Gemini" },
  },
  tailoring:
    "Partimos de contenido de curso ya existente y lo adaptamos a las necesidades de PROEXCA: centrado en el ecosistema de Google, con casos de uso relevantes para su trabajo e incorporando sus requisitos como organismo público.",
};

export const rolebased = {
  intro:
    "Nuestra experiencia nos ha enseñado que es clave impartir las sesiones con tareas y ejemplos muy relevantes, para que la gente pueda poner en práctica lo que aprende. Esa relevancia es esencial para convertir la formación en mejoras reales.",
  note: "Las áreas y sus casos de uso se confirman durante el descubrimiento con Dani y los responsables de área.",
  areas: [
    { icon: "globe", name: c("Internacionalización"), uses: ["Perfil de empresa desde HubSpot y fuentes públicas", "Informe de mercado antes de una misión", "Cruce de licitaciones para una empresa cliente"] },
    { icon: "target", name: c("Atracción de inversiones"), uses: ["Dosier de inversor por sector", "Respuesta a una consulta de inversor", "Resumen de incentivos a partir de sus propias guías"] },
    { icon: "cohort", name: c("Talento"), uses: ["Convocatoria de programa redactada a partir de la del año pasado", "Solicitudes resumidas en Sheets", "Seguimiento de participantes en Gmail"] },
    { icon: "calendar", name: c("Eventos y misiones"), uses: ["Lista de asistentes desde HubSpot", "Informe del evento a partir de las notas", "Correos de seguimiento al día siguiente"] },
    { icon: "sheet", name: c("Administración y finanzas"), uses: ["Borrador de contrato desde su plantilla", "Líneas de gasto comprobadas en Sheets", "Expediente de contratación resumido"] },
    { icon: "compass", name: "Dirección", uses: ["Resumen semanal de actividad desde Asana", "Primer borrador de un informe para el consejo", "Normas de PROEXCA para el uso de la IA"] },
  ],
  usesLabel: "Casos de uso sobre los que se construye la sesión",
};

export const runs = {
  intro:
    "La siguiente hoja de ruta ilustra cómo podría avanzar el programa. La adaptaremos juntos a sus necesidades.",
  items: [
    {
      week: "Alinear",
      title: "Preparar el terreno",
      live: "Listo al final de la alineación",
      ships: [
        "La evaluación se realiza para todas las personas en alcance",
        "Nos sentamos con Dani sobre el modelo operativo y con los responsables de área sobre cómo se aprende en PROEXCA",
        "Cohortes y responsables de cohorte designados",
        "La plataforma adaptada: los ejemplos de PROEXCA dentro, sus normas en el módulo de IA responsable",
      ],
      needs: ["Dani como punto de contacto", "Diez minutos por persona para la evaluación", "Una hora con los responsables de área"],
    },
    {
      week: "Primera cohorte",
      title: "AI Operator, en directo",
      live: "En marcha durante la primera cohorte",
      ships: [
        c("Hasta 20 personas en AI Operator, dos talleres, la comunidad y horas de consulta semanales"),
        "Medición desde el primer taller: uso, casos de uso registrados, preguntas planteadas",
        "Champions identificados por quién aparece y qué construye",
      ],
      needs: ["Una o dos horas a la semana por persona", "Un responsable designado para la cohorte", c("Dani, alrededor de una hora a la semana")],
    },
    {
      week: "Decisión",
      title: "Continuar, ajustar o parar",
      live: "Al final de la primera cohorte",
      ships: [
        "Treinta minutos con Dani: los números, el mapa de niveles antes y después, el registro de casos de uso, nuestra recomendación",
        "Un informe de una página escrito para reenviarse tal cual",
      ],
      needs: ["Treinta minutos con Dani y los responsables de área"],
    },
    {
      week: "Todo el equipo",
      title: "El resto del equipo",
      live: "En marcha tras la decisión",
      ships: [
        c("El resto de cohortes en AI Operator"),
        "Sesiones por área con cada responsable",
        "Cursos de constructor y horas de consulta para los champions",
        "Una sesión de dirección para Dani y los responsables de área",
      ],
      needs: ["Responsables de cohorte para cada cohorte", "Cada responsable de área para una sesión"],
    },
    {
      week: "Mantener",
      title: "Sigue en marcha",
      live: "Continuo",
      ships: [
        "Cohortes de nuevas incorporaciones en la plataforma",
        "Una actualización cada trimestre a medida que Gemini cambia",
        "Una comunidad que llevan los champions",
        "Horas de consulta, si quieren mantenerlas",
      ],
      needs: ["Champions con una hora a la semana"],
    },
  ],
  asks: {
    title: "Qué les pide",
    text: c("Una o dos horas a la semana por persona durante su cohorte, un responsable por cohorte, Dani alrededor de una hora a la semana durante la primera cohorte y un informe de treinta minutos. Las cohortes se programan en torno al calendario de ferias y misiones."),
  },
};

export const measure = {
  intro:
    "La adopción ya se puede medir dentro de Workspace. Añadimos la evaluación en el día 0 y el día 60, el registro de casos de uso y una línea base para los procesos que nombre cada área, y lo leemos todo con el método ROI de Phillips.",
  levelsTitle: "Método ROI de Phillips, con la fuente de datos de PROEXCA para cada nivel",
  levels: [
    { n: "0", title: "Insumos", source: "personas, horas, coste" },
    { n: "1", title: "Reacción", source: "relevancia e intención de uso, tras cada taller" },
    { n: "2", title: "Aprendizaje", source: "la evaluación, día 0 y día 60" },
    { n: "3", title: "Aplicación", source: "informes de Gemini, casos de uso registrados" },
    { n: "4", title: "Impacto", source: "horas recuperadas, tiempo de proceso, calidad mantenida" },
    { n: "5", title: "Retorno", source: "valor de las horas recuperadas frente al coste del programa" },
  ],
};

export const trainer = {
  intro: "",
  person: {
    name: "Miguel Jimenez",
    role: "Formador y constructor de IA. Ex-Microsoft, ex-profesor en Le Wagon",
    tag: "",
  },
  card: {
    title: "Un practicante de IA del mundo real que entiende la formación técnica",
    parts: [
      { eyebrow: "Perfil del formador", text: "Miguel aporta más de 10 años de experiencia como constructor en tecnología. Ha dirigido equipos, gestionado proyectos técnicos y escalado software en startups y grandes organizaciones." },
      { eyebrow: "", text: "Miguel ha sido profesor de desarrollo de software y análisis de datos en Le Wagon, una de las mayores edtechs de Europa, donde ha enseñado tecnología a miles de personas. También ha trabajado como technical program manager en Microsoft, en IA aplicada, automatizando procesos internos." },
    ],
    link: { href: "https://mleojimenez.netlify.app/", label: "Juega mi CV", note: "Un currículum hecho videojuego" },
    former: [
      { name: "Microsoft", src: "logos/colour/microsoft-mark.svg" },
      { name: "Le Wagon", src: "logos/colour/le-wagon.svg" },
    ],
  },
};

export const pricing = {
  card: {
    eyebrow: "Precio fijo",
    title: "Fluidez en IA para PROEXCA",
    price: "14.000 €",
    priceNote: "IGIC no incluido",
    included: {
      title: "Incluido",
      items: [
        "Descubrimiento y análisis de necesidades con Dani y otros responsables de PROEXCA",
        c("La plataforma de aprendizaje durante seis meses, con los tres cursos adaptados a PROEXCA"),
        c("Una primera cohorte de hasta 20 personas: AI Operator, dos talleres en directo, la comunidad"),
        c("Un itinerario de champions: los cursos de constructor y tres meses de horas de consulta semanales"),
        "Una sesión de estrategia de IA para la dirección de PROEXCA",
        "Talleres de IA por áreas",
        "El análisis del día 60 y las recomendaciones",
        "Un único formador de principio a fin, presencial en los talleres",
      ],
    },
    excluded: {
      title: "No incluido",
      items: [
        "Licencias de software (Google Workspace, Gemini)",
        c("Cohortes más allá de la primera, presupuestadas por cohorte"),
        "Conectar Gemini con HubSpot, Business Central y Asana",
        "Gastos de viaje y alojamiento del formador en Gran Canaria",
      ],
    },
  },
  scope: {
    title: "De un vistazo",
    items: [
      c("Capacitación para todo el equipo"),
      c("Champions construyendo con IA"),
      "Su material de aprendizaje alojado en la plataforma de aprendizaje",
      "Dos talleres en directo por cohorte",
      "Una sesión de estrategia de IA",
      "Un formador dedicado durante todo el programa",
    ],
  },
  assumptions: {
    title: "Supuestos",
    items: [
      "Dani es el punto de contacto y designa a los responsables de cohorte",
      "Todas las personas en alcance tienen Gemini en Workspace",
      c("Una o dos horas a la semana por persona"),
      "Impartición en español",
    ],
  },
  closing: {
    title: "Su equipo ya tiene las herramientas de IA.",
    em: "Ahora denle las habilidades.",
    text: "Formación en IA impartida por practicantes, construida en torno a las herramientas, los flujos de trabajo y los casos de uso reales de tus equipos.",
    cta: { label: "Reservar la llamada de inicio", href: "mailto:denkatalabeno@gmail.com?subject=PROEXCA%20fluidez%20en%20IA%20inicio" },
  },
};

export const ui = {
  lang: "es",
  skip: "Ir al contenido",
  topbarTitle: "Propuesta de fluidez en IA para PROEXCA",
  index: "Índice",
  collapse: "Contraer el índice",
  expand: "Expandir el índice",
  proposalFor: "Propuesta de fluidez en IA para",
  bookKickoff: "Hablemos del proyecto",
  preparedBy: "Preparado por",
  backToTop: "Volver arriba",
  switchLabel: "Idioma",
  components: "Los tres grupos",
  headings: {
    heard: "Lo que <em>escuchamos</em>",
    goals: "Objetivos de <em>fluidez en IA</em>",
    approach: "Nuestro <em>enfoque</em>",
    included: "Qué está <em>incluido</em>",
    courses: "<em>Cursos de ejemplo</em>",
    rolebased: "Formación <em>por áreas</em>",
    runs: "Hoja de ruta <em>de ejemplo</em>",
    measure: "Medición <em>y retorno</em>",
    trainer: "El <em>formador</em>",
    pricing: "Inversión <em>y próximos pasos</em>",
  },
  day0: "Día 0",
  day60: "Día 60",
  beforeAfter: "Antes y después",
  includedAria: "Qué está incluido",
  coursesAria: "Cursos y módulos",
  time: "Duración",
  tools: "Herramientas",
  areasAria: "Áreas",
  phasesAria: "Fases",
  needs: "Qué necesitamos de ustedes",
};
