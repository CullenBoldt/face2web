import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Azúmara Café & Bar",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Castro de Rei",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/1132/whzbyiosmbhhykuewzvoxdwuttdysl/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/whzbyiosmbhhykuewzvoxdwuttdysl/photo_2.jpg",
      paragraph1: "En Azúmara Café & Bar, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Castro de Rei, Lugo, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "R. Alcalde Emilio Sinde Nieto, 67, 27250 Castro de Rei Lugo",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 7:45–16:00, 18:00–2:00",
        miercoles: "Miercoles: 7:45–16:00, 18:00–2:00",
        jueves: "Jueves: 7:45–16:00, 18:00–2:00",
        viernes: "Viernes: 8:00–16:00, 18:00–2:00",
        sabado: "Sabado: 8:00–16:00, 18:00–2:00",
        domingo: "Domingo: 7:45–16:00"
      },
      phone: "Teléfono",
      phoneValue: "665 88 07 14",
      whatsappNumber: "665 88 07 14",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Azúmara Café & Bar."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:whzbyiosmbhhykuewzvoxdwuttdysl"
    },
    footer: {
      copyright: "© 2024 Azúmara Café & Bar. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Azúmara Café & Bar",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Castro de Rei",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/1132/whzbyiosmbhhykuewzvoxdwuttdysl/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/whzbyiosmbhhykuewzvoxdwuttdysl/photo_2.jpg",
      paragraph1: "At Azúmara Café & Bar, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Castro de Rei, Lugo, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "R. Alcalde Emilio Sinde Nieto, 67, 27250 Castro de Rei Lugo",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 7:45–16:00, 18:00–2:00",
        miercoles: "Wednesday: 7:45–16:00, 18:00–2:00",
        jueves: "Thursday: 7:45–16:00, 18:00–2:00",
        viernes: "Friday: 8:00–16:00, 18:00–2:00",
        sabado: "Saturday: 8:00–16:00, 18:00–2:00",
        domingo: "Sunday: 7:45–16:00"
      },
      phone: "Phone",
      phoneValue: "665 88 07 14",
      whatsappNumber: "665 88 07 14",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Azúmara Café & Bar."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:whzbyiosmbhhykuewzvoxdwuttdysl"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
