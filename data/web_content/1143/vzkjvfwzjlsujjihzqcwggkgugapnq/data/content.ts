import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  ca: {
    header: {
      logo: "Restaurante Molí l’Abad",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_2.jpg",
      paragraph1: "A Restaurante Molí l’Abad, estem orgullosos d’oferir una experiència culinària basada en la tradició i els productes de la nostra terra. Som un negoci familiar dedicat a portar els sabors autèntics de la cuina castellana a la vostra taula.",
      paragraph2: "Situat a La Sénia, Cataluña, el nostre restaurant és un punt de trobada per a amics i famílies. Cada plat està preparat amb cura, seguint receptes que han passat de generació en generació, garantint un menjar casolà i memorable."
    },
    contact: {
      title: "Posa’t en contacte",
      address: "Adreça",
      addressValue: "CV-105, km 5, 12599  Castellón",
      openingHours: "Horari d’obertura",
      hours: {
        lunes: "Dilluns: ",
        martes: "Dimarts: ",
        miercoles: "Dimecres: ",
        jueves: "Dijous: ",
        viernes: "Divendres: ",
        sabado: "Dissabte: ",
        domingo: "Diumenge: "
      },
      phone: "Telèfon",
      phoneValue: "",
      whatsappNumber: "",
      email: "Correu electrònic",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Fer una reserva",
        submit: "Reservar per WhatsApp",
        whatsappMessage: "Hola, m’agradaria fer una reserva a Restaurante Molí l’Abad."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJDzhiLACLoBIRKKRXlMvyJxg"
    },
    footer: {
      copyright: "© 2024 Restaurante Molí l’Abad. Tots els drets reservats."
    }
  },
  es: {
    header: {
      logo: "Restaurante Molí l’Abad",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_2.jpg",
      paragraph1: "En Restaurante Molí l’Abad, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en La Sénia, Cataluña, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "CV-105, km 5, 12599  Castellón",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: ",
        martes: "Martes: ",
        miercoles: "Miercoles: ",
        jueves: "Jueves: ",
        viernes: "Viernes: ",
        sabado: "Sabado: ",
        domingo: "Domingo: "
      },
      phone: "Teléfono",
      phoneValue: "",
      whatsappNumber: "",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Restaurante Molí l’Abad."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJDzhiLACLoBIRKKRXlMvyJxg"
    },
    footer: {
      copyright: "© 2024 Restaurante Molí l’Abad. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Restaurante Molí l’Abad",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1143/vzkjvfwzjlsujjihzqcwggkgugapnq/photo_2.jpg",
      paragraph1: "At Restaurante Molí l’Abad, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the La Sénia, Cataluña, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "CV-105, km 5, 12599  Castellón",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: ",
        martes: "Tuesday: ",
        miercoles: "Wednesday: ",
        jueves: "Thursday: ",
        viernes: "Friday: ",
        sabado: "Saturday: ",
        domingo: "Sunday: "
      },
      phone: "Phone",
      phoneValue: "",
      whatsappNumber: "",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Restaurante Molí l’Abad."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJDzhiLACLoBIRKKRXlMvyJxg"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
