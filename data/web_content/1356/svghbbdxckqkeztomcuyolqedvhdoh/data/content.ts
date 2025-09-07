import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Restaurante Bar Castillo Solis",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/svghbbdxckqkeztomcuyolqedvhdoh/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/svghbbdxckqkeztomcuyolqedvhdoh/photo_2.jpg",
      paragraph1: "En Restaurante Bar Castillo Solis, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Ojén, Málaga, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. Carretera, 41, 29610 Ojén Málaga",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 9:00–1:00",
        miercoles: "Miercoles: 9:00–1:00",
        jueves: "Jueves: 9:00–1:00",
        viernes: "Viernes: 9:00–1:00",
        sabado: "Sabado: 9:00–1:00",
        domingo: "Domingo: 10:00–24:00"
      },
      phone: "Teléfono",
      phoneValue: "952 88 17 10",
      whatsappNumber: "952 88 17 10",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Restaurante Bar Castillo Solis."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJr1tHIqbZcg0RQXleP__A1VU"
    },
    footer: {
      copyright: "© 2024 Restaurante Bar Castillo Solis. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Restaurante Bar Castillo Solis",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/svghbbdxckqkeztomcuyolqedvhdoh/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/svghbbdxckqkeztomcuyolqedvhdoh/photo_2.jpg",
      paragraph1: "At Restaurante Bar Castillo Solis, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Ojén, Málaga, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. Carretera, 41, 29610 Ojén Málaga",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 9:00–1:00",
        miercoles: "Wednesday: 9:00–1:00",
        jueves: "Thursday: 9:00–1:00",
        viernes: "Friday: 9:00–1:00",
        sabado: "Saturday: 9:00–1:00",
        domingo: "Sunday: 10:00–24:00"
      },
      phone: "Phone",
      phoneValue: "952 88 17 10",
      whatsappNumber: "952 88 17 10",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Restaurante Bar Castillo Solis."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJr1tHIqbZcg0RQXleP__A1VU"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
