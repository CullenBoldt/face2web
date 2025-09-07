import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "ElChirin",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Arenas de Iguña ",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/2480/pgmvkkcdnfyhdqbjsergmjzkddfvfi/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/pgmvkkcdnfyhdqbjsergmjzkddfvfi/photo_2.jpg",
      paragraph1: "En ElChirin, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Arenas de Iguña , Cantabria, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. Collantes, 65A, 39450 Las Fraguas Cantabria",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 10:00–0:30",
        miercoles: "Miercoles: 10:00–0:30",
        jueves: "Jueves: 10:00–0:30",
        viernes: "Viernes: 10:00–2:30",
        sabado: "Sabado: 10:00–2:30",
        domingo: "Domingo: 10:00–0:30"
      },
      phone: "Teléfono",
      phoneValue: "633 38 96 38",
      whatsappNumber: "633 38 96 38",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en ElChirin."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ_wPJdxEiSQ0R7Tyb2xx7uEw"
    },
    footer: {
      copyright: "© 2024 ElChirin. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "ElChirin",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Arenas de Iguña ",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/2480/pgmvkkcdnfyhdqbjsergmjzkddfvfi/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/pgmvkkcdnfyhdqbjsergmjzkddfvfi/photo_2.jpg",
      paragraph1: "At ElChirin, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Arenas de Iguña , Cantabria, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. Collantes, 65A, 39450 Las Fraguas Cantabria",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 10:00–0:30",
        miercoles: "Wednesday: 10:00–0:30",
        jueves: "Thursday: 10:00–0:30",
        viernes: "Friday: 10:00–2:30",
        sabado: "Saturday: 10:00–2:30",
        domingo: "Sunday: 10:00–0:30"
      },
      phone: "Phone",
      phoneValue: "633 38 96 38",
      whatsappNumber: "633 38 96 38",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at ElChirin."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ_wPJdxEiSQ0R7Tyb2xx7uEw"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
