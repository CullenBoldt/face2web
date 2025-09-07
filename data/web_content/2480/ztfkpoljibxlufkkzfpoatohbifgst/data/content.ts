import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Bar - Restaurante Valle de Iguña",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/ztfkpoljibxlufkkzfpoatohbifgst/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/ztfkpoljibxlufkkzfpoatohbifgst/photo_2.jpg",
      paragraph1: "En Bar - Restaurante Valle de Iguña, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Arenas de Iguña , Cantabria, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "N-611, km163, 39450 Arenas de Iguña Cantabria",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 7:00–23:30",
        martes: "Martes: 7:00–23:30",
        miercoles: "Miercoles: 7:00–23:30",
        jueves: "Jueves: 7:00–23:30",
        viernes: "Viernes: 7:00–23:30",
        sabado: "Sabado: 7:00–23:30",
        domingo: "Domingo: 7:00–23:30"
      },
      phone: "Teléfono",
      phoneValue: "644 28 25 21",
      whatsappNumber: "644 28 25 21",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Bar - Restaurante Valle de Iguña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJicf3ZhkiSQ0RDoVTeAB23H8"
    },
    footer: {
      copyright: "© 2024 Bar - Restaurante Valle de Iguña. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Bar - Restaurante Valle de Iguña",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/ztfkpoljibxlufkkzfpoatohbifgst/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/ztfkpoljibxlufkkzfpoatohbifgst/photo_2.jpg",
      paragraph1: "At Bar - Restaurante Valle de Iguña, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Arenas de Iguña , Cantabria, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "N-611, km163, 39450 Arenas de Iguña Cantabria",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 7:00–23:30",
        martes: "Tuesday: 7:00–23:30",
        miercoles: "Wednesday: 7:00–23:30",
        jueves: "Thursday: 7:00–23:30",
        viernes: "Friday: 7:00–23:30",
        sabado: "Saturday: 7:00–23:30",
        domingo: "Sunday: 7:00–23:30"
      },
      phone: "Phone",
      phoneValue: "644 28 25 21",
      whatsappNumber: "644 28 25 21",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Bar - Restaurante Valle de Iguña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJicf3ZhkiSQ0RDoVTeAB23H8"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
