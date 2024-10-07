export const AgendaData = [
  {
    type: "specialEvent",
    eventName: "Registro de Asistentes 📝",
    description:
      "Ten a la mano el ticket y QR que te llegó a tu email al momento de inscribirte",
    time: "8:00 → 11:00",
  },
  {
    type: "specialEvent",
    eventName: "Keynote - Inauguración y Bienvenida",
    description: " Bienvenida a los participantes",
    time: "9:00 → 9:15",
  },
  {
    id: "CDB105",
    title: "Seguridad en la nube con AWS",
    description:
      "AWS proporciona un enfoque integral para la seguridad en la nube, combinando medidas de protección física, operativa y técnica. Los usuarios pueden aprovechar servicios como Amazon Inspector para evaluaciones de vulnerabilidades y AWS Shield para protegerse de diferentes ataques. La plataforma también facilita la implementación de políticas de seguridad personalizadas y la automatización de tareas de protección mediante AWS Security Hub, asegurando que las configuraciones y prácticas de seguridad se mantengan consistentes y eficientes.",
    type: "presentation",
    level: "L100",
    cat1: "Seguridad",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "9:15 → 10:00",
    speakers: [
      {
        name: "Abel Raul Diaz Castillo",
        position: "Senior Security Analyst en Digital Harbor",
        linkedin:
          "https://www.linkedin.com/in/abel-raul-diaz-castillo-0952b4119/",
        bio: "",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker21.webp",
      },
    ],
  },
  {
    id: "CDB104",
    title: "Explorando el Servicio de AWS Bedrock “De Texto a Consulta”",
    description:
      "Nunca fue más fácil poder interactuar con una base de datos, gracias a la generative AI esta tarea se hace menos compleja. Text to SQL Bedrock Agent transforma las preguntas de lenguaje natural y ejecuta las consultas de SQL para proporcionar respuestas, aprovechando uno de los modelos de la tecnología del servicio de AWS Bedrock para el análisis de datos intuitivo, el desarrollo de aplicaciones de inteligencia artificial generativa (GenAI), etc. Esta charla será una introducción al servicio de AWS Bedrock y demostraremos un caso de uso aplicando esta tecnología “Text to SQL Bedrock Agent”.",
    type: "presentation",
    level: "L100",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Sajama - Auditorio 2",
    time: "9:15 → 10:00",
    speakers: [
      {
        name: "Carmen Villcazani",
        position: "DevOps Engineer en Jalasoft",
        linkedin: "http://linkedin.com/in/carmen-rosa-villcazani",
        bio: "Ingeniera Informática titulada en la Universidad Autónoma Juan Misael Saracho de Tarija, con más de 10 años de experiencia, desempeñó el rol de Quality Engineer durante 6 años, actualmente ejerce el rol de DevOps desde hace 7 años. Le gusta enseñar, compartir conocimiento y seguir aprendiendo. Creativa, automotivada y en búsqueda de nuevos retos.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker17.webp",
      },
      {
        name: "Adriana Lavadenz Maceda",
        position: "DevOps Engineer en Jalasoft",
        linkedin: "https://www.linkedin.com/in/adriana-lavadenz-b49108a8/",
        bio: "Ingeniera en Electrónica y Licenciada en Informática por la Universidad Mayor de San Andrés, La Paz. Recientemente completó sus estudios en el Máster Universitario en Desarrollo y Operaciones en la Universidad de La Rioja, España. Con más de 3 años de experiencia como Ingeniera DevOps, se destaca por su enfoque en la mejora continua y su entusiasmo por el aprendizaje de nuevas tecnologías. Está comprometida en enfrentar nuevos desafíos, buscando constantemente aplicar lo aprendido para mejorar procesos y desarrollar soluciones innovadoras.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker18.webp",
      },
    ],
  },
  {
    id: "CDB109",
    title: "S3 y lambda en la practica",
    description:
      "Un laboratorio practico mostrando dos escenarios comunes del uso de S3 y Lambda. En este laboratorio se hara uso de una nueva herramienta de ensenanza de AWS llamada AWS Journey.",
    type: "taller",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Illampu - Laboratorio 7",
    time: "9:15 → 10:15",
    speakers: [
      {
        name: "Mauricio	Alarcon",
        position: "Ingeniero de Software",
        linkedin: "https://www.linkedin.com/in/mauricio-alarcon-261893153/",
        bio: "He trabajado como Ingeniero de Software especializado en AWS por los ultimos 6 años. A parte de mi trabajo, he tenido la oportunidad de brindar clases de especializacion en AWS a estudiantes de la UPB en muchas oportunidades. Asisti al AWS Reinvent 2023 y comparti con personas de todo el mundo ideas y soluciones en AWS. Tambien tengo la certificacion de AWS Professional Solutions Architect.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker20.webp",
      },
    ],
  },
  {
    id: "CDB102",
    title: "Serverless en una Startup",
    description:
      "Como la tecnología serverless de AWS (Lambda) es una muy buena alternativa a la implementación y despliegue para una startup. (Casos de estudio).",
    type: "presentation",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "Casos de estudio y experiencias reales de implementación",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "10:00 → 10:45",
    speakers: [
      {
        name: "Ariel	Ortuño",
        position: "Software Engineer en Caju AI",
        linkedin: "https://www.linkedin.com/in/arielgos",
        bio: "Ingeniero de Sistemas, dedicado al desarrollo de software por más de 20 años, parte activa de la comunidad de desarrollo de software, pertenece al GDG Santa Cruz como fundador, organizador y speaker impulsando el uso de plataformas para agilizar el desarrollo de software como Firebase y AWS, mentor de Startup Weekend para el tema tecnología y negocios en varias versiones. Actualmente trabaja como Technical Lead para Sabre y como Software Engineer para Caju.AI tratando de revolucionar el mercado con la inteligencia artificial",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker07.webp",
      },
    ],
  },
  {
    id: "CDB201",
    title: "Conversational bot with Bedrock and lambda",
    description:
      "How to create a conversational bot using bedrock and lambda from scratch.",
    type: "presentation",
    level: "L200",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Sajama - Auditorio 2",
    time: "10:00 → 10:45",
    speakers: [
      {
        name: "Gonzalo	Santiago",
        position: "Cloud Support Engineer II en AWS ",
        linkedin: "https://www.linkedin.com/in/gsantiagom/",
        bio: "Professional experienced in Software Development, Cloud, IOT, Image Processing and Machine learning. Works for AWS to support customers to use Sagemaker, Bedrock and other AI services.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker03.webp",
      },
    ],
  },
  {
    id: "CDB208",
    title: "Chatea con tu base de datos usando Servicios de AWS",
    description:
      "Hablaremos de como construir un agente para poder chatear con una base de datos usando AWS Lambda, Step Functions y OpenAI.",
    type: "taller",
    level: "L200",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Illampu - Laboratorio 7",
    time: "10:15 → 11:15",
    speakers: [
      {
        name: "Victor	Aguilar",
        position: "Ingeniero de Software en Collectives",
        linkedin: "https://www.linkedin.com/in/victoraguilarc/",
        bio: "Desarrollador de sofware con mas de 10 años de experiencia, participando en contribuyendo en la creación de apps y software con millones de usuarios en diferentes roles.",
        photo: "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker08a.webp",
      },
    ],
  },
  {
    id: "CDB207",
    title:
      "Mejorando la precisión de un LLM: Retrieval Augmented Generation en AWS",
    description: "",

    type: "presentation",
    level: "L200",
    cat1: "Arquitectura y servicios",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "10:45 → 11:30",
    speakers: [
      {
        name: "Marcelo	Reyes",
        position: "Project Manager en Encora",
        linkedin: "",
        bio: "Ingeniero de Sistemas, dedicado al desarrollo de software por más de 20 años, parte activa de la comunidad de desarrollo de software, pertenece al GDG Santa Cruz como fundador, organizador y speaker impulsando el uso de plataformas para agilizar el desarrollo de software como Firebase y AWS, mentor de Startup Weekend para el tema tecnología y negocios en varias versiones. Actualmente trabaja como Technical Lead para Sabre y como Software Engineer para Caju.AI tratando de revolucionar el mercado con la inteligencia artificial",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker22.webp",
      },
    ],
  },
  {
    id: "CDB206",
    title:
      "Del Código al Cliente: Desplegando MVPs con Arquitectura Serverless",
    description:
      "Cuando se inicia un nuevo proyecto, es común que un desarrollador opte por un enfoque serverfull para gestionar el backend, utilizando frameworks como Spring, Express, Node.js, Flask, entre otros. Este enfoque es robusto y familiar, pero también conlleva la responsabilidad de gestionar la infraestructura y las operaciones necesarias para que la aplicación esté disponible para los usuarios finales. Esto implica dominar una serie de herramientas y tecnologías como networking, bash, Linux, Docker, EC2, ECS, o incluso Kubernetes para requisitos más complejos. Sin embargo, cuando el objetivo es desarrollar un MVP (Producto Mínimo Viable), la prioridad no debería centrarse en el stack tecnológico, sino en validar rápidamente la idea con los usuarios finales. Aquí es donde la tecnología serverless se presenta como una solución poderosa, permitiendo que el equipo de desarrollo se concentre en la lógica de negocio sin preocuparse por la complejidad operativa. Serverless facilita un despliegue ágil y eficiente, eliminando la necesidad de manejar la infraestructura subyacente. El propósito de esta presentación es mostrar cómo evaluar un proyecto y adaptarlo a una arquitectura serverless para desarrollar un MVP de manera rápida y efectiva. Además, exploraremos cómo aprovechar las limitaciones y capacidades de los servicios serverless de AWS (como API Gateway, Lambda, SQS, S3, CloudFront, Route 53) para crear aplicaciones escalables, mantenibles y confiables, asegurando que la solución no solo cumpla con los requisitos iniciales, sino que también esté preparada para el crecimiento futuro.",
    type: "presentation",
    level: "L200",
    cat1: "Arquitectura y servicios",
    cat2: "Arquitectura Serverless",
    room: "Sala Sajama - Auditorio 2",
    time: "10:45 → 11:30",
    speakers: [
      {
        name: "Maximilian	Vino",
        position: "Fullstack Software Developer",
        linkedin: "https://www.linkedin.com/in/maximilian-vino-860602129/",
        bio: "Programador autodidacta con una profunda pasión por la tecnología. Mi camino comenzó participando en concursos de programación, lo que impulsó mi carrera y me llevó a mi primer rol como desarrollador full stack. A lo largo de casi cinco años, he perfeccionado mis habilidades como Full Stack Developer, contribuyendo a proyectos en todo el mundo.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker15.webp",
      },
    ],
  },
  {
    id: "CDB106",
    title:
      "Explorando Vulnerabilidades en AWS: De FLAWS a la Seguridad en la Nube",
    description:
      "En esta sesión, exploraremos los desafíos y laboratorios prácticos diseñados para enseñar conceptos de seguridad en AWS, como los famosos FLAWS 1 y 2. Estos laboratorios ilustran cómo pequeños errores en la configuración de servicios en la nube pueden llevar a graves vulnerabilidades de seguridad. Además, analizaremos otras plataformas y herramientas disponibles para pentesting en AWS, destacando cómo se pueden identificar y mitigar riesgos en entornos cloud. Este taller es ideal para quienes desean comprender las amenazas específicas de AWS y aprender técnicas de pentesting efectivas para asegurar su infraestructura en la nube. Este enfoque no solo cubre los laboratorios FLAWS, sino que también introduce a los participantes a otros recursos y prácticas esenciales para la seguridad en AWS.",
    type: "demo",
    level: "L100",
    cat1: "Seguridad",
    cat2: "Generative AI",
    room: "Sala Illampu - Laboratorio 7",
    time: "11:15 → 12:15",
    speakers: [
      {
        name: "Diego Condori",
        position: "Director en DeepSec",
        linkedin: "https://www.linkedin.com/in/diego-condori-465a381bb/",
        bio: "eCPPTv2 (Professional Penetration Tester) | eJPTv2 (Junior Penetration Tester)| Pentester | CTF Player | Programador | Vulnerability Researcher | CVE-2024-26505",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker23.webp",
      },
    ],
  },
  {
    id: "CDB302",
    title:
      "Chaos Engineering en AWS: Inyectando resiliencia, impulsada por Gen AI",
    description:
      "Esta sesión explora el uso de chaos engineering (ingeniería del caos) para fortalecer la resistencia de las aplicaciones en la nube AWS. Se analizarán los principios fundamentales de chaos engineering y su importancia en la construcción de sistemas robustos y resilientes.A continuación, se realizará una inmersión profunda en AWS Fault Injection Service (FIS) y su integración con AWS Resilience Hub. Esta integración permite el diseño y ejecución centralizados de experimentos de inyección de fallas controladas, evaluando la capacidad de las aplicaciones para responder a interrupciones.Además, se explorará el potencial de la Inteligencia Artificial Generativa (Gen AI) para optimizar la planificación y ejecución de dichos experimentos. Finalmente, la sesión concluirá con una demostración práctica y un análisis de las lecciones aprendidas y las mejores prácticas para implementar la ingeniería del caos de manera efectiva en un entorno AWS.",
    type: "presentation",
    level: "L300",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "11:30 → 12:15",
    speakers: [
      {
        name: "Gustavo	Romero",
        position: "Principal Cloud Solutions Architect en Encora",
        linkedin: "https://www.linkedin.com/in/gustavo-alejandro-romero/",
        bio: "Gustavo es un arquitecto cloud con más de 12 años de experiencia en la creación de soluciones seguras y resilientes en Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP). Apasionado defensor de la innovación en la nube, cuenta con multiples certificaciones de nube AWS Associate y Professional, junto con credenciales de nivel experto en Microsoft Azure y certificaciones de nivel profesional en Google Cloud.Gustavo tiene un historial comprobado de entrega de proyectos de alto impacto para clientes diversos. Esto incluye la migración de aplicaciones on-premise a la nube, la implementación de controles de seguridad en la nube (ISO 27001, SOC 2), la facilitación de pipelines CI/CD con DevOps y la arquitectura de aplicaciones cloud-native.A la vanguardia de la tecnología, Gustavo ha liderado la integración de Gen AI (IA Generativa) y Machine Learning (ML) en sus proyectos - incluyendo el desarrollo de soluciones de Observabilidad en la Nube basadas en IA Generativa, Análisis de Código basado en IA Generativa y Detección de Objetos UI basada en ML/IA.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker06.webp",
      },
    ],
  },
  {
    id: "CDB110",
    title: "Finanzas en la nube de AWS",
    description:
      "En esta sesión, veremos por que es importante tener conocimientos en finanzas y su impacto en el negocio. Compartiremos conceptos básicos sobre finanzas, como aplicar buenas practicas en la nube de AWS, sobre FinOps, y analizaremos un proyecto actual de inteligencia artificial reduciendo sus costos.",
    type: "presentation",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Sajama - Auditorio 2",
    time: "11:30 → 12:15",
    speakers: [
      {
        name: "Alan	Lopez",
        position: "Technical Account Manager",
        linkedin: "https://www.linkedin.com/in/alanlopez2020",
        bio: "",
        photo: "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker16a.webp",
      },
    ],
  },
  {
    type: "specialEvent",
    eventName: "Almuerzo 🍔",
    description: "Entrega de Kits - Networking 🙂",
    time: "12:30 → 14:00",
  },
  {
    id: "CDB203",
    title:
      "Llevando el soporte de comunidades a otro nivel con automatización e IA",
    description:
      "En esta sesión aprenderemos cómo estamos mejorando el soporte a las comunidades usando agentes inteligentes que aprenden de nuestros documentos y bases de datos. Durante el proceso de desarrollo aprenderás cómo multiples tareas pueden ser automatizadas con herramientas amigables para desarrolladores, incluso si no tienes experiencia en AI/ML.",
    type: "presentation",
    level: "L200",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "14:00 → 14:45",
    speakers: [
      {
        name: "Ana	Cunha",
        position: "Senior Developer Advocate en AWS",
        linkedin:
          "https://www.linkedin.com/in/abel-raul-diaz-castillo-0952b4119/",
        bio: "Ana Cunha es Senior Developer Advocate en AWS para América Latina. Anteriormente, trabajó como ingeniera de desarrollo de software en Amazon.com.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker01a.webp",
      },
    ],
  },
  {
    id: "CDB202",
    title: "RDS High Availability and Security",
    description:
      "In this session, you will learn the best practices in both availability and security for database instance/cluster deployments on AWS and explore some features offered by different engines.",
    type: "presentation",
    level: "L200",
    cat1: "Arquitectura y servicios",
    cat2: "Manejo de bases de datos",
    room: "Sala Sajama - Auditorio 2",
    time: "14:00 → 14:45",
    speakers: [
      {
        name: "Daniel	Tenoch",
        position: "Cloud Support Engineer en AWS ",
        linkedin: "https://www.linkedin.com/in/daniel-tenoch-sanchez/",
        bio: "I am passionate about cybersecurity and databases. I have worked with developing mobile applications, websites, integrations, and supporting applications currently supporting the database services offered by AWS.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker02.webp",
      },
    ],
  },
  {
    id: "CDB108",
    title:
      "Machine Learning al Alcance de Todos: Introducción a SageMaker Studio Lab",
    description:
      "En esta sesión exploraremos el entorno de SageMaker Studio Lab para construir, entrenar y desplegar modelos de Machine Learning en la nube, de manera gratuita. La sesión está diseñada para impulsar a los entusiastas en Machine Learning a que puedan poner en práctica sus conocimientos utilizando herramientas que ofrece AWS.",
    type: "taller",
    level: "L100",
    cat1: "ML& Gen AI",
    cat2: "Inteligencia Artificial y Machine Learning en AWS",
    room: "Sala Illampu - Laboratorio 7",
    time: "14:00 → 15:00",
    speakers: [
      {
        name: "Monica	Orellana",
        position: "Fundadora en Thinkuna",
        linkedin: "https://www.linkedin.com/in/monicaorellanat/",
        bio: "Economista, MBA, certificada AWS Cloud Practioner, Embajadora Women Techmaker y fundadora de Thinkuna, tengo experiencia en análisis empresarial, proyectos de inversión y emprendimiento. Soy una apasionada por la ciencia de datos, el voluntariado, viajar, leer y hacer manualidades.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker11.webp",
      },
    ],
  },
  {
    id: "CDB204",
    title: "Detección y Mitigación de Sesgos en IA Generativa",
    description:
      "En esta charla, exploraremos cómo detectar y mitigar los sesgos en modelos de inteligencia artificial generativa utilizando Amazon SageMaker Clarify. Abordaremos las fuentes comunes de sesgos en los datos y modelos ayudando a garantizar la equidad y responsabilidad en la IA generativa, promoviendo un desarrollo ético y transparente en aplicaciones críticas.",
    type: "presentation",
    level: "L200",
    cat1: "ML& Gen AI",
    cat2: "Generative AI",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "14:45 → 15:30",
    speakers: [
      {
        name: "Diana	Calizaya",
        position: "AI Platforms Specialist",
        linkedin: "https://www.linkedin.com/in/dianacalizaya/",
        bio: "Diana es creadora de contenido tecnológico y facilitadora de talleres de inteligencia artificial, programación y robótica en iniciativas locales e internacionales que fomentan el aprendizaje STEM en niñas y mujeres.  Fue reconocida como Most Valuable Professional en el área de Inteligencia Artificial, es Gold Microsoft Learn Student Ambassador, embajadora Women Techmaker e Instructora en Cisco Academy.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker13.webp",
      },
    ],
  },
  {
    id: "CDB301",
    title: "Think bigger, think with patters",
    description:
      "Why you should go beyond automation and build patterns with open source for hybrid cloud.",
    type: "presentation",
    level: "L300",
    cat1: "Arquitectura y servicios",
    cat2: "Arquitectura y mejores prácticas en la nube",
    room: "Sala Sajama - Auditorio 2",
    time: "14:45 → 15:30",
    speakers: [
      {
        name: "Sofy	Romero",
        position: "Senior Principal Chief Architect en RedHat Latam",
        linkedin: "https://www.linkedin.com/in/sofy-chan/",
        bio: "I’m Sofía Romero, Senior Principal Chief Architect for LATAM@RedHat. I was the Data, AI and Gaming Director for a multi-cloud partner, I led initiatives to open new business verticals, establish KPIs and OKRs, implemented a mentorship program, and fostered ambassadorship to drive a positive cultural shift. My experience as Solutions Architect at AWS and Microsoft in Mexico and Canada, supporting various industries such as Games, Tourism, Start-Ups, Finance and strategic partners, has been fundamental in driving innovation and adoption of new services such as implementations of facial recognition for check-in, sentiment analysis to detect false alarms during calls to 911 or anti-suicide lines, and data analysis to create an alternative to chemotherapy. I have more than eight years experience in e-commerce across various technical and managerial roles. My commitment to Diversity and Inclusion is evident as she is the co-founder of several “women in cloud” communities and programs in LATAM and Canada where she was part of hundreds of meetups and other related events. Outside of work, I enjoy a range of hobbies including playing video games, watching F1, Anime, movies, reading, traveling, watching sports, creating nail designs, and spending quality time with my family.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker04.webp",
      },
    ],
  },
  {
    id: "CDB107",
    title: "Workload distribution with Lambdas",
    description:
      "Some good practices to use multiple lambdas to avoid timeouts and have efficient time processing for big data",
    type: "taller",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "Arquitectura Serverless",
    room: "Sala Illampu - Laboratorio 7",
    time: "15:00 → 16:00",
    speakers: [
      {
        name: "Miguel	Frade",
        position: "Fullstack Developer en Mojix",
        linkedin: "https://www.linkedin.com/in/miguelfradeflores",
        bio: "Ingeniero de Sistemas de la UPB, fullstack developer en Mojix 2018-2024, Docente de Sistemas UPB-Pregrado y Team lead 2021-2024 en Mojix.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker09.webp",
      },
    ],
  },
  {
    id: "CDB101",
    title: "De DevOps a Platform Engineering: Empoderando al desarrollador",
    description:
      "¿Y si consideramos al desarrollador como un cliente? Si de DevOps tenemos la metodología y cultura, de Platform Engineering tenemos la ejecución para ofrecer a los desarrolladores herramientas y flujos para empoderarlos en su día a día, y al mismo tiempo cerramos la brecha entre Dev y Ops. En esta charla, Yamil proveerá un vistazo al proceso de convertir un equipo de DevOps a uno de Platform Engineering.",
    type: "presentation",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "DevOps y Site Reliability Engineering",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "15:30 → 16:15",
    speakers: [
      {
        name: "Yamil	Urbina",
        position: "Senior DevOps Engineer en Cisco ThousandEyes",
        linkedin: "https://www.linkedin.com/in/yamilurbina/",
        bio: "Yamil es Senior DevOps Engineer en ThousandEyes, una compañía de Cisco, donde usa su experiencia en la nube, Kubernetes, infraestructura como código, automatizaciones y diseño de sistemas para ayudar a los equipos de desarrollo a tener más control y visibilidad de su trabajo, despliegues y monitoreo. Antes de Cisco, Yamil fué parte de Grin Mobility en México y de Jalasoft y Mojix en Bolivia.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker05.webp",
      },
    ],
  },
  {
    id: "CDB103",
    title: "El Big Data Contrataca",
    description:
      "¡Prepárate para una inmersión emocionante en el mundo del Big Data y Analytics! En esta charla, desentrañaremos los secretos para convertir montañas de datos en oro puro, todo con la ayuda de las herramientas más poderosas para el análisis de datos. ¿Listo para convertirte en un superhéroe del Big Data? ¡Ven y descubre cómo herramientas como AWS puede llevar tus habilidades de análisis a un nivel completamente nuevo!",
    type: "presentation",
    level: "L100",
    cat1: "Arquitectura y servicios",
    cat2: "Big Data y análisis de datos",
    room: "Sala Sajama - Auditorio 2",
    time: "15:30 → 16:15",
    speakers: [
      {
        name: "Mauricio	Illanes",
        position: "Senior Data Engineer en Unosquare",
        linkedin:
          "https://www.linkedin.com/in/mauricio-illanes-chipana-611256163",
        bio: "Mauricio Illanes, Ingeniero de Sistemas graduado de la Universidad Católica Boliviana.Cuenta con más de 3 años de experiencia en el campo de Analytics, comenzando su trayectoria en el sector bancario en el Banco de Crédito de Bolivia donde desempeñó el rol de Data Engineer en el Centro de Excelencia de Data y Analytics.Posteriormente desempeñó el rol de Business Intelligence Specialist en el area de Productos y Segmentos.Una vez apartado del sector financiero se adentró en el sector tecnológico en la empresa de Desarrollo de Software conocida como Unosquare, desempeñando el rol de Data Engineer Senior, utilizando herramientas de análisis de datos, storytelling y automatización de procesos en diferentes lenguajes de programación.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker10.webp",
      },
    ],
  },
  {
    id: "CDB209",
    title: "Desplegando un modelo de ML en AWS Apprunner",
    description:
      "En esta sesión exploraremos el procedimiento para desplegar un modelo de Machine Learning como servicio web a través del servicio AWS Apprunner de manera sencilla y rápida. Las herramientas alrededor de AWS Apprunner permitirán concentrarnos en el código fuente y no en detalles de infraestructura.",
    type: "taller",
    level: "L200",
    cat1: "ML& Gen AI",
    cat2: "Inteligencia Artificial y Machine Learning en AWS",
    room: "Sala Illampu - Laboratorio 7",
    time: "16:00 → 17:00",
    speakers: [
      {
        name: "Jose	Laruta Espejo",
        position: "Machine Learning Engineer",
        linkedin: "https://www.linkedin.com/in/joselaruta/",
        bio: "Ingeniero Electrónico de formación pero dev de profesión. Me encanta programar, experimentar y aprender nuevas cosas relacionadas con sistemas distribuidos, data pipelines, inteligencia artificial, visión artificial, robótica y electrónica. Actualmente trabajo como Machine Learning Engineer en Jalasoft y como profesor en materias relacionadas con inteligencia artificial, computer vision y MLOps.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker14.webp",
      },
    ],
  },
  {
    id: "CDB205",
    title: "Domina el Internet de las Cosas con AWS IoT Core",
    description:
      "AWS IoT Core facilita la conexión, gestión y seguridad de dispositivos IoT a escala, permitiendo a las empresas transformar datos en decisiones inteligentes.",
    type: "presentation",
    level: "L200",
    cat1: "Arquitectura y servicios",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Illimani - Auditorio 3 (Principal)",
    time: "16:15 → 17:00",
    speakers: [
      {
        name: "Luis Alfredo Quispe Villca",
        position: "Ingeniero de Software",
        linkedin: "https://www.linkedin.com/in/luis-quispe/",
        bio: "Como Ingeniero de Sistemas con una sólida trayectoria en el desarrollo de software, he tenido el privilegio de impulsar la innovación en sectores como la banca, la salud y el comercio electrónico. Mi enfoque combina mi formación técnica con un MBA, lo que me permite no solo diseñar soluciones tecnológicas de alto impacto, sino también identificar y capitalizar nuevas oportunidades de mercado. Estoy comprometido con transformar ideas en realidades que redefinan la manera en que operan las industrias y generen valor tangible.",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker19.webp",
      },
    ],
  },
  {
    id: "CDB303",
    title: "Mejora tu analítica con Amazon Redshift",
    description:
      "En esta sesion se pretende mostrar el uso de Amazon Redshift, describir cada una de sus características y las mejorares practicas al utilizar el servicio.",
    type: "presentation",
    level: "L300",
    cat1: "Arquitectura y servicios",
    cat2: "Servicios de AWS y cómo sacarles el máximo provecho",
    room: "Sala Sajama - Auditorio 2",
    time: "16:15 → 17:00",
    speakers: [
      {
        name: "Max Zeballos Torres",
        position: "DataOps en Rankmi",
        linkedin:
          "https://www.linkedin.com/in/maxcloud/",
          bio: "- x13 AWS Certified  - AWS Community Builder x3  - Fundador de la comunidad AWS Machine Learning Latam  - (+13) años de experiencia en la industria tech   - Desarrollo de cursos gratuitos online (Youtube - @MaxCloud101)",
        photo:
          "https://aws-cd-bo-web.s3.amazonaws.com/speakers-aws-cd-bo-2024/aws-cd-bo-speaker12.webp",
      },
    ],
  },
  {
    type: "specialEvent",
    eventName: "Clausura",
    description:
      "Sorteos - Entrega de Kits 🎁",
    time: "17:00 → 17:30",
  },
];
