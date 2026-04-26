export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; label: string; text: string }
  | { type: "warning"; label: string; text: string };

export type Article = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "medicina-preventiva-equina",
    category: "Equinos",
    categoryColor: "bg-navy-100 text-navy-700",
    title: "Guía completa de medicina preventiva equina: vacunas, desparasitación y pasaporte",
    excerpt:
      "Todo lo que necesitas saber para mantener a tu caballo protegido a lo largo del año. Calendarios de vacunación, protocolos de desparasitación y gestión del pasaporte equino explicados paso a paso.",
    author: "Dr. Alejandro Ruiz",
    authorRole: "Director Clínico · Especialista en Equinos",
    date: "18 abril 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1566392785474-926a4c6257b5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Caballos en cuadra siendo atendidos",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "La medicina preventiva es la base de la salud equina. Un caballo bien vacunado, desparasitado y con su documentación al día es un caballo que puede rendir al máximo y que representa un riesgo mínimo tanto para otros équidos como para las personas de su entorno. En esta guía repasamos los pilares fundamentales de cualquier protocolo preventivo.",
      },
      { type: "heading", text: "Vacunación: las vacunas imprescindibles" },
      {
        type: "paragraph",
        text: "No todas las vacunas tienen la misma obligatoriedad legal, pero sí la misma importancia clínica. Estas son las cuatro vacunaciones que recomendamos en nuestra clínica para cualquier caballo de la Comarca de Antequera:",
      },
      {
        type: "list",
        items: [
          "Tétanos: obligatoria y de por vida. Pauta inicial de dos dosis con recuerdo anual.",
          "Gripe equina: especialmente importante en caballos que compiten o viajan. Cada 6-12 meses según el nivel de exposición.",
          "Rinoneumonitis (herpesvirus equino): esencial en yeguas gestantes y explotaciones con muchos animales. Pauta específica según trimestre de gestación.",
          "Rabia: recomendada en zonas con fauna silvestre y obligatoria si el animal viaja a ciertos países de la UE.",
        ],
      },
      {
        type: "tip",
        label: "Consejo práctico",
        text: "Registra siempre las vacunas en el pasaporte equino oficial. Es obligatorio por ley y te evitará problemas si el animal viaja, compite o cambia de propietario.",
      },
      { type: "heading", text: "Desparasitación: interna y externa" },
      {
        type: "paragraph",
        text: "Los parásitos internos (estróngilos, oxiuros, ascáridos) son una de las principales causas de cólico y pérdida de condición en caballos. La estrategia de desparasitación ha evolucionado: ya no se recomienda desparasitar de forma rutinaria cada 8 semanas con el mismo producto. El enfoque moderno es más racional y efectivo.",
      },
      {
        type: "list",
        items: [
          "Realizar coprologías (análisis de heces) dos veces al año para determinar la carga parasitaria real de cada animal.",
          "Desparasitar solo los animales con cargas altas o moderadas, usando el principio activo adecuado según el resultado.",
          "Mantener un control estratégico del bot en otoño, independientemente del resultado del coproparasitológico.",
          "Alternar principios activos (ivermectina, moxidectina, fenbendazol, pirantel) para evitar resistencias.",
        ],
      },
      {
        type: "warning",
        label: "Importante",
        text: "Nunca uses desparasitantes bovinos u ovinos en caballos. Las dosis y los principios activos no son equivalentes y pueden causar reacciones graves.",
      },
      { type: "heading", text: "El pasaporte equino: qué es y cómo gestionarlo" },
      {
        type: "paragraph",
        text: "El pasaporte equino es el documento de identificación obligatorio para todos los équidos nacidos en España. Lo emite el Servicio Oficial Veterinario y debe estar siempre disponible durante el transporte o en competiciones. Incluye los datos de identificación del animal (microchip, señas), el historial vacunal y la declaración de si el animal está destinado a consumo humano.",
      },
      {
        type: "list",
        items: [
          "Solicítalo dentro de los 12 meses posteriores al nacimiento del potro.",
          "Consérvalo junto al animal siempre que se desplace.",
          "Anota todas las vacunaciones y tratamientos en el apartado correspondiente.",
          "Si pierdes el pasaporte, notifícalo al organismo emisor inmediatamente.",
        ],
      },
      {
        type: "paragraph",
        text: "En Centro Veterinario Mollina gestionamos la implantación del microchip, la cumplimentación del pasaporte y el registro en la base de datos oficial. Si tienes un potro reciente o necesitas poner al día la documentación de tu caballo, contacta con nosotros.",
      },
    ],
  },

  {
    slug: "vacunacion-perros",
    category: "Perros",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Vacunación anual en perros: qué vacunas son obligatorias y cuáles recomendadas",
    excerpt:
      "Resolvemos las dudas más frecuentes sobre el calendario vacunal canino: rabia, moquillo, parvovirus, leptospirosis y leishmaniosis. Cuándo vacunar y por qué es tan importante.",
    author: "Dra. Elena Martínez",
    authorRole: "Especialista en Pequeños Animales",
    date: "5 abril 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Perro golden retriever en consulta veterinaria",
    content: [
      {
        type: "paragraph",
        text: "Las vacunas son la herramienta más eficaz y económica de la medicina preventiva en perros. Sin embargo, muchos propietarios tienen dudas sobre cuáles son imprescindibles, cuáles son opcionales y cada cuánto tiempo hay que repetirlas. Aquí tienes una guía clara y actualizada.",
      },
      { type: "heading", text: "Vacunas obligatorias por ley en España" },
      {
        type: "paragraph",
        text: "En España, la única vacuna obligatoria a nivel nacional es la antirrábica para perros. Sin embargo, cada comunidad autónoma puede establecer normativas adicionales. En Andalucía, la rabia es de vacunación obligatoria y debe renovarse anualmente o cada tres años según el producto utilizado.",
      },
      {
        type: "tip",
        label: "Recuerda",
        text: "Sin certificado de vacuna antirrábica vigente, tu perro no puede viajar a Portugal, Francia ni a la mayoría de países de la UE. Es también requisito para muchas residencias caninas y peluquerías.",
      },
      { type: "heading", text: "Vacunas esenciales recomendadas" },
      {
        type: "paragraph",
        text: "Más allá de la normativa, existen vacunas que todos los veterinarios recomendamos por la gravedad de las enfermedades que previenen:",
      },
      {
        type: "list",
        items: [
          "Moquillo canino: enfermedad vírica grave con alta mortalidad. Primera dosis a las 6-8 semanas de vida.",
          "Parvovirus canino: causa gastroenteritis hemorrágica letal, especialmente en cachorros. Muy resistente en el entorno.",
          "Hepatitis infecciosa (Adenovirus tipo 1): afecta al hígado y puede ser mortal si no se trata a tiempo.",
          "Leptospirosis: bacteria zoonótica (puede contagiarse a personas). Especialmente relevante en zonas rurales y húmedas como la nuestra.",
          "Traqueobronquitis infecciosa (tos de las perreras): recomendada si el perro tiene contacto frecuente con otros perros.",
        ],
      },
      { type: "heading", text: "Calendario de vacunación del cachorro" },
      {
        type: "list",
        items: [
          "6-8 semanas: primera dosis de polivalente (moquillo, parvovirus, hepatitis).",
          "10-12 semanas: segunda dosis polivalente + primera dosis de leptospirosis.",
          "14-16 semanas: tercera dosis polivalente + segunda dosis de leptospirosis + rabia.",
          "12-16 meses: primer recuerdo anual de todas las vacunas.",
        ],
      },
      { type: "heading", text: "Vacunas opcionales según estilo de vida" },
      {
        type: "list",
        items: [
          "Leishmaniosis: altamente recomendada en zonas mediterráneas como la nuestra, donde el flebotomo transmisor es endémico.",
          "Borreliosis (Enfermedad de Lyme): para perros que frecuentan zonas de monte con alta presencia de garrapatas.",
          "Gripe canina: si el perro viaja frecuentemente a exposiciones o tiene contacto con muchos perros.",
        ],
      },
      {
        type: "warning",
        label: "Cuidado",
        text: "No interrumpas el calendario de vacunación. Un perro con las vacunas caducadas no solo está desprotegido, sino que puede necesitar reiniciar la pauta desde el principio según el tiempo transcurrido.",
      },
      {
        type: "paragraph",
        text: "En Centro Veterinario Mollina personalizamos el plan de vacunación de cada perro según su edad, estilo de vida y zona de residencia. Consulta con nosotros cuál es el protocolo más adecuado para tu compañero.",
      },
    ],
  },

  {
    slug: "dental-gatos",
    category: "Gatos",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Limpieza dental en gatos: por qué es crucial y cómo hacerlo en casa",
    excerpt:
      "La enfermedad periodontal afecta al 80% de los gatos mayores de 3 años. Aprende a reconocer los signos de problemas dentales y cómo complementar las limpiezas profesionales con rutinas diarias.",
    author: "Dra. Elena Martínez",
    authorRole: "Especialista en Pequeños Animales",
    date: "22 marzo 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Gato siendo examinado en el veterinario",
    content: [
      {
        type: "paragraph",
        text: "Según los estudios más recientes, más del 80% de los gatos mayores de 3 años presentan algún grado de enfermedad periodontal. A pesar de ser tan frecuente, la salud dental felina sigue siendo una de las áreas más descuidadas por los propietarios. Esto tiene consecuencias: el dolor dental crónico en gatos rara vez se manifiesta de forma obvia, lo que hace que muchos animales sufran en silencio durante meses.",
      },
      { type: "heading", text: "Cómo reconocer un problema dental en tu gato" },
      {
        type: "paragraph",
        text: "Los gatos son maestros en disimular el dolor. Sin embargo, hay señales que deberían encender las alarmas:",
      },
      {
        type: "list",
        items: [
          "Mal aliento (halitosis) persistente y pronunciado.",
          "Babeo excesivo o saliva con rastros de sangre.",
          "Dificultad para masticar, preferencia por comida blanda o dejar de comer.",
          "Rascado frecuente de la zona del hocico con las patas.",
          "Inflamación de las encías (color rojizo en lugar de rosado pálido).",
          "Sarro visible en la base de los dientes (depósito amarillo-marrón).",
          "Pérdida de peso sin causa aparente.",
        ],
      },
      {
        type: "tip",
        label: "Señal de alarma",
        text: "Si tu gato come solo de un lado de la boca o mueve la cabeza de forma extraña al masticar, casi con seguridad tiene dolor dental. No esperes a la próxima revisión rutinaria; consulta antes.",
      },
      { type: "heading", text: "La limpieza dental profesional" },
      {
        type: "paragraph",
        text: "La profilaxis dental veterinaria se realiza siempre bajo anestesia general. No hay otra forma segura de hacerlo: los gatos no cooperan, y un procedimiento sin anestesia sería incompleto y estresante para el animal. Esto preocupa a muchos propietarios, pero en manos expertas el riesgo anestésico es mínimo, especialmente si el animal está sano y la revisión preoperatoria es correcta.",
      },
      {
        type: "paragraph",
        text: "Durante la profilaxis eliminamos el sarro supragingival e infragingival, exploramos cada diente individualmente, realizamos radiografías dentales si es necesario y extraemos los dientes no viables. La recuperación suele ser rápida: la mayoría de los gatos comen con normalidad al día siguiente.",
      },
      { type: "heading", text: "Cómo mantener los dientes limpios en casa" },
      {
        type: "list",
        items: [
          "Usa solo pasta dental específica para gatos — las pastas humanas son tóxicas para ellos.",
          "Empieza frotando los dientes con el dedo envuelto en una gasa antes de pasar al cepillo.",
          "El cepillo debe ser muy suave y pequeño, diseñado para felinos.",
          "Céntrate en la cara exterior de los dientes superiores, donde más sarro se acumula.",
          "Hazlo todos los días, o como mínimo 3 veces por semana para que sea efectivo.",
        ],
      },
      {
        type: "paragraph",
        text: "Si tu gato no acepta el cepillado, existen alternativas complementarias: geles dentales de aplicación directa, snacks y piensos con efecto abrasivo (con sello VOHC) y juguetes masticables. Ninguno es tan efectivo como el cepillo, pero son mejores que no hacer nada.",
      },
      { type: "heading", text: "¿Cada cuánto tiempo debe revisarse la boca de un gato?" },
      {
        type: "paragraph",
        text: "Recomendamos una revisión dental incluida en la consulta anual para gatos jóvenes y sanos. A partir de los 7 años, o si el animal ya ha tenido problemas dentales previos, la revisión debería ser semestral. La detección precoz de la resorción dental felina (una lesión muy dolorosa e irreversible) puede marcar la diferencia entre una extracción sencilla y una cirugía compleja.",
      },
    ],
  },

  {
    slug: "colico-caballo",
    category: "Equinos",
    categoryColor: "bg-navy-100 text-navy-700",
    title: "Cólico equino: señales de alerta y cómo actuar antes de que llegue el veterinario",
    excerpt:
      "El cólico es la principal causa de muerte en caballos. Conoce los síntomas tempranos, las primeras medidas que puedes tomar y cuándo es una emergencia que no puede esperar.",
    author: "Dr. Alejandro Ruiz",
    authorRole: "Director Clínico · Especialista en Equinos",
    date: "10 marzo 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Veterinario atendiendo a un caballo",
    content: [
      {
        type: "paragraph",
        text: "El cólico es la primera causa de muerte no accidental en caballos. Detrás de este término se esconden más de 70 causas diferentes, desde un simple espasmo intestinal hasta una torsión que requiere cirugía de urgencia. La rapidez de respuesta del propietario puede marcar la diferencia entre la vida y la muerte del animal.",
      },
      { type: "heading", text: "¿Qué es exactamente el cólico equino?" },
      {
        type: "paragraph",
        text: "El cólico equino es cualquier dolor abdominal en el caballo. Su sistema digestivo es extraordinariamente complejo y vulnerable: un tracto gastrointestinal de más de 30 metros que no puede vomitar y cuyo intestino grueso flota libremente en la cavidad abdominal, facilitando las torsiones. Además, el estrés, los cambios de alimentación o el ejercicio intenso pueden desencadenar episodios.",
      },
      { type: "heading", text: "Señales de alerta que debes reconocer" },
      {
        type: "list",
        items: [
          "Rascado del suelo con las manos y mirar repetidamente hacia los flancos.",
          "Intentos de echarse, revolcarse o dificultad para levantarse.",
          "Sudoración sin causa aparente o en zonas inusuales.",
          "Ausencia o reducción de ruidos intestinales (borborigmos) al escuchar con la oreja en el flanco.",
          "Falta de heces en las últimas horas.",
          "Distensión abdominal visible, especialmente en el flanco izquierdo.",
          "Frecuencia cardíaca elevada (más de 48 pulsaciones por minuto en reposo).",
          "Encías pálidas, azuladas o con tiempo de relleno capilar superior a 2 segundos.",
        ],
      },
      {
        type: "warning",
        label: "Llama inmediatamente",
        text: "Si el caballo tiene las encías azules o grises, frecuencia cardíaca superior a 60 ppm, se revuelca violentamente sin descanso o lleva más de 2 horas con dolor sin mejoría: es una emergencia. No esperes.",
      },
      { type: "heading", text: "Qué hacer antes de que llegue el veterinario" },
      {
        type: "list",
        items: [
          "Llama al veterinario inmediatamente y describe los síntomas con detalle (tiempo de evolución, frecuencia cardíaca, color de mucosas, presencia o ausencia de heces).",
          "Retira el pienso, el heno y el agua hasta que el veterinario lo indique.",
          "Mantén al caballo en movimiento suave (paseo al paso) si el dolor lo permite. Ayuda a movilizar el gas e intestino y previene los revolcones peligrosos.",
          "No administres analgésicos por tu cuenta sin indicación veterinaria: pueden enmascarar los síntomas y dificultar el diagnóstico.",
          "Anota la hora de inicio, los síntomas que observas y cualquier cambio reciente en la alimentación o el manejo.",
        ],
      },
      { type: "heading", text: "Prevención: los factores de riesgo más frecuentes" },
      {
        type: "list",
        items: [
          "Cambios bruscos de alimentación — realiza siempre transiciones de mínimo 7-10 días.",
          "Deshidratación — asegura acceso constante a agua limpia y fresca.",
          "Control parasitario deficiente — los parásitos dañan la mucosa intestinal.",
          "Trabajo intenso con el estómago lleno.",
          "Problemas dentales — interfieren con la masticación y provocan impactaciones.",
          "Pastos muy ricos en fructanos durante primavera y otoño.",
        ],
      },
      {
        type: "tip",
        label: "Consejo clave",
        text: "Ten siempre a mano el número de urgencias de tu veterinario equino y el de una clínica con capacidad quirúrgica. En un cólico quirúrgico, cada hora de retraso reduce significativamente las probabilidades de éxito.",
      },
    ],
  },

  {
    slug: "nutricion-perros-senior",
    category: "Perros",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Nutrición en perros senior: cómo adaptar la dieta a partir de los 7 años",
    excerpt:
      "Las necesidades nutricionales cambian con la edad. Proteínas de alta calidad, control del fósforo, articulaciones y peso: todo lo que debes ajustar en la dieta de tu perro mayor.",
    author: "Dra. Elena Martínez",
    authorRole: "Especialista en Pequeños Animales",
    date: "25 febrero 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Veterinaria con perro en consulta",
    content: [
      {
        type: "paragraph",
        text: "El envejecimiento en los perros no es un proceso uniforme: un Labrador de 7 años y un Chihuahua de 7 años están en etapas de vida completamente distintas. En general, las razas grandes envejecen antes (senior a partir de los 5-6 años), mientras que las razas pequeñas pueden no considerarse senior hasta los 10-12 años. Aun así, a partir de los 7 años todos los perros se benefician de una atención nutricional más específica.",
      },
      { type: "heading", text: "Cambios metabólicos que debes conocer" },
      {
        type: "list",
        items: [
          "Reducción del metabolismo basal: necesitan menos calorías para mantener el mismo peso.",
          "Pérdida de masa muscular (sarcopenia): requieren proteínas de alta calidad para mantener la musculatura.",
          "Menor eficiencia digestiva: algunos nutrientes se absorben con menor eficacia.",
          "Mayor tendencia al sobrepeso: el exceso de peso agrava la artritis y deteriora la función renal.",
          "Menor capacidad de filtración renal: los riñones pierden eficiencia con los años.",
        ],
      },
      { type: "heading", text: "Proteínas: ¿más o menos para un perro mayor?" },
      {
        type: "paragraph",
        text: "Existe un mito extendido que dice que los perros mayores deben comer menos proteína para proteger los riñones. Esto solo es cierto si el perro ya tiene enfermedad renal diagnosticada. En un perro senior sano, necesita más proteína de calidad, no menos, para combatir la pérdida de masa muscular. Lo que sí debe controlarse es el fósforo: busca dietas con buena fuente proteica y fósforo moderado.",
      },
      {
        type: "tip",
        label: "Clave nutricional",
        text: "Busca piensos senior con al menos un 25-28% de proteína bruta, con pollo, pescado o huevo como primera fuente proteica. Evita productos que prioricen cereales o harinas de carne de origen desconocido.",
      },
      { type: "heading", text: "Control de peso y salud articular" },
      {
        type: "paragraph",
        text: "El sobrepeso en perros mayores no es una cuestión estética: cada kilo de más supone una carga extra sobre las articulaciones ya desgastadas y acelera la progresión de la artrosis. Si tu perro mayor ha ganado peso, no reduzcas simplemente la cantidad de su pienso actual: lo más probable es que necesites cambiar a un alimento específicamente formulado para control de peso senior.",
      },
      {
        type: "paragraph",
        text: "Los suplementos de glucosamina y condroitina pueden ayudar a mantener la salud articular, aunque la evidencia científica varía según el caso. Consulta con tu veterinario si son adecuados para tu perro antes de añadirlos por tu cuenta.",
      },
      { type: "heading", text: "Hidratación: el gran olvidado" },
      {
        type: "paragraph",
        text: "Los perros mayores tienen menos sensación de sed y son más propensos a la deshidratación. Esto, combinado con la menor eficiencia renal, puede derivar en problemas urológicos. Si tu perro come principalmente pienso seco, considera hidratarlo con un poco de agua tibia o incorporar algo de alimentación húmeda en su dieta.",
      },
      { type: "heading", text: "¿Cuándo hacer el cambio al pienso senior?" },
      {
        type: "list",
        items: [
          "Razas gigantes (Pastor Alemán, Labrador, Golden): a partir de los 5-6 años.",
          "Razas medianas: a partir de los 7-8 años.",
          "Razas pequeñas y toy: a partir de los 9-10 años.",
          "Cualquier raza con enfermedad crónica diagnosticada: cuando el veterinario lo indique.",
        ],
      },
      {
        type: "paragraph",
        text: "Lo más importante es hacer el cambio de forma gradual (mezclando el pienso antiguo con el nuevo durante 7-10 días) y hacer un seguimiento del peso y el estado general cada 3-4 meses. En Centro Veterinario Mollina ofrecemos consultas de nutrición donde evaluamos cada caso de forma individual.",
      },
    ],
  },

  {
    slug: "gato-geriatrico",
    category: "Gatos",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "El gato geriátrico: cuidados especiales a partir de los 10 años",
    excerpt:
      "Los gatos mayores son más silenciosos con el dolor. Hipertiroidismo, enfermedad renal crónica, artritis y demencia felina: qué vigilar y cómo mejorar su calidad de vida en la última etapa.",
    author: "Dra. Elena Martínez",
    authorRole: "Especialista en Pequeños Animales",
    date: "12 febrero 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Gato mayor siendo atendido en el veterinario",
    content: [
      {
        type: "paragraph",
        text: "Los gatos modernos viven mucho más que hace unas décadas: no es raro ver gatos de 18 o 20 años con buena calidad de vida. Pero este aumento en la longevidad trae consigo una mayor prevalencia de enfermedades crónicas que, detectadas a tiempo, son perfectamente manejables. A partir de los 10 años, tu gato entra en la categoría geriátrica y merece una atención veterinaria adaptada a sus nuevas necesidades.",
      },
      { type: "heading", text: "Las enfermedades más frecuentes en gatos mayores" },
      {
        type: "list",
        items: [
          "Enfermedad renal crónica (ERC): afecta a más del 30% de los gatos mayores de 15 años. Los riñones pierden capacidad de filtración de forma progresiva, pero con dieta y tratamiento adecuados la evolución puede frenarse.",
          "Hipertiroidismo: la glándula tiroides produce hormonas en exceso, provocando pérdida de peso a pesar de comer mucho, hiperactividad, vómitos y arritmias. Muy tratable.",
          "Diabetes mellitus felina: el 80% de los gatos diabéticos son machos castrados con sobrepeso. Controlable con insulina y dieta baja en carbohidratos.",
          "Artrosis: mucho más común de lo que se cree. El gato que deja de saltar, es menos ágil o muestra rigidez al levantarse probablemente tiene dolor articular.",
          "Hipertensión arterial: frecuentemente secundaria a ERC o hipertiroidismo. Puede causar ceguera súbita si no se trata a tiempo.",
          "Disfunción cognitiva felina: similar al Alzheimer humano. El gato se desorienta, vocaliza de noche, cambia sus hábitos y muestra ansiedad sin causa aparente.",
        ],
      },
      { type: "heading", text: "Revisiones: más frecuentes a partir de los 10 años" },
      {
        type: "paragraph",
        text: "Un gato mayor de 10 años debería tener una revisión veterinaria completa cada 6 meses, no cada año. Esto incluye exploración física, control de peso, analítica de sangre y orina, y medición de la presión arterial. Muchas enfermedades geriátricas felinas son completamente asintomáticas en fases iniciales: solo una analítica rutinaria permite detectarlas a tiempo.",
      },
      {
        type: "tip",
        label: "Regla práctica",
        text: "Un año en la vida de un gato mayor de 10 años equivale aproximadamente a 4 años humanos. Revisarle una vez al año sería como ir al médico cada 4 años: demasiado poco para alguien de su edad.",
      },
      { type: "heading", text: "Manejo del dolor crónico" },
      {
        type: "paragraph",
        text: "El dolor en gatos mayores es sistemáticamente subestimado. Los gatos no vocalizan ni cojean de forma evidente como los perros; su respuesta al dolor es más silenciosa: se aíslan, dejan de acicalarse, comen menos o cambian su comportamiento. Si notas cualquiera de estos cambios, es señal de que algo no está bien.",
      },
      {
        type: "paragraph",
        text: "Actualmente disponemos de tratamientos seguros y efectivos para el dolor crónico felino: analgésicos específicos para gatos, terapia con láser y, más recientemente, anticuerpos monoclonales anti-NGF (Solensia) para la artrosis, administrados en inyección mensual.",
      },
      { type: "heading", text: "Cómo mejorar su calidad de vida en casa" },
      {
        type: "list",
        items: [
          "Facilita el acceso a sus zonas favoritas con rampas o escalones para que no tenga que saltar.",
          "Usa bandeja de arena con entrada baja — entrar en una bandeja alta puede ser doloroso con artrosis.",
          "Coloca más camas cómodas y cálidas en lugares de fácil acceso.",
          "Prioriza alimentación húmeda: más apetecible y más hidratante para los riñones.",
          "Estimulación cognitiva suave: juegos cortos, interacción diaria, rutinas estables.",
          "Comunica a tu veterinario cualquier cambio de comportamiento, aunque te parezca menor.",
        ],
      },
      {
        type: "paragraph",
        text: "Envejecer con dignidad y sin dolor es posible para un gato bien cuidado. En Centro Veterinario Mollina tenemos un protocolo geriátrico específico para felinos mayores, diseñado para detectar y tratar de forma precoz cualquier problema que pueda comprometer su bienestar.",
      },
    ],
  },
];
