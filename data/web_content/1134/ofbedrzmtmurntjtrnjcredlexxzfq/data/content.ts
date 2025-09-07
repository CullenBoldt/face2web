import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Cantina",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ofbedrzmtmurntjtrnjcredlexxzfq/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ofbedrzmtmurntjtrnjcredlexxzfq/photo_2.jpg",
      paragraph1: "En Cantina, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Guadasuar, Valencia, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Av. de la Diputació, 28, 46610 Guadassuar Valencia",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: nan",
        martes: "Martes: nan",
        miercoles: "Miercoles: nan",
        jueves: "Jueves: nan",
        viernes: "Viernes: nan",
        sabado: "Sabado: nan",
        domingo: "Domingo: nan"
      },
      phone: "Teléfono",
      phoneValue: nan,
      whatsappNumber: nan,
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Cantina."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ofbedrzmtmurntjtrnjcredlexxzfq"
    },
    footer: {
      copyright: "© 2024 Cantina. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Cantina",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ofbedrzmtmurntjtrnjcredlexxzfq/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ofbedrzmtmurntjtrnjcredlexxzfq/photo_2.jpg",
      paragraph1: "At Cantina, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Guadasuar, Valencia, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Av. de la Diputació, 28, 46610 Guadassuar Valencia",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: nan",
        martes: "Tuesday: nan",
        miercoles: "Wednesday: nan",
        jueves: "Thursday: nan",
        viernes: "Friday: nan",
        sabado: "Saturday: nan",
        domingo: "Sunday: nan"
      },
      phone: "Phone",
      phoneValue: nan,
      whatsappNumber: nan,
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Cantina."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ofbedrzmtmurntjtrnjcredlexxzfq"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
