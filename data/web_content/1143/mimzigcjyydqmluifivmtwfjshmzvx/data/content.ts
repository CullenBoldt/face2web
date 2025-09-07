import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  ca: {
    header: {
      logo: "El Bistró",
      nav: {
        home: "Inici",
        menu: "Menú",
        about: "Sobre nosaltres",
        contact: "Contacte"
      }
    },
    hero: {
      title: "Sabors tradicionals al cor de La Sénia",
      subtitle: "Descobreix la cuina autèntica.",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_1.jpg",
      cta: "Reservar taula"
    },
    menu: {
      title: "El nostre Menú",
      categories: {
        all: "Tots",
        appetizers: "Aperitius",
        mainCourses: "Plats principals",
        desserts: "Postres",
        drinks: "Begudes"
      }
    },
    about: {
      title: "La nostra història",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_2.jpg",
      paragraph1: "A El Bistró, estem orgullosos d’oferir una experiència culinària basada en la tradició i els productes de la nostra terra. Som un negoci familiar dedicat a portar els sabors autèntics de la cuina castellana a la vostra taula.",
      paragraph2: "Situat a La Sénia, Cataluña, el nostre restaurant és un punt de trobada per a amics i famílies. Cada plat està preparat amb cura, seguint receptes que han passat de generació en generació, garantint un menjar casolà i memorable."
    },
    contact: {
      title: "Posa’t en contacte",
      address: "Adreça",
      addressValue: "Carrer Lleida, 10, 43560 La Sénia Tarragona",
      openingHours: "Horari d’obertura",
      hours: {
        lunes: "Dilluns: 19:00–23:00",
        martes: "Dimarts: 19:00–23:00",
        miercoles: "Dimecres: 19:00–23:00",
        jueves: "Dijous: 19:00–23:00",
        viernes: "Divendres: 19:00–23:00",
        sabado: "Dissabte: 19:00–23:00",
        domingo: "Diumenge: 9:00–12:00, 19:00–23:00"
      },
      phone: "Telèfon",
      phoneValue: "623 11 62 61",
      whatsappNumber: "623 11 62 61",
      email: "Correu electrònic",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Fer una reserva",
        submit: "Reservar per WhatsApp",
        whatsappMessage: "Hola, m’agradaria fer una reserva a El Bistró."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJNY-H5zOLoBIRUyGpNIcRoVY"
    },
    footer: {
      copyright: "© 2024 El Bistró. Tots els drets reservats."
    }
  },
  es: {
    header: {
      logo: "El Bistró",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de La Sénia",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_1.jpg",
      cta: "Reservar Mesa"
    },
    menu: {
      title: "Nuestro Menú",
      categories: {
        all: "Todos",
        appetizers: "Entrantes",
        mainCourses: "Principales",
        desserts: "Postres",
        drinks: "Bebidas"
      }
    },
    about: {
      title: "Nuestra Historia",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_2.jpg",
      paragraph1: "En El Bistró, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en La Sénia, Cataluña, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Carrer Lleida, 10, 43560 La Sénia Tarragona",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 19:00–23:00",
        martes: "Martes: 19:00–23:00",
        miercoles: "Miercoles: 19:00–23:00",
        jueves: "Jueves: 19:00–23:00",
        viernes: "Viernes: 19:00–23:00",
        sabado: "Sabado: 19:00–23:00",
        domingo: "Domingo: 9:00–12:00, 19:00–23:00"
      },
      phone: "Teléfono",
      phoneValue: "623 11 62 61",
      whatsappNumber: "623 11 62 61",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en El Bistró."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJNY-H5zOLoBIRUyGpNIcRoVY"
    },
    footer: {
      copyright: "© 2024 El Bistró. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "El Bistró",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of La Sénia",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_1.jpg",
      cta: "Book a Table"
    },
    menu: {
      title: "Our Menu",
      categories: {
        all: "All",
        appetizers: "Appetizers",
        mainCourses: "Main Courses",
        desserts: "Desserts",
        drinks: "Drinks"
      }
    },
    about: {
      title: "Our Story",
      image: "https://storage.googleapis.com/gastronomio_images/1143/mimzigcjyydqmluifivmtwfjshmzvx/photo_2.jpg",
      paragraph1: "At El Bistró, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the La Sénia, Cataluña, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Carrer Lleida, 10, 43560 La Sénia Tarragona",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 19:00–23:00",
        martes: "Tuesday: 19:00–23:00",
        miercoles: "Wednesday: 19:00–23:00",
        jueves: "Thursday: 19:00–23:00",
        viernes: "Friday: 19:00–23:00",
        sabado: "Saturday: 19:00–23:00",
        domingo: "Sunday: 9:00–12:00, 19:00–23:00"
      },
      phone: "Phone",
      phoneValue: "623 11 62 61",
      whatsappNumber: "623 11 62 61",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at El Bistró."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJNY-H5zOLoBIRUyGpNIcRoVY"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
