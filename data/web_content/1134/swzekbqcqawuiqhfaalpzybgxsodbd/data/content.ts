import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Pizzería Da Vito",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Guadasuar",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/1134/swzekbqcqawuiqhfaalpzybgxsodbd/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/swzekbqcqawuiqhfaalpzybgxsodbd/photo_2.jpg",
      paragraph1: "En Pizzería Da Vito, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Guadasuar, Valencia, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Carrer les Escoles, 1, 46610 Guadassuar Valencia",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: Cerrado",
        miercoles: "Miercoles: Cerrado",
        jueves: "Jueves: 20:00–0:30",
        viernes: "Viernes: 20:00–0:30",
        sabado: "Sabado: 13:00–15:30, 20:00–0:30",
        domingo: "Domingo: 13:00–15:30, 20:00–0:30"
      },
      phone: "Teléfono",
      phoneValue: "666 17 20 80",
      whatsappNumber: "666 17 20 80",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Pizzería Da Vito."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=&q=place_id:ChIJAzTRpAOvYQ0R-xfqnXr6v34"
    },
    footer: {
      copyright: "© 2024 Pizzería Da Vito. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Pizzería Da Vito",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Guadasuar",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/1134/swzekbqcqawuiqhfaalpzybgxsodbd/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/swzekbqcqawuiqhfaalpzybgxsodbd/photo_2.jpg",
      paragraph1: "At Pizzería Da Vito, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Guadasuar, Valencia, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Carrer les Escoles, 1, 46610 Guadassuar Valencia",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: Closed",
        miercoles: "Wednesday: Closed",
        jueves: "Thursday: 20:00–0:30",
        viernes: "Friday: 20:00–0:30",
        sabado: "Saturday: 13:00–15:30, 20:00–0:30",
        domingo: "Sunday: 13:00–15:30, 20:00–0:30"
      },
      phone: "Phone",
      phoneValue: "666 17 20 80",
      whatsappNumber: "666 17 20 80",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Pizzería Da Vito."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=&q=place_id:ChIJAzTRpAOvYQ0R-xfqnXr6v34"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
