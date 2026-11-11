import type { Locale } from "@/lib/i18n";
import { generatedTranslations } from "./generated-translations";

type TranslationMap = Record<string, string>;

const es: TranslationMap = {
  Home: "Inicio",
  About: "Acerca de",
  Solutions: "Soluciones",
  Resources: "Recursos",
  Careers: "Carreras",
  Contact: "Contacto",
  Legal: "Legal",
  "Schedule a Conversation": "Programar una conversación",
  "Explore Our Solutions": "Explorar nuestras soluciones",
  "View All Our Solutions": "Ver todas nuestras soluciones",
  "Read More": "Leer más",
  "Learn More": "Saber más",
  "Browse resources": "Explorar recursos",
  "Synora Legacy": "Synora Legacy",
  "Financial Education Shouldn’t Be a Privilege":
    "La educación financiera no debería ser un privilegio",
  "Helping individuals and families make informed financial decisions, protect what matters most, and prepare for tomorrow.":
    "Ayudamos a personas y familias a tomar decisiones financieras informadas, proteger lo que más importa y prepararse para el mañana.",
  "Education-first": "Educación primero",
  "Family protection": "Protección familiar",
  Retirement: "Jubilación",
  Introduction: "Introducción",
  "A calmer way to approach important financial decisions.":
    "Una forma más tranquila de abordar decisiones financieras importantes.",
  "Synora Legacy helps individuals and families explore protection, planning, retirement, education, and legacy questions with clarity. The work begins with listening, continues through education, and moves forward only when the next step makes sense.":
    "Synora Legacy ayuda a personas y familias a explorar con claridad temas de protección, planificación, jubilación, educación y legado. El trabajo comienza escuchando, continúa con educación y avanza solo cuando el siguiente paso tiene sentido.",
  "Why Synora Legacy": "Por qué Synora Legacy",
  "Guidance built around clarity, not pressure.":
    "Orientación basada en claridad, no en presión.",
  "The firm’s philosophy is simple: help people understand the choices in front of them and prepare with confidence.":
    "La filosofía de la firma es simple: ayudar a las personas a entender sus opciones y prepararse con confianza.",
  Protect: "Proteger",
  Plan: "Planificar",
  Educate: "Educar",
  Prepare: "Preparar",
  "Help protect the people, income, and assets that matter most.":
    "Ayudar a proteger a las personas, los ingresos y los activos que más importan.",
  "Develop thoughtful strategies around individual goals and priorities.":
    "Desarrollar estrategias cuidadosas en torno a metas y prioridades individuales.",
  "Explain financial concepts and choices in language people understand.":
    "Explicar conceptos y opciones financieras en un lenguaje fácil de entender.",
  "Help clients think beyond today and prepare for tomorrow.":
    "Ayudar a los clientes a pensar más allá de hoy y prepararse para mañana.",
  "Secured Solutions": "Soluciones de protección",
  "Featured financial solutions.": "Soluciones financieras destacadas.",
  "A focused starting point for protection, living benefits, retirement income, and final expense planning.":
    "Un punto de partida enfocado para protección, beneficios en vida, ingresos de jubilación y planificación de gastos finales.",
  "Our Approach": "Nuestro enfoque",
  "Understand first. Move forward when ready.":
    "Entender primero. Avanzar cuando esté listo.",
  Understand: "Entender",
  Strategize: "Crear estrategia",
  "Move Forward": "Avanzar",
  "Learn about the client’s goals, priorities, responsibilities, and concerns.":
    "Conocer las metas, prioridades, responsabilidades e inquietudes del cliente.",
  "Explain available options clearly so decisions feel informed, not rushed.":
    "Explicar las opciones disponibles con claridad para que las decisiones sean informadas, no apresuradas.",
  "Help evaluate appropriate strategies based on the client’s life stage and needs.":
    "Ayudar a evaluar estrategias apropiadas según la etapa de vida y las necesidades del cliente.",
  "Help the client take the next step when they are ready and comfortable.":
    "Ayudar al cliente a dar el siguiente paso cuando esté listo y cómodo.",
  "Education that supports better questions.":
    "Educación que ayuda a hacer mejores preguntas.",
  "A clean resource area helps visitors learn before they decide.":
    "Un área de recursos clara ayuda a los visitantes a aprender antes de decidir.",
  "Frequently Asked Questions": "Preguntas frecuentes",
  "Your Contract. Your Protection. Your Decision.":
    "Su contrato. Su protección. Su decisión.",
  "Insurance Carriers and Product Availability":
    "Compañías de seguros y disponibilidad de productos",
  "Simple, authentic reflections.": "Reflexiones simples y auténticas.",
  "Placeholder testimonials keep the layout ready for approved client quotes.":
    "Los testimonios de muestra mantienen el diseño listo para citas aprobadas de clientes.",
  Testimonials: "Testimonios",
  "Our Partners": "Nuestros socios",
  "Professional relationships, thoughtfully presented.":
    "Relaciones profesionales presentadas con cuidado.",
  "Conversation First": "Primero la conversación",
  "Start with a thoughtful conversation.":
    "Comience con una conversación cuidadosa.",
  "Bring your questions, priorities, and concerns. Synora Legacy will help you organize the next step with clarity.":
    "Traiga sus preguntas, prioridades e inquietudes. Synora Legacy le ayudará a organizar el siguiente paso con claridad.",
  "Term Life Insurance with Living Benefits":
    "Seguro de vida temporal con beneficios en vida",
  "IUL with Living Benefits": "IUL con beneficios en vida",
  "Indexed Universal Life with Living Benefits":
    "Vida universal indexada con beneficios en vida",
  "Return of Premium": "Devolución de prima",
  "Mortgage Protection": "Protección hipotecaria",
  "Income Protection": "Protección de ingresos",
  "Retirement Planning": "Planificación de jubilación",
  "Fixed Indexed Annuities": "Anualidades indexadas fijas",
  "College Planning": "Planificación universitaria",
  "Tax-Efficient Planning": "Planificación fiscalmente eficiente",
  "Legacy Planning": "Planificación de legado",
  "Estate & Probate": "Patrimonio y sucesión",
  "Estate & Probate Planning": "Planificación patrimonial y sucesoria",
  "Financial Gap Analysis": "Análisis de brechas financieras",
  "Final Expense": "Gastos finales",
  "Life insurance protection for a specified period, with certain policies offering living-benefit features.":
    "Protección de seguro de vida por un período determinado, con ciertas pólizas que ofrecen beneficios en vida.",
  "Permanent life insurance with death-benefit protection, cash-value potential, and certain living-benefit features depending on the policy.":
    "Seguro de vida permanente con protección por fallecimiento, potencial de valor en efectivo y ciertos beneficios en vida según la póliza.",
  "Permanent life insurance with death protection, cash value potential, and certain living benefits depending on the policy.":
    "Seguro de vida permanente con protección por fallecimiento, potencial de valor en efectivo y ciertos beneficios en vida según la póliza.",
  "Permanent protection with potential cash value.":
    "Protección permanente con potencial de valor en efectivo.",
  "Permanent protection with cash value potential.":
    "Protección permanente con potencial de valor en efectivo.",
  "Indexed Universal Life is a form of permanent life insurance.":
    "Indexed Universal Life es una forma de seguro de vida permanente.",
  "It provides a death benefit and may accumulate cash value.":
    "Proporciona un beneficio por fallecimiento y puede acumular valor en efectivo.",
  "Depending on the policy, interest credited to the cash value may be linked in part to an external market index.":
    "Según la póliza, los intereses acreditados al valor en efectivo pueden estar vinculados en parte a un índice de mercado externo.",
  "According to the policy, the interest credited to the cash value may be partly linked to an external market index.":
    "Según la póliza, los intereses acreditados al valor en efectivo pueden estar vinculados en parte a un índice de mercado externo.",
  "The policyholder does not directly invest in that index.":
    "El titular de la póliza no invierte directamente en ese índice.",
  "The policyholder does not invest directly in that index.":
    "El titular de la póliza no invierte directamente en ese índice.",
  "WHY DO PEOPLE CONSIDER IUL?": "POR QUÉ LAS PERSONAS CONSIDERAN IUL",
  "WHY PEOPLE CONSIDER IT IUL": "POR QUÉ LAS PERSONAS CONSIDERAN IUL",
  "WHY PEOPLE CONSIDER IUL": "POR QUÉ LAS PERSONAS CONSIDERAN IUL",
  "Depending on the policy and how it is designed, an IUL may be considered for:":
    "Según la póliza y cómo esté diseñada, una IUL puede considerarse para:",
  "Depending on the policy and how it is designed, an IUL can be considered for:":
    "Según la póliza y cómo esté diseñada, una IUL puede considerarse para:",
  "Cash-value accumulation.": "Acumulación de valor en efectivo.",
  "Accumulation of cash value.": "Acumulación de valor en efectivo.",
  "Potential living benefits.": "Posibles beneficios en vida.",
  "Potential benefits during life.": "Posibles beneficios en vida.",
  "Long-term family planning.": "Planificación familiar a largo plazo.",
  "Certain education or retirement strategies.":
    "Ciertas estrategias de educación o jubilación.",
  "The purpose should determine whether the strategy deserves consideration.":
    "El propósito debe determinar si la estrategia merece consideración.",
  "HOW DOES INDEXING WORK?": "CÓMO FUNCIONA LA INDEXACIÓN",
  "The policy may use an external index as part of an interest-crediting formula.":
    "La póliza puede usar un índice externo como parte de una fórmula de acreditación de intereses.",
  "The policy may use an external index as part of an interest accreditation formula.":
    "La póliza puede usar un índice externo como parte de una fórmula de acreditación de intereses.",
  "Important elements can include:":
    "Los elementos importantes pueden incluir:",
  "Important elements may include:":
    "Los elementos importantes pueden incluir:",
  "CAPS - A maximum interest-crediting rate under a particular method.":
    "TOPES: una tasa máxima de acreditación de intereses bajo un método particular.",
  "CAPS: maximum interest credit rate according to a particular method.":
    "TOPES: tasa máxima de acreditación de intereses según un método particular.",
  "PARTICIPATION RATES - The percentage of index performance used under a particular method.":
    "TASAS DE PARTICIPACIÓN: el porcentaje del rendimiento del índice usado bajo un método particular.",
  "PARTICIPATION RATES: the percentage return of the index used according to a particular method.":
    "TASAS DE PARTICIPACIÓN: el porcentaje del rendimiento del índice usado según un método particular.",
  "SPREADS - An amount that may affect the interest credited under certain methods.":
    "DIFERENCIALES: una cantidad que puede afectar el interés acreditado bajo ciertos métodos.",
  "SPREADS - An amount that can affect the interest credited under certain methods.":
    "DIFERENCIALES: una cantidad que puede afectar el interés acreditado bajo ciertos métodos.",
  "POLICY CHARGES - Insurance and other charges that affect policy values.":
    "CARGOS DE LA PÓLIZA: seguros y otros cargos que afectan los valores de la póliza.",
  "POLICY CHARGES: insurance and other charges that affect policy values.":
    "CARGOS DE LA PÓLIZA: seguros y otros cargos que afectan los valores de la póliza.",
  "These features vary by policy and carrier.":
    "Estas características varían según la póliza y la compañía aseguradora.",
  "These features vary depending on the policy and the provider.":
    "Estas características varían según la póliza y la compañía aseguradora.",
  "WHAT HAPPENS WHEN THE INDEX GOES DOWN?":
    "QUÉ PASA CUANDO EL ÍNDICE BAJA",
  "It provides a death benefit and can accumulate cash value.":
    "Proporciona un beneficio por fallecimiento y puede acumular valor en efectivo.",
  "Depending on the policy, interest credited to the cash value can be partly linked to an external market index.":
    "Dependiendo de la póliza, los intereses acreditados al valor en efectivo pueden estar vinculados en parte a un índice de mercado externo.",
  "The insured does not invest directly in that index.":
    "El asegurado no invierte directamente en ese índice.",
  "Under certain crediting methods, a negative index return may result in a zero index credit rather than a negative index credit.":
    "Bajo ciertos métodos de acreditación, un rendimiento negativo del índice puede resultar en un crédito de índice cero en lugar de un crédito negativo.",
  "That is an important feature.": "Esa es una característica importante.",
  "That's an important feature.": "Esa es una característica importante.",
  "But it should not be confused with having no risk.":
    "Pero no debe confundirse con no tener riesgo.",
  "But this should not be confused with having no risk.":
    "Pero esto no debe confundirse con no tener riesgo.",
  "Policy charges continue. Loans and withdrawals can affect values. Funding decisions and policy performance can affect sustainability.":
    "Los cargos de la póliza continúan. Los préstamos y retiros pueden afectar los valores. Las decisiones de financiamiento y el desempeño de la póliza pueden afectar su sostenibilidad.",
  "Certain IUL policies may provide living-benefit provisions or riders.":
    "Ciertas pólizas IUL pueden incluir disposiciones o cláusulas adicionales de beneficios en vida.",
  "When qualifying conditions are met, these may allow access to a portion of the death benefit while the insured is living.":
    "Cuando se cumplen las condiciones calificadas, estas pueden permitir acceder a una parte del beneficio por fallecimiento mientras el asegurado está vivo.",
  "The specific conditions and benefits depend on the contract.":
    "Las condiciones y beneficios específicos dependen del contrato.",
  "Depending on the policy, qualifying conditions may include certain critical, chronic, or terminal illnesses. The actual benefits, definitions, limitations, and requirements vary by policy and carrier.":
    "Según la póliza, las condiciones calificadas pueden incluir ciertas enfermedades críticas, crónicas o terminales. Los beneficios reales, definiciones, limitaciones y requisitos varían según la póliza y la compañía aseguradora.",
  "CASH VALUE AND POLICY ACCESS": "VALOR EN EFECTIVO Y ACCESO A LA PÓLIZA",
  "An IUL may accumulate cash value over time, depending on policy funding, interest credits, charges, and other contractual factors.":
    "Una IUL puede acumular valor en efectivo con el tiempo, según el financiamiento de la póliza, los créditos de intereses, los cargos y otros factores contractuales.",
  "Depending on the policy, available cash value may potentially be accessed through withdrawals or policy loans.":
    "Según la póliza, el valor en efectivo disponible puede accederse potencialmente mediante retiros o préstamos de la póliza.",
  "These transactions can reduce cash value and the death benefit and can affect whether the policy remains in force. Policy loans may also accrue interest.":
    "Estas transacciones pueden reducir el valor en efectivo y el beneficio por fallecimiento, y pueden afectar si la póliza permanece vigente. Los préstamos de la póliza también pueden acumular intereses.",
  "Understanding how policy values, charges, loans, withdrawals, and funding interact is important before using an IUL as part of a broader financial strategy.":
    "Es importante comprender cómo interactúan los valores de la póliza, los cargos, los préstamos, los retiros y el financiamiento antes de usar una IUL como parte de una estrategia financiera más amplia.",
  "Insurance contracts that may combine index-linked interest-crediting potential with contractual guarantees.":
    "Contratos de seguro que pueden combinar potencial de interés vinculado a un índice con garantías contractuales.",
  "An insurance contract designed for long-term planning.":
    "Un contrato de seguro diseñado para la planificación a largo plazo.",
  "College costs are rising. Your plan should be ready.":
    "Los costos universitarios están aumentando. Su plan debe estar preparado.",
  "Make financial decisions with taxes in mind.":
    "Tome decisiones financieras teniendo en cuenta los impuestos.",
  "Preserve what you have built. Plan for what comes next.":
    "Preserve lo que ha construido. Planifique lo que viene después.",
  "PRESERVE WHAT YOU'VE BUILT. PLAN FOR WHAT COMES NEXT.":
    "PRESERVE LO QUE HA CONSTRUIDO. PLANIFIQUE LO QUE VIENE DESPUÉS.",
  "A legacy can be financial. But it can also be the opportunities, protection, values, and choices you leave behind.":
    "Un legado puede ser financiero. Pero también puede incluir las oportunidades, la protección, los valores y las decisiones que deja atrás.",
  "WHAT COULD YOUR LEGACY INCLUDE?": "QUÉ PODRÍA INCLUIR SU LEGADO",
  "Family security.": "Seguridad familiar.",
  "Future generations.": "Futuras generaciones.",
  "Business interests.": "Intereses empresariales.",
  "Charitable giving.": "Donaciones caritativas.",
  "Retirement assets.": "Activos de jubilación.",
  "Property.": "Propiedad.",
  "Other financial resources.": "Otros recursos financieros.",
  "WHY PLAN EARLY?": "POR QUÉ PLANIFICAR CON ANTICIPACIÓN",
  "Without intentional planning, the transfer of assets can become more complicated for your family. Legacy planning gives you an opportunity to think about:":
    "Sin una planificación intencional, la transferencia de activos puede volverse más complicada para su familia. La planificación de legado le da la oportunidad de pensar en:",
  "Who receives what?": "Quién recibe qué?",
  "Understand your goals.": "Comprender sus objetivos.",
  "Identify financial considerations.": "Identificar consideraciones financieras.",
  "Coordinate with legal and tax professionals when appropriate.":
    "Coordinar con profesionales legales y fiscales cuando corresponda.",
  "Review your plan as circumstances change.":
    "Revisar su plan a medida que cambien las circunstancias.",
  "YOUR LEGACY SHOULD REFLECT WHAT MATTERS TO YOU.":
    "SU LEGADO DEBE REFLEJAR LO QUE IMPORTA PARA USTED.",
  "Make your wishes clear.": "Deje claros sus deseos.",
  "MAKE YOUR WISHES CLEAR": "DEJE CLAROS SUS DESEOS",
  "Know where you stand before you decide where to go.":
    "Sepa dónde se encuentra antes de decidir hacia dónde avanzar.",
  "KNOW WHERE YOU STAND BEFORE YOU DECIDE WHERE TO GO":
    "SEPA DÓNDE SE ENCUENTRA ANTES DE DECIDIR HACIA DÓNDE AVANZAR",
  "MAKE FINANCIAL DECISIONS WITH TAXES IN MIND":
    "TOME DECISIONES FINANCIERAS TENIENDO EN CUENTA LOS IMPUESTOS",
  "UNDERSTAND WHAT 'RETURN OF PREMIUM' REALLY MEANS":
    "ENTIENDA LO QUE REALMENTE SIGNIFICA LA DEVOLUCIÓN DE PRIMA",
  "WHAT DOES RETURN OF PREMIUM MEAN?":
    "QUÉ SIGNIFICA LA DEVOLUCIÓN DE PRIMA",
  "DIFFERENT CARRIERS. MORE OPTIONS.":
    "DIFERENTES COMPAÑÍAS. MÁS OPCIONES.",
  "Plan ahead. Help protect the people you love.":
    "Planifique con anticipación. Ayude a proteger a las personas que ama.",
  "Life insurance planning focused on helping loved ones address final financial responsibilities.":
    "Planificación de seguro de vida enfocada en ayudar a los seres queridos a cubrir responsabilidades financieras finales.",
  "Explore financial areas with an education-first guide.":
    "Explore áreas financieras con una guía que prioriza la educación.",
  "Synora Legacy helps clients review protection, planning, retirement, education, and legacy questions without pressure.":
    "Synora Legacy ayuda a los clientes a revisar temas de protección, planificación, jubilación, educación y legado sin presión.",
  Opportunity: "Oportunidad",
  "Career / Business Opportunity": "Carrera / Oportunidad de negocio",
  "Build a Business. Make an Impact.": "Construya un negocio. Genere impacto.",
  "This is not a job. It's a business.": "Esto no es un empleo. Es un negocio.",
  "Watch the 3-minute video": "Ver el video de 3 minutos",
  "Tell us about yourself": "Cuéntenos sobre usted",
  "Choose a time": "Elija una hora",
  "First name": "Nombre",
  "Last name": "Apellido",
  "Email address": "Correo electrónico",
  "Phone number": "Número de teléfono",
  "City of residence": "Ciudad de residencia",
  State: "Estado",
  "Conversation topic": "Tema de conversación",
  Message: "Mensaje",
  Sending: "Enviando",
  "Sending...": "Enviando...",
  "(optional)": "(opcional)",
  "Share any experience, questions, or goals you want to discuss.":
    "Comparta cualquier experiencia, pregunta o meta que desee conversar.",
  "selected. Exact time slots can be connected when Fred provides a booking calendar.":
    "seleccionado. Los horarios exactos se pueden conectar cuando Fred proporcione un calendario de reservas.",
  "Thank you. Your message has been sent to Synora Legacy.":
    "Gracias. Su mensaje ha sido enviado a Synora Legacy.",
  "Thank you. Your inquiry has been sent to Synora Legacy.":
    "Gracias. Su consulta ha sido enviada a Synora Legacy.",
  "Unable to send your message right now.":
    "No se puede enviar su mensaje en este momento.",
  "Unable to send your inquiry right now.":
    "No se puede enviar su consulta en este momento.",
  "Unable to send your message right now. Please try again or email Fred directly.":
    "No se puede enviar su mensaje en este momento. Inténtelo de nuevo o envíe un correo directamente a Fred.",
  "Unable to send your inquiry right now. Please try again or email Fred directly.":
    "No se puede enviar su consulta en este momento. Inténtelo de nuevo o envíe un correo directamente a Fred.",
  "Your message will be sent securely to Synora Legacy by email.":
    "Su mensaje se enviará de forma segura a Synora Legacy por correo electrónico.",
  "Calendar Booking": "Reserva de calendario",
  "Calendly is ready to connect.": "Calendly está listo para conectarse.",
  "Add Fred's Calendly event URL to":
    "Agregue la URL del evento de Calendly de Fred a",
  "and this area will display live available dates and times.":
    "y esta área mostrará las fechas y horas disponibles en vivo.",
  "Clear financial education for better conversations.":
    "Educación financiera clara para mejores conversaciones.",
  FAQ: "Preguntas frecuentes",
  FAQs: "Preguntas frecuentes",
  "Frequently asked questions.": "Preguntas frecuentes.",
  "Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how Synora Legacy works.":
    "Respuestas claras a preguntas comunes sobre protección, jubilación, educación, planificación de legado, seguros y cómo trabaja Synora Legacy.",
  "Still have a question?": "¿Todavía tiene una pregunta?",
  "Start with the topic that is on your mind. Synora Legacy can help organize the conversation from there.":
    "Comience con el tema que tiene en mente. Synora Legacy puede ayudarle a organizar la conversación desde ahí.",
  "Bring your questions into a conversation.":
    "Traiga sus preguntas a una conversación.",
  "Educational content is most helpful when it can be connected to your own priorities, timing, and concerns.":
    "El contenido educativo es más útil cuando puede conectarse con sus propias prioridades, tiempos e inquietudes.",
  "A conversation can help connect the educational overview to your priorities, questions, and timing.":
    "Una conversación puede ayudar a conectar la explicación educativa con sus prioridades, preguntas y tiempos.",
  "Approved legal and educational notices for the Synora Legacy website.":
    "Avisos legales y educativos aprobados para el sitio web de Synora Legacy.",
  "The Financial Concern": "La preocupación financiera",
  "Start by naming what needs attention.":
    "Comience identificando lo que necesita atención.",
  "Why It Matters": "Por qué importa",
  "How the Strategy Works": "Cómo funciona la estrategia",
  "Who May Benefit": "Quién puede beneficiarse",
  "Important Considerations": "Consideraciones importantes",
  "Frederick Solaga": "Frederick Solaga",
  "This is not a job. It&apos;s a business.":
    "Esto no es un empleo. Es un negocio.",
  "Privacy, terms, disclosures, and educational notices.":
    "Privacidad, términos, divulgaciones y avisos educativos.",
  "National Website Privacy Policy": "Política nacional de privacidad del sitio web",
  "Website Terms of Use": "Términos de uso del sitio web",
  "Licensing & Disclosures": "Licencias y divulgaciones",
  "Educational Content Disclaimer": "Aviso de contenido educativo",
  Navigation: "Navegación",
  "Social profiles coming soon": "Perfiles sociales próximamente",
  "Tax, legal, and investment questions should be reviewed with qualified professionals.":
    "Las preguntas fiscales, legales y de inversión deben revisarse con profesionales calificados.",
  "Privacy Policy / Terms / Required Disclosures":
    "Política de privacidad / Términos / Divulgaciones requeridas",
  "All rights reserved.": "Todos los derechos reservados.",
};

const fr: TranslationMap = {
  Home: "Accueil",
  About: "À propos",
  Solutions: "Solutions",
  Resources: "Ressources",
  Careers: "Carrières",
  Contact: "Contact",
  Legal: "Mentions légales",
  "Schedule a Conversation": "Planifier une conversation",
  "Explore Our Solutions": "Explorer nos solutions",
  "View All Our Solutions": "Voir toutes nos solutions",
  "Read More": "Lire la suite",
  "Learn More": "En savoir plus",
  "Browse resources": "Parcourir les ressources",
  "Synora Legacy": "Synora Legacy",
  "Financial Education Shouldn’t Be a Privilege":
    "L’éducation financière ne devrait pas être un privilège",
  "Helping individuals and families make informed financial decisions, protect what matters most, and prepare for tomorrow.":
    "Aider les particuliers et les familles à prendre des décisions financières éclairées, à protéger ce qui compte le plus et à préparer demain.",
  "Education-first": "L’éducation d’abord",
  "Family protection": "Protection familiale",
  Retirement: "Retraite",
  Introduction: "Introduction",
  "A calmer way to approach important financial decisions.":
    "Une façon plus sereine d’aborder les décisions financières importantes.",
  "Synora Legacy helps individuals and families explore protection, planning, retirement, education, and legacy questions with clarity. The work begins with listening, continues through education, and moves forward only when the next step makes sense.":
    "Synora Legacy aide les particuliers et les familles à explorer avec clarté les questions de protection, de planification, de retraite, d’éducation et de transmission. Le travail commence par l’écoute, se poursuit par l’éducation et avance seulement lorsque l’étape suivante a du sens.",
  "Why Synora Legacy": "Pourquoi Synora Legacy",
  "Guidance built around clarity, not pressure.":
    "Un accompagnement fondé sur la clarté, pas sur la pression.",
  "The firm’s philosophy is simple: help people understand the choices in front of them and prepare with confidence.":
    "La philosophie de la firme est simple : aider les personnes à comprendre leurs options et à se préparer avec confiance.",
  Protect: "Protéger",
  Plan: "Planifier",
  Educate: "Éduquer",
  Prepare: "Préparer",
  "Help protect the people, income, and assets that matter most.":
    "Aider à protéger les personnes, les revenus et les actifs qui comptent le plus.",
  "Develop thoughtful strategies around individual goals and priorities.":
    "Développer des stratégies réfléchies autour des objectifs et priorités individuels.",
  "Explain financial concepts and choices in language people understand.":
    "Expliquer les concepts et choix financiers dans un langage compréhensible.",
  "Help clients think beyond today and prepare for tomorrow.":
    "Aider les clients à penser au-delà d’aujourd’hui et à préparer demain.",
  "Secured Solutions": "Solutions de protection",
  "Featured financial solutions.": "Solutions financières mises en avant.",
  "A focused starting point for protection, living benefits, retirement income, and final expense planning.":
    "Un point de départ ciblé pour la protection, les prestations du vivant, le revenu de retraite et la planification des frais finaux.",
  "Our Approach": "Notre approche",
  "Understand first. Move forward when ready.":
    "Comprendre d’abord. Avancer quand vous êtes prêt.",
  Understand: "Comprendre",
  Strategize: "Élaborer une stratégie",
  "Move Forward": "Avancer",
  "Learn about the client’s goals, priorities, responsibilities, and concerns.":
    "Comprendre les objectifs, priorités, responsabilités et préoccupations du client.",
  "Explain available options clearly so decisions feel informed, not rushed.":
    "Expliquer clairement les options disponibles afin que les décisions soient éclairées, non précipitées.",
  "Help evaluate appropriate strategies based on the client’s life stage and needs.":
    "Aider à évaluer les stratégies appropriées selon l’étape de vie et les besoins du client.",
  "Help the client take the next step when they are ready and comfortable.":
    "Aider le client à franchir l’étape suivante lorsqu’il est prêt et à l’aise.",
  "Education that supports better questions.":
    "Une éducation qui aide à poser de meilleures questions.",
  "A clean resource area helps visitors learn before they decide.":
    "Un espace de ressources clair aide les visiteurs à apprendre avant de décider.",
  "Frequently Asked Questions": "Questions fréquentes",
  "Your Contract. Your Protection. Your Decision.":
    "Votre contrat. Votre protection. Votre décision.",
  "Insurance Carriers and Product Availability":
    "Compagnies d’assurance et disponibilité des produits",
  "Simple, authentic reflections.": "Des réflexions simples et authentiques.",
  "Placeholder testimonials keep the layout ready for approved client quotes.":
    "Des témoignages provisoires gardent la mise en page prête pour des citations approuvées.",
  Testimonials: "Témoignages",
  "Our Partners": "Nos partenaires",
  "Professional relationships, thoughtfully presented.":
    "Des relations professionnelles présentées avec soin.",
  "Conversation First": "La conversation d’abord",
  "Start with a thoughtful conversation.":
    "Commencez par une conversation réfléchie.",
  "Bring your questions, priorities, and concerns. Synora Legacy will help you organize the next step with clarity.":
    "Apportez vos questions, priorités et préoccupations. Synora Legacy vous aidera à organiser la prochaine étape avec clarté.",
  "Term Life Insurance with Living Benefits":
    "Assurance vie temporaire avec prestations du vivant",
  "Protect today. Prepare for the unexpected.":
    "Protégez aujourd’hui. Préparez-vous à l’imprévu.",
  "Permanent protection with cash-value potential.":
    "Une protection permanente avec un potentiel de valeur de rachat.",
  "Permanent protection with potential cash value.":
    "Une protection permanente avec un potentiel de valeur de rachat.",
  "Permanent protection with cash value potential.":
    "Une protection permanente avec un potentiel de valeur de rachat.",
  "Understand what return of premium really means.":
    "Comprendre ce que signifie réellement le remboursement des primes.",
  "Protect the income that supports your life.":
    "Protégez le revenu qui soutient votre mode de vie.",
  "Prepare for the life you want to live.":
    "Préparez-vous à la vie que vous souhaitez vivre.",
  "An insurance contract designed for long-term planning.":
    "Un contrat d’assurance conçu pour la planification à long terme.",
  "College costs are rising. Your plan should be ready.":
    "Les coûts des études augmentent. Votre plan devrait être prêt.",
  "Make financial decisions with taxes in mind.":
    "Prenez des décisions financières en tenant compte des impôts.",
  "Preserve what you have built. Plan for what comes next.":
    "Préservez ce que vous avez bâti. Planifiez la suite.",
  "Make your wishes clear.": "Rendez vos volontés claires.",
  "MAKE YOUR WISHES CLEAR": "RENDEZ VOS VOLONTÉS CLAIRES",
  "Know where you stand before you decide where to go.":
    "Sachez où vous en êtes avant de décider où aller.",
  "KNOW WHERE YOU STAND BEFORE YOU DECIDE WHERE TO GO":
    "SACHEZ OÙ VOUS EN ÊTES AVANT DE DÉCIDER OÙ ALLER",
  "MAKE FINANCIAL DECISIONS WITH TAXES IN MIND":
    "PRENEZ DES DÉCISIONS FINANCIÈRES EN TENANT COMPTE DES IMPÔTS",
  "UNDERSTAND WHAT 'RETURN OF PREMIUM' REALLY MEANS":
    "COMPRENEZ CE QUE SIGNIFIE RÉELLEMENT LE REMBOURSEMENT DE PRIME",
  "WHAT DOES RETURN OF PREMIUM MEAN?":
    "QUE SIGNIFIE LE REMBOURSEMENT DE PRIME",
  "DIFFERENT CARRIERS. MORE OPTIONS.":
    "DIFFÉRENTS ASSUREURS. PLUS D’OPTIONS.",
  "Plan ahead. Help protect the people you love.":
    "Planifiez à l’avance. Aidez à protéger les personnes que vous aimez.",
  INTRODUCTION: "INTRODUCTION",
  "Term life insurance generally provides life insurance protection for a specified period of time.":
    "L’assurance vie temporaire offre généralement une protection d’assurance vie pour une période déterminée.",
  "It can be useful when you have significant financial responsibilities that need protection, such as raising children, paying a mortgage, replacing income, funding education, or managing other household obligations.":
    "Elle peut être utile lorsque vous avez des responsabilités financières importantes à protéger, comme élever des enfants, payer un prêt hypothécaire, remplacer un revenu, financer des études ou gérer d’autres obligations du foyer.",
  "Certain term life insurance policies may also offer living-benefit or accelerated-death-benefit features that can allow you to access a portion of the death benefit while you are still living if specific qualifying conditions are met.":
    "Certaines polices d’assurance vie temporaire peuvent aussi offrir des prestations du vivant ou des prestations de décès accélérées permettant d’accéder à une partie du capital décès de votre vivant si certaines conditions admissibles sont remplies.",
  "WHY TERM LIFE INSURANCE?": "POURQUOI L’ASSURANCE VIE TEMPORAIRE ?",
  "Term life insurance can provide straightforward protection during the years when your financial responsibilities may be greatest.":
    "L’assurance vie temporaire peut offrir une protection simple pendant les années où vos responsabilités financières peuvent être les plus importantes.",
  "It may help protect:": "Elle peut aider à protéger :",
  "Family income": "Le revenu familial",
  "Mortgage obligations": "Les obligations hypothécaires",
  "Education goals": "Les objectifs d’éducation",
  "Household expenses": "Les dépenses du foyer",
  "Outstanding debts": "Les dettes en cours",
  "Other financial responsibilities": "D’autres responsabilités financières",
  "Term life insurance generally does not build cash value in the same way permanent life insurance does.":
    "L’assurance vie temporaire ne crée généralement pas de valeur de rachat de la même manière qu’une assurance vie permanente.",
  "The purpose is primarily protection for a defined period.":
    "Son objectif principal est d’offrir une protection pendant une période définie.",
  "LIVING BENEFITS": "PRESTATIONS DU VIVANT",
  "One important feature of certain life insurance policies is the potential to access a portion of the death benefit while you are still living if you experience a qualifying medical condition.":
    "Une caractéristique importante de certaines polices d’assurance vie est la possibilité d’accéder à une partie du capital décès de votre vivant si vous êtes atteint d’un problème médical admissible.",
  "These features are commonly referred to as living benefits or accelerated death benefits.":
    "Ces caractéristiques sont souvent appelées prestations du vivant ou prestations de décès accélérées.",
  "The exact benefits, qualifying conditions, amount available, and requirements depend on the specific policy and rider.":
    "Les prestations exactes, les conditions d’admissibilité, le montant disponible et les exigences dépendent de la police et de l’avenant concernés.",
  "HOW LIVING BENEFITS CAN PROVIDE ACCESS WHILE YOU'RE ALIVE":
    "COMMENT LES PRESTATIONS DU VIVANT PEUVENT DONNER ACCÈS À DES FONDS DE VOTRE VIVANT",
  "Serious illness can create financial pressure at a time when your focus should be on your health and recovery.":
    "Une maladie grave peut créer une pression financière à un moment où votre attention devrait être portée sur votre santé et votre rétablissement.",
  "Depending on the policy, certain living-benefit provisions may allow an eligible policyholder to accelerate a portion of the death benefit while still living.":
    "Selon la police, certaines dispositions de prestations du vivant peuvent permettre à un titulaire admissible d’accélérer une partie du capital décès de son vivant.",
  "The money may potentially be used for needs such as medical expenses, caregiving, household expenses, mortgage payments, or replacing lost income, subject to the policy terms and applicable requirements.":
    "Les fonds peuvent éventuellement être utilisés pour des besoins comme les frais médicaux, les soins, les dépenses du foyer, les paiements hypothécaires ou le remplacement d’un revenu perdu, sous réserve des modalités de la police et des exigences applicables.",
  "These benefits are not automatic. The policy must include the applicable provision or rider, and the insured must meet the policy's definition and qualifying requirements.":
    "Ces prestations ne sont pas automatiques. La police doit inclure la disposition ou l’avenant applicable, et l’assuré doit satisfaire à la définition et aux exigences d’admissibilité prévues par la police.",
  "TERMINAL ILLNESS": "MALADIE TERMINALE",
  "Terminal illness benefits may apply when an insured person is diagnosed with a qualifying terminal illness as defined by the policy.":
    "Les prestations en cas de maladie terminale peuvent s’appliquer lorsqu’une personne assurée reçoit un diagnostic de maladie terminale admissible selon la définition de la police.",
  "If the policy requirements are satisfied, a portion of the death benefit may be accelerated and paid while the insured is living.":
    "Si les exigences de la police sont remplies, une partie du capital décès peut être accélérée et versée pendant que l’assuré est vivant.",
  "The policy determines the definition of terminal illness, the required medical certification, the amount available, and other conditions.":
    "La police détermine la définition de maladie terminale, la certification médicale requise, le montant disponible et les autres conditions.",
  "CHRONIC ILLNESS": "MALADIE CHRONIQUE",
  "Chronic illness benefits may apply when an insured person meets the policy's definition of chronic illness.":
    "Les prestations en cas de maladie chronique peuvent s’appliquer lorsqu’une personne assurée répond à la définition de maladie chronique prévue par la police.",
  "Depending on the policy, this may involve being unable to perform a specified number of activities of daily living, such as bathing, dressing, eating, transferring, toileting, or maintaining continence, or experiencing certain cognitive impairments.":
    "Selon la police, cela peut inclure l’incapacité d’accomplir un nombre déterminé d’activités de la vie quotidienne, comme se laver, s’habiller, manger, se transférer, utiliser les toilettes ou maintenir la continence, ou encore la présence de certains troubles cognitifs.",
  "The specific definition and requirements vary by policy.":
    "La définition précise et les exigences varient selon la police.",
  "CRITICAL ILLNESS": "MALADIE GRAVE",
  "Some life insurance policies or riders may provide benefits when the insured experiences a specified critical illness or medical event.":
    "Certaines polices ou certains avenants d’assurance vie peuvent prévoir des prestations lorsque l’assuré subit une maladie grave ou un événement médical précis.",
  "Depending on the policy, qualifying conditions may include certain types of cancer, heart attack, stroke, or other serious medical conditions specifically listed in the policy.":
    "Selon la police, les conditions admissibles peuvent inclure certains types de cancer, une crise cardiaque, un AVC ou d’autres problèmes médicaux graves spécifiquement énumérés dans la police.",
  "Not every policy covers the same conditions, and definitions and requirements vary.":
    "Toutes les polices ne couvrent pas les mêmes conditions, et les définitions ainsi que les exigences varient.",
  "HOW MUCH COULD BE ACCESSED?": "QUEL MONTANT POURRAIT ÊTRE ACCESSIBLE ?",
  "The amount available depends on the policy, rider, qualifying condition, and other factors.":
    "Le montant disponible dépend de la police, de l’avenant, de la condition admissible et d’autres facteurs.",
  "Some policies may allow access to a substantial portion of the eligible death benefit. In certain policies, the amount may be as much as 90% of the eligible death benefit under specific qualifying conditions.":
    "Certaines polices peuvent permettre d’accéder à une partie importante du capital décès admissible. Dans certaines polices, le montant peut atteindre jusqu’à 90 % du capital décès admissible sous réserve de conditions particulières.",
  "Other policies may provide a lower percentage or a specific dollar amount.":
    "D’autres polices peuvent prévoir un pourcentage inférieur ou un montant déterminé.",
  "For example, if a $500,000 policy allowed a 90% acceleration and all requirements were satisfied, the potential accelerated amount could be up to $450,000.":
    "Par exemple, si une police de 500 000 $ permettait une accélération de 90 % et que toutes les exigences étaient remplies, le montant accéléré potentiel pourrait atteindre 450 000 $.",
  "The actual amount available is determined by the policy and may be affected by policy provisions, outstanding loans, fees, benefit calculations, and other factors.":
    "Le montant réel disponible est déterminé par la police et peut être influencé par ses dispositions, les prêts en cours, les frais, les calculs de prestations et d’autres facteurs.",
  "WHAT HAPPENS TO THE DEATH BENEFIT?": "QU’ARRIVE-T-IL AU CAPITAL DÉCÈS ?",
  "Living benefits are generally an acceleration of the death benefit rather than additional money added to the policy.":
    "Les prestations du vivant constituent généralement une accélération du capital décès plutôt qu’un montant supplémentaire ajouté à la police.",
  "Accessing a portion of the death benefit generally reduces the amount that remains available to beneficiaries.":
    "L’accès à une partie du capital décès réduit généralement le montant qui demeure disponible pour les bénéficiaires.",
  "$500,000 original death benefit": "Capital décès initial de 500 000 $",
  "$450,000 accelerated while living": "450 000 $ accélérés du vivant",
  "$50,000 remaining death benefit": "Capital décès restant de 50 000 $",
  "The actual calculation will depend on the policy and the circumstances surrounding the benefit.":
    "Le calcul réel dépendra de la police et des circonstances entourant la prestation.",
  "WHO MIGHT CONSIDER TERM LIFE INSURANCE?":
    "QUI POURRAIT ENVISAGER L’ASSURANCE VIE TEMPORAIRE ?",
  "Term life insurance may be worth exploring if you:":
    "L’assurance vie temporaire peut mériter d’être explorée si vous :",
  "Have young children or dependents": "Avez de jeunes enfants ou des personnes à charge",
  "Have a household that depends on one or two incomes":
    "Avez un foyer qui dépend d’un ou de deux revenus",
  "Have a mortgage or significant financial obligations":
    "Avez un prêt hypothécaire ou des obligations financières importantes",
  "Want protection during specific working years":
    "Souhaitez une protection pendant certaines années de travail",
  "Want to help protect your family's financial stability if you die unexpectedly":
    "Souhaitez aider à protéger la stabilité financière de votre famille en cas de décès inattendu",
  "QUESTIONS TO CONSIDER": "QUESTIONS À CONSIDÉRER",
  "Before choosing coverage, consider:": "Avant de choisir une couverture, réfléchissez à ces questions :",
  "How much life insurance protection does my family need?":
    "De quel montant de protection d’assurance vie ma famille a-t-elle besoin ?",
  "How long should the coverage last?": "Combien de temps la couverture devrait-elle durer ?",
  "Who depends on my income?": "Qui dépend de mon revenu ?",
  "What financial obligations would remain if I died?":
    "Quelles obligations financières resteraient si je décédais ?",
  "Does the policy include living-benefit features?":
    "La police comprend-elle des prestations du vivant ?",
  "What illnesses or conditions qualify?":
    "Quelles maladies ou conditions sont admissibles ?",
  "How much of the death benefit could potentially be accessed?":
    "Quelle partie du capital décès pourrait éventuellement être accessible ?",
  "What would remain for my beneficiaries after an accelerated benefit?":
    "Que resterait-il pour mes bénéficiaires après une prestation accélérée ?",
  "PROTECTION SHOULD HAVE A PURPOSE.": "LA PROTECTION DEVRAIT AVOIR UN OBJECTIF.",
  "Understanding your options can help you make a more informed decision about protecting the people and responsibilities that matter most.":
    "Comprendre vos options peut vous aider à prendre une décision plus éclairée pour protéger les personnes et les responsabilités qui comptent le plus.",
  "IUL with Living Benefits": "IUL avec prestations du vivant",
  "Indexed Universal Life with Living Benefits":
    "Assurance vie universelle indexée avec prestations du vivant",
  "Return of Premium": "Remboursement des primes",
  "Mortgage Protection": "Protection hypothécaire",
  "Income Protection": "Protection du revenu",
  "Retirement Planning": "Planification de la retraite",
  "Fixed Indexed Annuities": "Rentes indexées fixes",
  "College Planning": "Planification des études",
  "Tax-Efficient Planning": "Planification fiscalement efficace",
  "Legacy Planning": "Planification successorale",
  "Estate & Probate": "Patrimoine et homologation",
  "Estate & Probate Planning": "Planification patrimoniale et successorale",
  "Financial Gap Analysis": "Analyse des écarts financiers",
  "Final Expense": "Frais finaux",
  "Life insurance protection for a specified period, with certain policies offering living-benefit features.":
    "Protection d’assurance vie pour une période déterminée, certaines polices offrant des prestations du vivant.",
  "Permanent life insurance with death-benefit protection, cash-value potential, and certain living-benefit features depending on the policy.":
    "Assurance vie permanente avec protection en cas de décès, potentiel de valeur de rachat et certaines prestations du vivant selon la police.",
  "Permanent life insurance with death protection, cash value potential, and certain living benefits depending on the policy.":
    "Assurance vie permanente avec protection en cas de décès, potentiel de valeur de rachat et certaines prestations du vivant selon la police.",
  "Indexed Universal Life is a form of permanent life insurance.":
    "L’assurance vie universelle indexée est une forme d’assurance vie permanente.",
  "It provides a death benefit and may accumulate cash value.":
    "Elle offre une prestation de décès et peut accumuler une valeur de rachat.",
  "Depending on the policy, interest credited to the cash value may be linked in part to an external market index.":
    "Selon la police, les intérêts crédités à la valeur de rachat peuvent être liés en partie à un indice de marché externe.",
  "The policyholder does not directly invest in that index.":
    "Le titulaire de la police n’investit pas directement dans cet indice.",
  "WHY DO PEOPLE CONSIDER IUL?": "POURQUOI ENVISAGER UNE IUL",
  "Depending on the policy and how it is designed, an IUL may be considered for:":
    "Selon la police et sa conception, une IUL peut être envisagée pour :",
  "Cash-value accumulation.": "Accumulation de valeur de rachat.",
  "Potential living benefits.": "Prestations du vivant potentielles.",
  "Long-term family planning.": "Planification familiale à long terme.",
  "Certain education or retirement strategies.":
    "Certaines stratégies d’éducation ou de retraite.",
  "The purpose should determine whether the strategy deserves consideration.":
    "L’objectif doit déterminer si la stratégie mérite d’être envisagée.",
  "HOW DOES INDEXING WORK?": "COMMENT FONCTIONNE L’INDEXATION",
  "The policy may use an external index as part of an interest-crediting formula.":
    "La police peut utiliser un indice externe dans le cadre d’une formule de crédit d’intérêts.",
  "Important elements can include:":
    "Les éléments importants peuvent inclure :",
  "It provides a death benefit and can accumulate cash value.":
    "Elle offre une prestation de décès et peut accumuler une valeur de rachat.",
  "Depending on the policy, interest credited to the cash value can be partly linked to an external market index.":
    "Selon la police, les intérêts crédités à la valeur de rachat peuvent être en partie liés à un indice de marché externe.",
  "The insured does not invest directly in that index.":
    "L’assuré n’investit pas directement dans cet indice.",
  "Insurance contracts that may combine index-linked interest-crediting potential with contractual guarantees.":
    "Contrats d’assurance pouvant combiner un potentiel d’intérêt lié à un indice avec des garanties contractuelles.",
  "Life insurance planning focused on helping loved ones address final financial responsibilities.":
    "Planification d’assurance vie visant à aider les proches à faire face aux responsabilités financières finales.",
  "Explore financial areas with an education-first guide.":
    "Explorez les domaines financiers avec un guide axé sur l’éducation.",
  "Synora Legacy helps clients review protection, planning, retirement, education, and legacy questions without pressure.":
    "Synora Legacy aide les clients à examiner sans pression les questions de protection, de planification, de retraite, d’éducation et de transmission.",
  "PRESERVE WHAT YOU'VE BUILT. PLAN FOR WHAT COMES NEXT.":
    "PRÉSERVEZ CE QUE VOUS AVEZ BÂTI. PRÉPAREZ CE QUI VIENT ENSUITE.",
  "A legacy can be financial. But it can also be the opportunities, protection, values, and choices you leave behind.":
    "Un héritage peut être financier. Il peut aussi inclure les occasions, la protection, les valeurs et les choix que vous laissez derrière vous.",
  "WHAT COULD YOUR LEGACY INCLUDE?": "QUE POURRAIT INCLURE VOTRE HÉRITAGE",
  "Family security.": "Sécurité familiale.",
  "Future generations.": "Générations futures.",
  "Business interests.": "Intérêts commerciaux.",
  "Charitable giving.": "Dons caritatifs.",
  "Retirement assets.": "Actifs de retraite.",
  "Property.": "Biens immobiliers.",
  "Other financial resources.": "Autres ressources financières.",
  "WHY PLAN EARLY?": "POURQUOI PLANIFIER TÔT",
  "Without intentional planning, the transfer of assets can become more complicated for your family. Legacy planning gives you an opportunity to think about:":
    "Sans planification intentionnelle, le transfert des actifs peut devenir plus compliqué pour votre famille. La planification successorale vous donne l’occasion de réfléchir à :",
  "Who receives what?": "Qui reçoit quoi?",
  "Understand your goals.": "Comprendre vos objectifs.",
  "Identify financial considerations.": "Identifier les considérations financières.",
  "Coordinate with legal and tax professionals when appropriate.":
    "Coordonner avec des professionnels juridiques et fiscaux lorsque cela est approprié.",
  "Review your plan as circumstances change.":
    "Réviser votre plan lorsque les circonstances changent.",
  "YOUR LEGACY SHOULD REFLECT WHAT MATTERS TO YOU.":
    "VOTRE HÉRITAGE DEVRAIT REFLÉTER CE QUI COMPTE POUR VOUS.",
  Opportunity: "Opportunité",
  "Career / Business Opportunity": "Carrière / Opportunité d’affaires",
  "Build a Business. Make an Impact.": "Construisez une entreprise. Créez un impact.",
  "This is not a job. It's a business.": "Ce n’est pas un emploi. C’est une entreprise.",
  "Watch the 3-minute video": "Regarder la vidéo de 3 minutes",
  "Tell us about yourself": "Parlez-nous de vous",
  "Choose a time": "Choisissez une heure",
  "First name": "Prénom",
  "Last name": "Nom",
  "Email address": "Adresse courriel",
  "Phone number": "Numéro de téléphone",
  "City of residence": "Ville de résidence",
  State: "État",
  "Conversation topic": "Sujet de conversation",
  Message: "Message",
  Sending: "Envoi",
  "Sending...": "Envoi...",
  "Your message will be sent securely to Synora Legacy by email.":
    "Votre message sera envoyé en toute sécurité à Synora Legacy par courriel.",
  "Clear financial education for better conversations.":
    "Une éducation financière claire pour de meilleures conversations.",
  FAQ: "FAQ",
  FAQs: "FAQ",
  "Frequently asked questions.": "Questions fréquemment posées.",
  "Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how Synora Legacy works.":
    "Des réponses claires aux questions courantes sur la protection, la retraite, l’éducation, la planification successorale, l’assurance et la façon dont Synora Legacy travaille.",
  "Still have a question?": "Vous avez encore une question ?",
  "Start with the topic that is on your mind. Synora Legacy can help organize the conversation from there.":
    "Commencez par le sujet qui vous préoccupe. Synora Legacy peut vous aider à organiser la conversation à partir de là.",
  "Bring your questions into a conversation.":
    "Apportez vos questions dans une conversation.",
  "Educational content is most helpful when it can be connected to your own priorities, timing, and concerns.":
    "Le contenu éducatif est le plus utile lorsqu’il peut être relié à vos priorités, à votre calendrier et à vos préoccupations.",
  "A conversation can help connect the educational overview to your priorities, questions, and timing.":
    "Une conversation peut aider à relier l’aperçu éducatif à vos priorités, à vos questions et à votre calendrier.",
  "Approved legal and educational notices for the Synora Legacy website.":
    "Avis juridiques et éducatifs approuvés pour le site Web de Synora Legacy.",
  "The Financial Concern": "La préoccupation financière",
  "Start by naming what needs attention.":
    "Commencez par nommer ce qui mérite votre attention.",
  "Why It Matters": "Pourquoi c’est important",
  "How the Strategy Works": "Comment fonctionne la stratégie",
  "Who May Benefit": "Qui peut en bénéficier",
  "Important Considerations": "Considérations importantes",
  "Frederick Solaga": "Frederick Solaga",
  "This is not a job. It&apos;s a business.":
    "Ce n’est pas un emploi. C’est une entreprise.",
  "Privacy, terms, disclosures, and educational notices.":
    "Confidentialité, conditions, divulgations et avis éducatifs.",
  "About Synora Legacy": "À propos de Synora Legacy",
  "Financial guidance shaped by education, care, and clarity.":
    "Une orientation financière façonnée par l’éducation, l’attention et la clarté.",
  "Synora Legacy helps individuals and families approach important financial choices with calm, organized conversations.":
    "Synora Legacy aide les particuliers et les familles à aborder les décisions financières importantes au moyen de conversations calmes et organisées.",
  Philosophy: "Philosophie",
  "A professional firm with a human way of explaining things.":
    "Une firme professionnelle avec une façon humaine d’expliquer les choses.",
  "Synora Legacy exists for people who want to understand their options before making financial decisions. The firm’s role is to listen, educate, and help families think clearly about protection, preparation, and long-term priorities.":
    "Synora Legacy existe pour les personnes qui veulent comprendre leurs options avant de prendre des décisions financières. Le rôle de la firme est d’écouter, d’éduquer et d’aider les familles à réfléchir clairement à la protection, à la préparation et aux priorités à long terme.",
  "Every conversation begins with the client’s goals and concerns. From there, the work is to explain financial concepts in plain language and help evaluate strategies that may fit the situation.":
    "Chaque conversation commence par les objectifs et les préoccupations du client. À partir de là, le travail consiste à expliquer les concepts financiers dans un langage simple et à aider à évaluer les stratégies qui peuvent convenir à la situation.",
  "Founder & CEO, Synora Legacy": "Fondateur et PDG, Synora Legacy",
  "Accessible education": "Éducation accessible",
  "Better questions": "De meilleures questions",
  "Family conversations": "Conversations familiales",
  "Why Synora Legacy Exists": "Pourquoi Synora Legacy existe",
  "Financial education should be accessible to everyone.":
    "L’éducation financière devrait être accessible à tous.",
  "“Synora Legacy was created to make financial education and understanding accessible to everyone.”":
    "« Synora Legacy a été créée pour rendre l’éducation et la compréhension financières accessibles à tous. »",
  "For generations, financial education has been taught at the kitchen table—but too often, that table belonged to the wealthy.":
    "Depuis des générations, l’éducation financière se transmet autour de la table familiale, mais trop souvent, cette table appartenait aux plus fortunés.",
  "It's where conversations about money, protection, wealth, and the future were shared and passed from one generation to the next.":
    "C’est là que les conversations sur l’argent, la protection, le patrimoine et l’avenir se partageaient et se transmettaient d’une génération à l’autre.",
  "Synora Legacy was created to change that—to make financial education and understanding accessible to everyone.":
    "Synora Legacy a été créée pour changer cela, afin de rendre l’éducation et la compréhension financières accessibles à tous.",
  "We believe education is more than simply having information. It's about understanding your options, asking better questions, and gaining the confidence to make informed decisions.":
    "Nous croyons que l’éducation va au-delà de la simple information. Il s’agit de comprendre ses options, de poser de meilleures questions et de gagner la confiance nécessaire pour prendre des décisions éclairées.",
  "We're building a team of financial professionals who believe in the power of education and understanding and are committed to bringing these important conversations to more families and communities.":
    "Nous bâtissons une équipe de professionnels financiers qui croient au pouvoir de l’éducation et de la compréhension, et qui s’engagent à apporter ces conversations importantes à davantage de familles et de communautés.",
  "Because financial education shouldn't be a privilege. It should be accessible to everyone.":
    "Parce que l’éducation financière ne devrait pas être un privilège. Elle devrait être accessible à tous.",
  "How We Work": "Notre façon de travailler",
  "A steady process for decisions that deserve attention.":
    "Un processus posé pour des décisions qui méritent de l’attention.",
  "The process is intentionally simple so the conversation stays focused on understanding, education, and next steps.":
    "Le processus est volontairement simple afin que la conversation reste centrée sur la compréhension, l’éducation et les prochaines étapes.",
  "At Synora Legacy, we believe financial education should be accessible to everyone. We're building a network of financial professionals who can bring that education to more families and communities.":
    "Chez Synora Legacy, nous croyons que l’éducation financière devrait être accessible à tous. Nous bâtissons un réseau de professionnels financiers capables d’apporter cette éducation à davantage de familles et de communautés.",
  "Develop as a financial professional while building independently.":
    "Développez-vous comme professionnel financier tout en construisant de façon indépendante.",
  "Synora Legacy develops financial professionals who educate individuals and families while building an independent business in the financial-services industry.":
    "Synora Legacy développe des professionnels financiers qui éduquent les particuliers et les familles tout en bâtissant une entreprise indépendante dans le secteur des services financiers.",
  "You can start part-time or full-time, allowing you to build around your existing career, family, or other responsibilities.":
    "Vous pouvez commencer à temps partiel ou à temps plein, ce qui vous permet de bâtir autour de votre carrière actuelle, de votre famille ou d’autres responsabilités.",
  "Who Is It For?": "À qui cela s’adresse-t-il ?",
  "Adults 18 and older who are willing to learn and build.":
    "Aux adultes de 18 ans et plus qui sont prêts à apprendre et à bâtir.",
  "This is an independent business opportunity, not employment.":
    "Il s’agit d’une opportunité d’affaires indépendante, pas d’un emploi.",
  "What You Should Understand": "Ce que vous devez comprendre",
  "Getting Started": "Pour commencer",
  "A regulated business requires the right steps.":
    "Une activité réglementée exige les bonnes étapes.",
  "Why Build This Business?": "Pourquoi bâtir cette entreprise ?",
  "Learn. Grow. Build.": "Apprendre. Grandir. Bâtir.",
  "Ready to Learn More?": "Prêt à en savoir plus ?",
  "Watch the business-opportunity video.": "Regardez la vidéo sur l’opportunité d’affaires.",
  "Start the Conversation": "Commencer la conversation",
  "Tell us a little about yourself.": "Parlez-nous un peu de vous.",
  "Use the form to share your information and choose a time to discuss the financial professional opportunity.":
    "Utilisez le formulaire pour partager vos informations et choisir un moment pour discuter de l’opportunité de professionnel financier.",
  "(optional)": "(facultatif)",
  "Share any experience, questions, or goals you want to discuss.":
    "Partagez toute expérience, question ou objectif dont vous souhaitez discuter.",
  "selected. Exact time slots can be connected when Fred provides a booking calendar.":
    "sélectionné. Les créneaux horaires exacts pourront être connectés lorsque Fred fournira un calendrier de réservation.",
  "Thank you. Your message has been sent to Synora Legacy.":
    "Merci. Votre message a été envoyé à Synora Legacy.",
  "Thank you. Your inquiry has been sent to Synora Legacy.":
    "Merci. Votre demande a été envoyée à Synora Legacy.",
  "Unable to send your message right now.":
    "Impossible d’envoyer votre message pour le moment.",
  "Unable to send your inquiry right now.":
    "Impossible d’envoyer votre demande pour le moment.",
  "Unable to send your message right now. Please try again or email Fred directly.":
    "Impossible d’envoyer votre message pour le moment. Veuillez réessayer ou envoyer un courriel directement à Fred.",
  "Unable to send your inquiry right now. Please try again or email Fred directly.":
    "Impossible d’envoyer votre demande pour le moment. Veuillez réessayer ou envoyer un courriel directement à Fred.",
  "Calendar Booking": "Réservation du calendrier",
  "Calendly is ready to connect.": "Calendly est prêt à être connecté.",
  "Add Fred's Calendly event URL to":
    "Ajoutez l’URL de l’événement Calendly de Fred à",
  "and this area will display live available dates and times.":
    "et cette zone affichera les dates et heures disponibles en direct.",
  "National Website Privacy Policy": "Politique nationale de confidentialité du site",
  "Website Terms of Use": "Conditions d’utilisation du site",
  "Licensing & Disclosures": "Licences et divulgations",
  "Educational Content Disclaimer": "Avis sur le contenu éducatif",
  Navigation: "Navigation",
  "Social profiles coming soon": "Profils sociaux bientôt disponibles",
  "Tax, legal, and investment questions should be reviewed with qualified professionals.":
    "Les questions fiscales, juridiques et d’investissement doivent être examinées avec des professionnels qualifiés.",
  "Privacy Policy / Terms / Required Disclosures":
    "Politique de confidentialité / Conditions / Divulgations requises",
  "All rights reserved.": "Tous droits réservés.",
};

export const translations: Record<Exclude<Locale, "en">, TranslationMap> = {
  es: {
    ...generatedTranslations.es,
    ...es,
  },
  fr: {
    ...generatedTranslations.fr,
    ...fr,
  },
};
