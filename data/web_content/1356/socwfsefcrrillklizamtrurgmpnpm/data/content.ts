import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Bar restaurante Lorente Rock",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Ojén",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/1356/socwfsefcrrillklizamtrurgmpnpm/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/socwfsefcrrillklizamtrurgmpnpm/photo_2.jpg",
      paragraph1: "En Bar restaurante Lorente Rock, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Ojén, Málaga, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. Carretera, 32, 29610 Ojén Málaga",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 19:00–24:00",
        miercoles: "Miercoles: 19:00–24:00",
        jueves: "Jueves: 19:00–24:00",
        viernes: "Viernes: 12:30–24:00",
        sabado: "Sabado: 12:30–24:00",
        domingo: "Domingo: 12:30–17:00"
      },
      phone: "Teléfono",
      phoneValue: "664 47 69 24",
      whatsappNumber: "664 47 69 24",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Bar restaurante Lorente Rock."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJxwgXBKbZcg0RRzOSvjCs9ls"
    },
    footer: {
      copyright: "© 2024 Bar restaurante Lorente Rock. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Bar restaurante Lorente Rock",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Ojén",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/1356/socwfsefcrrillklizamtrurgmpnpm/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/socwfsefcrrillklizamtrurgmpnpm/photo_2.jpg",
      paragraph1: "At Bar restaurante Lorente Rock, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Ojén, Málaga, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. Carretera, 32, 29610 Ojén Málaga",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 19:00–24:00",
        miercoles: "Wednesday: 19:00–24:00",
        jueves: "Thursday: 19:00–24:00",
        viernes: "Friday: 12:30–24:00",
        sabado: "Saturday: 12:30–24:00",
        domingo: "Sunday: 12:30–17:00"
      },
      phone: "Phone",
      phoneValue: "664 47 69 24",
      whatsappNumber: "664 47 69 24",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Bar restaurante Lorente Rock."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJxwgXBKbZcg0RRzOSvjCs9ls"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
