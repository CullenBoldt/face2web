import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Area De Servicio Arenas De Iguña",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Arenas de Iguña ",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/2480/qkagenujvsaommffilfbvzgqmgthwk/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qkagenujvsaommffilfbvzgqmgthwk/photo_2.jpg",
      paragraph1: "En Area De Servicio Arenas De Iguña, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Arenas de Iguña , Cantabria, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: ", 39450 Arenas de Iguña Cantabria",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 11:00–16:30, 20:00–22:00",
        martes: "Martes: 11:00–22:00",
        miercoles: "Miercoles: 11:00–22:00",
        jueves: "Jueves: 11:00–22:00",
        viernes: "Viernes: 11:00–22:00",
        sabado: "Sabado: 11:00–22:00",
        domingo: "Domingo: 11:00–22:00"
      },
      phone: "Teléfono",
      phoneValue: "",
      whatsappNumber: "",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Area De Servicio Arenas De Iguña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJzzzeQR4iSQ0RCYlng2VTQU8"
    },
    footer: {
      copyright: "© 2024 Area De Servicio Arenas De Iguña. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Area De Servicio Arenas De Iguña",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Arenas de Iguña ",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/2480/qkagenujvsaommffilfbvzgqmgthwk/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qkagenujvsaommffilfbvzgqmgthwk/photo_2.jpg",
      paragraph1: "At Area De Servicio Arenas De Iguña, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Arenas de Iguña , Cantabria, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: ", 39450 Arenas de Iguña Cantabria",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 11:00–16:30, 20:00–22:00",
        martes: "Tuesday: 11:00–22:00",
        miercoles: "Wednesday: 11:00–22:00",
        jueves: "Thursday: 11:00–22:00",
        viernes: "Friday: 11:00–22:00",
        sabado: "Saturday: 11:00–22:00",
        domingo: "Sunday: 11:00–22:00"
      },
      phone: "Phone",
      phoneValue: "",
      whatsappNumber: "",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Area De Servicio Arenas De Iguña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJzzzeQR4iSQ0RCYlng2VTQU8"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
