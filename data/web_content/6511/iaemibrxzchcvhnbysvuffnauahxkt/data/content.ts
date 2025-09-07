import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  ca: {
    header: {
      logo: "Cal Vermell Gósol. casa de menjars",
      nav: {
        home: "Inici",
        menu: "Menú",
        about: "Sobre nosaltres",
        contact: "Contacte"
      }
    },
    hero: {
      title: "Sabors tradicionals al cor de Josa i Tuixén",
      subtitle: "Descobreix la cuina autèntica.",
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_2.jpg",
      paragraph1: "A Cal Vermell Gósol. casa de menjars, estem orgullosos d’oferir una experiència culinària basada en la tradició i els productes de la nostra terra. Som un negoci familiar dedicat a portar els sabors autèntics de la cuina castellana a la vostra taula.",
      paragraph2: "Situat a Josa i Tuixén, Cataluña, el nostre restaurant és un punt de trobada per a amics i famílies. Cada plat està preparat amb cura, seguint receptes que han passat de generació en generació, garantint un menjar casolà i memorable."
    },
    contact: {
      title: "Posa’t en contacte",
      address: "Adreça",
      addressValue: "Pl. Major, 18, 25716 Gósol Lleida",
      openingHours: "Horari d’obertura",
      hours: {
        lunes: "Dilluns: Cerrado",
        martes: "Dimarts: Cerrado",
        miercoles: "Dimecres: Cerrado",
        jueves: "Dijous: 11:00–17:00",
        viernes: "Divendres: 11:00–17:00",
        sabado: "Dissabte: 11:00–17:00",
        domingo: "Diumenge: 11:00–17:00"
      },
      phone: "Telèfon",
      phoneValue: "621 18 10 04",
      whatsappNumber: "621 18 10 04",
      email: "Correu electrònic",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Fer una reserva",
        submit: "Reservar per WhatsApp",
        whatsappMessage: "Hola, m’agradaria fer una reserva a Cal Vermell Gósol. casa de menjars."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJnwMWeyyXpRIRKaWzLSjuVtw"
    },
    footer: {
      copyright: "© 2024 Cal Vermell Gósol. casa de menjars. Tots els drets reservats."
    }
  },
  es: {
    header: {
      logo: "Cal Vermell Gósol. casa de menjars",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Josa i Tuixén",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_2.jpg",
      paragraph1: "En Cal Vermell Gósol. casa de menjars, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Josa i Tuixén, Cataluña, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Pl. Major, 18, 25716 Gósol Lleida",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: Cerrado",
        miercoles: "Miercoles: Cerrado",
        jueves: "Jueves: 11:00–17:00",
        viernes: "Viernes: 11:00–17:00",
        sabado: "Sabado: 11:00–17:00",
        domingo: "Domingo: 11:00–17:00"
      },
      phone: "Teléfono",
      phoneValue: "621 18 10 04",
      whatsappNumber: "621 18 10 04",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Cal Vermell Gósol. casa de menjars."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJnwMWeyyXpRIRKaWzLSjuVtw"
    },
    footer: {
      copyright: "© 2024 Cal Vermell Gósol. casa de menjars. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Cal Vermell Gósol. casa de menjars",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Josa i Tuixén",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/6511/iaemibrxzchcvhnbysvuffnauahxkt/photo_2.jpg",
      paragraph1: "At Cal Vermell Gósol. casa de menjars, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Josa i Tuixén, Cataluña, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Pl. Major, 18, 25716 Gósol Lleida",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: Closed",
        miercoles: "Wednesday: Closed",
        jueves: "Thursday: 11:00–17:00",
        viernes: "Friday: 11:00–17:00",
        sabado: "Saturday: 11:00–17:00",
        domingo: "Sunday: 11:00–17:00"
      },
      phone: "Phone",
      phoneValue: "621 18 10 04",
      whatsappNumber: "621 18 10 04",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Cal Vermell Gósol. casa de menjars."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJnwMWeyyXpRIRKaWzLSjuVtw"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
