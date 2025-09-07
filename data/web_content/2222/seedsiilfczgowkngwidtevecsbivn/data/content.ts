import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "CAFÉ BAR RESTAURANTE LAS VIRTUDES",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Torremejía",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/2222/seedsiilfczgowkngwidtevecsbivn/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/seedsiilfczgowkngwidtevecsbivn/photo_2.jpg",
      paragraph1: "En CAFÉ BAR RESTAURANTE LAS VIRTUDES, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Torremejía, Badajoz, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Av. Extremadura, 61, 6210 Torremejía Badajoz",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 5:30–24:00",
        martes: "Martes: 5:30–23:00",
        miercoles: "Miercoles: 5:30–23:00",
        jueves: "Jueves: 5:30–23:00",
        viernes: "Viernes: Abierto 24 horas",
        sabado: "Sabado: Abierto 24 horas",
        domingo: "Domingo: Abierto 24 horas"
      },
      phone: "Teléfono",
      phoneValue: "664 62 67 72",
      whatsappNumber: "664 62 67 72",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en CAFÉ BAR RESTAURANTE LAS VIRTUDES."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJC9i7c4wfFA0Rb-z6O_8ECLw"
    },
    footer: {
      copyright: "© 2024 CAFÉ BAR RESTAURANTE LAS VIRTUDES. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "CAFÉ BAR RESTAURANTE LAS VIRTUDES",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Torremejía",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/2222/seedsiilfczgowkngwidtevecsbivn/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/seedsiilfczgowkngwidtevecsbivn/photo_2.jpg",
      paragraph1: "At CAFÉ BAR RESTAURANTE LAS VIRTUDES, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Torremejía, Badajoz, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Av. Extremadura, 61, 6210 Torremejía Badajoz",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 5:30–24:00",
        martes: "Tuesday: 5:30–23:00",
        miercoles: "Wednesday: 5:30–23:00",
        jueves: "Thursday: 5:30–23:00",
        viernes: "Friday: Abierto 24 horas",
        sabado: "Saturday: Abierto 24 horas",
        domingo: "Sunday: Abierto 24 horas"
      },
      phone: "Phone",
      phoneValue: "664 62 67 72",
      whatsappNumber: "664 62 67 72",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at CAFÉ BAR RESTAURANTE LAS VIRTUDES."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJC9i7c4wfFA0Rb-z6O_8ECLw"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
