import { Injectable } from '@angular/core';

export interface ProfileInfo {
  name: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  image?: string;
  level?: string;
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  displayUrl: string;
  tags: string[];
  description: string[];
  architecture?: string;
  role?: string;
  features?: string[];
  gradient: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  companyType?: string;
  responsibilities: string[];
  techUsed: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface Certification {
  title: string;
  level: string;
  institution: string;
  details: string;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  readonly profile: ProfileInfo = {
    name: 'Abel Aaron Orejon Eustaquio',
    roles: [
      'Desarrollador Full Stack',
      'Ingeniero de Sistemas Computacionales',
      'Programador PHP / MySQL'
    ],
    location: 'Lima, Perú',
    email: 'abelaaronpro@gmail.com',
    phone: '+51 963 918 844',
    linkedin: 'https://www.linkedin.com/in/abel-aaron-orejon-eustaquio-a61296353',
    summary: 'Ingeniero de Sistemas Computacionales egresado de la Universidad Privada del Norte, con experiencia en desarrollo de software Full Stack, diseño de bases de datos y automatización de procesos de negocio. Manejo de PHP, C#, Java, JavaScript, jQuery, arquitectura MVC y por Capas, y del framework Laravel y .NET, junto con bases de datos MySQL y PostgreSQL. Experiencia en análisis y diseño de sistemas, integración de Backend y Frontend, control de versiones con Git, desarrollo y maquetación de sitios web en WordPress con Elementor y Divi Builder, gestión de proyectos y tareas con Trello y ClickUp, y capacitación a usuarios finales en la implementación de sistemas informáticos nuevos y modificados.'
  };

  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Lenguajes',
      skills: [
        { name: 'PHP', icon: 'php', image: 'php.png', color: '#777BB4' },
        { name: 'C#', icon: 'csharp', image: 'C#.png', color: '#512BD4' },
        { name: 'Java', icon: 'java', image: 'java.png', color: '#ED8B00' },
        { name: 'JavaScript', icon: 'javascript', image: 'javascript.png', color: '#F7DF1E' },
        { name: 'Python', icon: 'python', image: 'python.png', color: '#3776AB' },
        { name: 'HTML5', icon: 'html5', image: 'html5.png', color: '#E34F26' },
        { name: 'CSS3', icon: 'css3', image: 'css3.png', color: '#1572B6' },
        { name: 'Kotlin', icon: 'kotlin', image: 'kotlin.png', color: '#7F52FF' }
      ]
    },
    {
      category: 'Frameworks y Librerías',
      skills: [
        { name: '.NET', icon: 'dotnet', image: '.net.png', color: '#512BD4' },
        { name: 'Laravel', icon: 'laravel', image: 'laravel.png', color: '#FF2D20' },
        { name: 'jQuery', icon: 'jquery', image: 'jquery.png', color: '#0769AD' },
        { name: 'Bootstrap', icon: 'bootstrap', image: 'bootstrap.png', color: '#7952B3' },
        { name: 'Tailwind CSS', icon: 'tailwindcss', image: 'tailwindcss.png', color: '#06B6D4' },
        { name: 'Angular', icon: 'angular', image: 'angular.png', color: '#DD0031' },
        { name: 'Vue.js', icon: 'vuedotjs', image: 'vuejs.png', color: '#4FC08D' },
        { name: 'React', icon: 'react', image: 'react.png', color: '#61DAFB' },
        { name: 'React Native', icon: 'react', image: 'react-native.png', color: '#61DAFB' },
        { name: 'Node.js', icon: 'nodedotjs', image: 'nodejs.png', color: '#5FA04E' },
        { name: 'Express', icon: 'express', image: 'nodeexpress.png', color: '#FFFFFF' }
      ]
    },
    {
      category: 'CMS y Maquetación Web',
      skills: [
        { name: 'WordPress', icon: 'wordpress', image: 'wordpress.png', color: '#21759B' },
        { name: 'Elementor', icon: 'elementor', image: 'elementor.png', color: '#92003B' },
        { name: 'Divi Builder', icon: 'divi', image: 'divi-builder.png', color: '#8F48ED' }
      ]
    },
    {
      category: 'Arquitectura y Servicios',
      skills: [
        { name: 'MVC', icon: 'architecture', image: 'modelo-vista-controlador.png', color: '#00F2FE' },
        { name: 'Arquitectura por Capas', icon: 'layers', image: 'modelo-vista-controlador.png', color: '#4FACFE' },
        { name: 'APIs REST', icon: 'api', image: 'apirest.png', color: '#00E676' },
        { name: 'APIs SOAP', icon: 'soap', image: 'apisoat.png', color: '#FFAB00' },
        { name: 'Postman', icon: 'postman', image: 'postman.png', color: '#FF6C37' }
      ]
    },
    {
      category: 'Bases de Datos',
      skills: [
        { name: 'MySQL', icon: 'mysql', image: 'base-de-datos-mysql.png', color: '#4479A1' },
        { name: 'PostgreSQL', icon: 'postgresql', image: 'postgre.png', color: '#4169E1' },
        { name: 'SQL Server', icon: 'sql', image: 'sqlserver.png', color: '#CC292B' }
      ]
    },
    {
      category: 'Control de Versiones',
      skills: [
        { name: 'Git', icon: 'git', image: 'git.png', color: '#F05032' }
      ]
    },
    {
      category: 'Desarrollo Móvil',
      skills: [
        { name: 'Android Studio', icon: 'androidstudio', image: 'kotlin.png', color: '#3DDC84' },
        { name: 'Kotlin', icon: 'kotlin', image: 'kotlin.png', color: '#7F52FF' }
      ]
    },
    {
      category: 'Análisis y Procesos',
      skills: [
        { name: 'Análisis & Diseño', icon: 'diagram', color: '#00F2FE' },
        { name: 'Modelado UML', icon: 'uml', color: '#FF2E93' },
        { name: 'Procesos de Negocio', icon: 'process', color: '#7F00FF' },
        { name: 'Capacitación a Usuarios', icon: 'training', color: '#00E676' }
      ]
    },
    {
      category: 'Gestión y Productividad',
      skills: [
        { name: 'Trello', icon: 'trello', color: '#0052CC' },
        { name: 'ClickUp', icon: 'clickup', color: '#7B68EE' },
        { name: 'Liderazgo de Equipos', icon: 'leadership', color: '#FFAB00' },
        { name: 'Gestión de Proyectos', icon: 'project', color: '#4FACFE' },
        { name: 'Resolución de Problemas', icon: 'puzzle', color: '#00F2FE' }
      ]
    },
    {
      category: 'Herramientas y Redes',
      skills: [
        { name: 'Postman', icon: 'postman', image: 'postman.png', color: '#FF6C37' },
        { name: 'AutoCAD', icon: 'autocad', color: '#E51000' },
        { name: 'Microsoft Office', icon: 'microsoft', color: '#D83B01' },
        { name: 'Redes (TCP/IP)', icon: 'network', color: '#00F2FE' },
        { name: 'Cisco Packet Tracer', icon: 'cisco', color: '#1BA0D7' }
      ]
    },
    {
      category: 'Inteligencia Artificial',
      skills: [
        { name: 'Machine Learning', icon: 'brain', color: '#E100FF' },
        { name: 'Redes Neuronales', icon: 'neural', color: '#7F00FF' }
      ]
    },
    {
      category: 'Sistemas Operativos',
      skills: [
        { name: 'Linux', icon: 'linux', color: '#FCC624' },
        { name: 'Windows', icon: 'windows', color: '#0078D4' }
      ]
    },
    {
      category: 'Diseño y Modelado',
      skills: [
        { name: 'Figma', icon: 'figma', color: '#F24E1E' },
        { name: 'UML', icon: 'uml', color: '#FF2E93' },
        { name: 'draw.io', icon: 'diagram', color: '#F08705' }
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      id: 'alroma',
      title: 'Sitio Web Corporativo & Extranet',
      subtitle: 'Alroma Servicios Generales E.I.R.L.',
      url: 'https://alroma.com.pe',
      displayUrl: 'alroma.com.pe',
      tags: ['PHP', 'MVC', 'MySQL', 'Extranet', 'Gestión de Servicios'],
      gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(79, 172, 254, 0.2) 100%)',
      architecture: 'Arquitectura Model-View-Controller (MVC) en PHP nativo modular',
      role: 'Desarrollador Full Stack Principal',
      description: [
        'Desarrollo del sitio web institucional utilizando PHP, aplicando arquitectura MVC para separar lógica de negocio, controladores y vistas.',
        'Implementación del módulo de Extranet para gestión interna de información de clientes y proyectos, con panel administrativo y panel de usuario para el manejo de cartas, cotizaciones, control de servicios y facturas.',
        'Diseño de secciones de Nosotros, Servicios (Diseño de proyectos y asesoría técnica, Ejecución y supervisión de obras eléctricas, Abastecimiento logístico) y Contacto, con enfoque responsive.',
        'Trabajo alineado a procesos de negocio reales de una empresa de ingeniería eléctrica, coordinando requerimientos con las áreas requeridas.'
      ],
      features: [
        'Panel Administrativo con roles de usuario y permisos.',
        'Gestión automatizada de cotizaciones, cartas y facturación.',
        'Módulo de catálogo de servicios eléctricos y expedientes técnicos.',
        'Maquetación totalmente adaptativa y optimizada para velocidad de carga.'
      ]
    },
    {
      id: 'paramedicos',
      title: 'Sitio Web Institucional',
      subtitle: 'Cuerpo General de Paramédicos Voluntarios del Perú',
      url: 'https://paramedicosdelperu.org',
      displayUrl: 'paramedicosdelperu.org',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Responsive Design'],
      gradient: 'linear-gradient(135deg, rgba(255, 46, 147, 0.2) 0%, rgba(127, 0, 255, 0.2) 100%)',
      architecture: 'Frontend Modular Nativo (HTML5/CSS3/JS) + SQL DB Integration',
      role: 'Desarrollador Único del Proyecto',
      description: [
        'Desarrollo integral del sitio web como único desarrollador del proyecto, utilizando HTML5, CSS3 y JavaScript.',
        'Diseño y maquetación de todas las secciones (Inicio, Nosotros, Instructores, Cursos, Noticias, Únete), con navegación y redireccionamiento entre páginas.',
        'Implementación de diseño responsive para dispositivos móviles y de escritorio.',
        'Apoyo en el manejo de base de datos en SQL para el registro y consulta de información del sitio.'
      ],
      features: [
        'Portal institucional interactivo para voluntarios e instruidos.',
        'Formularios dinámicos para postulación en sección "Únete".',
        'Sección de Noticias y Cursos con renderizado dinámico.',
        'Optimización de accesibilidad y diseño responsive multiplataforma.'
      ]
    },
    {
      id: 'vilcas',
      title: 'VILCAS — Gestión de Inventario y Ventas',
      subtitle: 'Plataforma Comercial para Tiendas de Calzado',
      url: 'https://vilcaspe.com',
      displayUrl: 'vilcaspe.com',
      tags: ['Angular', 'Node.js', 'Express', 'SQL', 'REST APIs'],
      gradient: 'linear-gradient(135deg, rgba(0, 230, 118, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)',
      architecture: 'Single Page Application (SPA) Angular + Node.js Express REST API',
      role: 'Desarrollador Frontend Angular',
      description: [
        'Desarrollo del Frontend de la plataforma utilizando Angular, orientada a la gestión de inventario, ventas y finanzas para tiendas de calzado (control de stock por local, tallas y reportes).',
        'Consumo de servicios y endpoints conectados a un backend en Node.js con Express.',
        'Apoyo en el diseño y consultas de base de datos en SQL para el manejo de la información del sistema.'
      ],
      features: [
        'Control multidensidad de inventario (Stock por local, tallas y modelos).',
        'Módulo de punto de venta (POS) y caja diaria.',
        'Reportes gráficos de ventas e indicadores financieros.',
        'Arquitectura reactiva con RxJS y consumo eficiente de REST APIs.'
      ]
    }
  ];

  readonly experiences: Experience[] = [
    {
      id: 'alba',
      role: 'Desarrollador Full Stack',
      company: 'ALBA Engineering Development',
      period: 'Enero 2026 — Actualidad',
      companyType: 'Empresa de Ingeniería & Desarrollo de Software',
      responsibilities: [
        'Análisis y diseño de sistemas web con arquitectura MVC y Arquitectura por Capas, aplicando buenas prácticas de componentización e integración con servicios REST.',
        'Desarrollo de lógica Backend con PHP, C#, Node.js y Express, y frameworks como Laravel, conectando aplicaciones a bases de datos MySQL y PostgreSQL.',
        'Diseño y modelado de bases de datos relacionales, optimizando consultas y estructuras de datos para escalabilidad.',
        'Desarrollo de interfaces Frontend con JavaScript, jQuery, Bootstrap, Tailwind y Angular, alineadas a procesos de negocio.',
        'Desarrollo y maquetación de sitios web en WordPress utilizando Elementor y Divi Builder, con enfoque responsive.',
        'Gestión de tareas y proyectos mediante Trello y ClickUp, mejorando la organización y productividad del equipo.',
        'Uso de Git para control de versiones y trabajo colaborativo en el ciclo completo de desarrollo Full Stack.',
        'Capacitación a usuarios finales en el uso de sistemas informáticos nuevos y modificados, facilitando la adopción de nuevas herramientas.',
        'Desarrollo de aplicaciones móviles multiplataforma con React Native.'
      ],
      techUsed: ['PHP', 'C#', 'Laravel', '.NET', 'Node.js', 'Express', 'Angular', 'React Native', 'MySQL', 'PostgreSQL', 'Git', 'WordPress']
    },
    {
      id: 'andrix',
      role: 'Desarrollador Full Stack (Prácticas Preprofesionales)',
      company: 'Andrix Print S.A.C.',
      period: 'Marzo 2025 — Julio 2025',
      companyType: 'Empresa de bordados y producción textil',
      responsibilities: [
        'Diseño y desarrollo del sitio web corporativo, integrando componentes Frontend y Backend bajo arquitectura MVC.',
        'Implementación de mejoras de funcionalidad y experiencia de usuario, fortaleciendo la presencia digital de la organización.',
        'Aplicación de buenas prácticas de desarrollo web utilizando HTML, CSS, JavaScript y frameworks modernos.'
      ],
      techUsed: ['HTML5', 'CSS3', 'JavaScript', 'MVC', 'PHP', 'MySQL']
    },
    {
      id: 'alroma-exp',
      role: 'Asistente de Diseño Técnico',
      company: 'Alroma Servicios Generales E.I.R.L.',
      period: '2023 — 2026',
      companyType: 'Empresa de ingeniería eléctrica',
      responsibilities: [
        'Apoyo en el diseño de redes eléctricas y en la administración de expedientes técnicos, con conocimiento de procesos de negocio del área.',
        'Manejo de AutoCAD y Microsoft Office para el diseño y gestión de proyectos eléctricos, optimizando etapas del proyecto.',
        'Colaboración en la mejora continua de procesos de documentación técnica del área y capacitación interna a usuarios.'
      ],
      techUsed: ['AutoCAD', 'Microsoft Office', 'Modelado de Expedientes', 'Capacitación']
    }
  ];

  readonly education: Education = {
    institution: 'Universidad Privada del Norte (UPN)',
    degree: 'Ingeniería de Sistemas Computacionales',
    period: '2021 — 2026',
    status: 'Egresado'
  };

  readonly certification: Certification = {
    title: 'Inglés — Nivel A2 (MCER)',
    level: 'A2 (Marco Común Europeo de Referencia para las Lenguas)',
    institution: 'Programa de Inglés Regular, WeTalk — Universidad Privada del Norte (UPN)',
    details: 'Acreditación oficial del idioma inglés aprobada con distinción.',
    grade: 'Calificación promedio: 17'
  };
}
