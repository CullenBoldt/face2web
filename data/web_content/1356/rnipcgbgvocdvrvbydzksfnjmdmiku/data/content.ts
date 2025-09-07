import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "VIKINGO TABERNA GOURMET",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/rnipcgbgvocdvrvbydzksfnjmdmiku/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/rnipcgbgvocdvrvbydzksfnjmdmiku/photo_2.jpg",
      paragraph1: "En VIKINGO TABERNA GOURMET, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Ojén, Málaga, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Plaza Andalucía, 4, 29610 Ojén Málaga",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 18:00–24:00",
        miercoles: "Miercoles: 18:00–24:00",
        jueves: "Jueves: 18:00–24:00",
        viernes: "Viernes: 18:00–24:00",
        sabado: "Sabado: 18:00–24:00",
        domingo: "Domingo: 18:00–24:00"
      },
      phone: "Teléfono",
      phoneValue: "626 80 56 55",
      whatsappNumber: "626 80 56 55",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en VIKINGO TABERNA GOURMET."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJzf9kWZ3Zcg0RSEG9eEsm-Kw"
    },
    footer: {
      copyright: "© 2024 VIKINGO TABERNA GOURMET. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "VIKINGO TABERNA GOURMET",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/rnipcgbgvocdvrvbydzksfnjmdmiku/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/rnipcgbgvocdvrvbydzksfnjmdmiku/photo_2.jpg",
      paragraph1: "At VIKINGO TABERNA GOURMET, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Ojén, Málaga, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Plaza Andalucía, 4, 29610 Ojén Málaga",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 18:00–24:00",
        miercoles: "Wednesday: 18:00–24:00",
        jueves: "Thursday: 18:00–24:00",
        viernes: "Friday: 18:00–24:00",
        sabado: "Saturday: 18:00–24:00",
        domingo: "Sunday: 18:00–24:00"
      },
      phone: "Phone",
      phoneValue: "626 80 56 55",
      whatsappNumber: "626 80 56 55",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at VIKINGO TABERNA GOURMET."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJzf9kWZ3Zcg0RSEG9eEsm-Kw"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
