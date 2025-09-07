import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Polideportivo Municipal Guadassuar",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/rearkeevsjzabspgjxufiedlmklcha/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/rearkeevsjzabspgjxufiedlmklcha/photo_2.jpg",
      paragraph1: "En Polideportivo Municipal Guadassuar, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Guadasuar, Valencia, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. Tarragona, 30, 46610 Guadasuar Valencia",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Abierto 24 horas",
        martes: "Martes: Abierto 24 horas",
        miercoles: "Miercoles: Abierto 24 horas",
        jueves: "Jueves: Abierto 24 horas",
        viernes: "Viernes: Abierto 24 horas",
        sabado: "Sabado: Abierto 24 horas",
        domingo: "Domingo: Abierto 24 horas"
      },
      phone: "Teléfono",
      phoneValue: "696 87 16 81",
      whatsappNumber: "696 87 16 81",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Polideportivo Municipal Guadassuar."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJz8ThN6WvYQ0RLpWGlj0lW9k"
    },
    footer: {
      copyright: "© 2024 Polideportivo Municipal Guadassuar. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Polideportivo Municipal Guadassuar",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/rearkeevsjzabspgjxufiedlmklcha/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/rearkeevsjzabspgjxufiedlmklcha/photo_2.jpg",
      paragraph1: "At Polideportivo Municipal Guadassuar, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Guadasuar, Valencia, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. Tarragona, 30, 46610 Guadasuar Valencia",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Abierto 24 horas",
        martes: "Tuesday: Abierto 24 horas",
        miercoles: "Wednesday: Abierto 24 horas",
        jueves: "Thursday: Abierto 24 horas",
        viernes: "Friday: Abierto 24 horas",
        sabado: "Saturday: Abierto 24 horas",
        domingo: "Sunday: Abierto 24 horas"
      },
      phone: "Phone",
      phoneValue: "696 87 16 81",
      whatsappNumber: "696 87 16 81",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Polideportivo Municipal Guadassuar."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJz8ThN6WvYQ0RLpWGlj0lW9k"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
