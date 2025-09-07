import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Restaurante El Túnel",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/fcmgiegachkdoylmcaqyqedpwrvyhk/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/fcmgiegachkdoylmcaqyqedpwrvyhk/photo_2.jpg",
      paragraph1: "En Restaurante El Túnel, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Ojén, Málaga, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. la Carrera, 44, 29610 Ojén Málaga",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 13:00–16:00, 19:30–23:30",
        martes: "Martes: Cerrado",
        miercoles: "Miercoles: 13:00–16:00, 19:30–23:30",
        jueves: "Jueves: 13:00–16:00, 19:30–23:30",
        viernes: "Viernes: 13:00–16:00, 20:00–23:30",
        sabado: "Sabado: 13:00–16:00, 20:00–23:30",
        domingo: "Domingo: 13:00–16:00, 19:30–23:30"
      },
      phone: "Teléfono",
      phoneValue: "662 38 83 87",
      whatsappNumber: "662 38 83 87",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Restaurante El Túnel."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJOV0YhajZcg0RTn9th8fwBSw"
    },
    footer: {
      copyright: "© 2024 Restaurante El Túnel. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Restaurante El Túnel",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/fcmgiegachkdoylmcaqyqedpwrvyhk/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/fcmgiegachkdoylmcaqyqedpwrvyhk/photo_2.jpg",
      paragraph1: "At Restaurante El Túnel, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Ojén, Málaga, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. la Carrera, 44, 29610 Ojén Málaga",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 13:00–16:00, 19:30–23:30",
        martes: "Tuesday: Closed",
        miercoles: "Wednesday: 13:00–16:00, 19:30–23:30",
        jueves: "Thursday: 13:00–16:00, 19:30–23:30",
        viernes: "Friday: 13:00–16:00, 20:00–23:30",
        sabado: "Saturday: 13:00–16:00, 20:00–23:30",
        domingo: "Sunday: 13:00–16:00, 19:30–23:30"
      },
      phone: "Phone",
      phoneValue: "662 38 83 87",
      whatsappNumber: "662 38 83 87",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Restaurante El Túnel."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJOV0YhajZcg0RTn9th8fwBSw"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
