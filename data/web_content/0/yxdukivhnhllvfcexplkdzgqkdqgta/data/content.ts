import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Taranttela Gin & Cocktail Room",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Madrid",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/0/yxdukivhnhllvfcexplkdzgqkdqgta/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/0/yxdukivhnhllvfcexplkdzgqkdqgta/photo_2.jpg",
      paragraph1: "En Taranttela Gin & Cocktail Room, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Madrid, Madrid, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. de Cavanilles, 19, 28007 Madrid ",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 18:00–1:30",
        miercoles: "Miercoles: 17:00–1:30",
        jueves: "Jueves: 17:00–1:30",
        viernes: "Viernes: 17:00–2:00",
        sabado: "Sabado: 17:00–2:00",
        domingo: "Domingo: Cerrado"
      },
      phone: "Teléfono",
      phoneValue: "618 61 77 47",
      whatsappNumber: "618 61 77 47",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Taranttela Gin & Cocktail Room."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJs6OSuaQnQg0Rjm6VY4CXIxc"
    },
    footer: {
      copyright: "© 2024 Taranttela Gin & Cocktail Room. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Taranttela Gin & Cocktail Room",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Madrid",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/0/yxdukivhnhllvfcexplkdzgqkdqgta/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/0/yxdukivhnhllvfcexplkdzgqkdqgta/photo_2.jpg",
      paragraph1: "At Taranttela Gin & Cocktail Room, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Madrid, Madrid, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. de Cavanilles, 19, 28007 Madrid ",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 18:00–1:30",
        miercoles: "Wednesday: 17:00–1:30",
        jueves: "Thursday: 17:00–1:30",
        viernes: "Friday: 17:00–2:00",
        sabado: "Saturday: 17:00–2:00",
        domingo: "Sunday: Closed"
      },
      phone: "Phone",
      phoneValue: "618 61 77 47",
      whatsappNumber: "618 61 77 47",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Taranttela Gin & Cocktail Room."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJs6OSuaQnQg0Rjm6VY4CXIxc"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
