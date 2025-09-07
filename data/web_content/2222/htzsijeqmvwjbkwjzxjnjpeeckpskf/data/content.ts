import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Cervecería Casa Madrile",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/htzsijeqmvwjbkwjzxjnjpeeckpskf/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/htzsijeqmvwjbkwjzxjnjpeeckpskf/photo_2.jpg",
      paragraph1: "En Cervecería Casa Madrile, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Torremejía, Badajoz, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Av. Extremadura, 51, 6210 Torremejía Badajoz",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 18:30–1:30",
        miercoles: "Miercoles: 9:30–16:00, 18:30–1:30",
        jueves: "Jueves: 9:30–16:00, 18:30–1:30",
        viernes: "Viernes: 9:30–16:00, 18:30–1:30",
        sabado: "Sabado: 9:30–16:00, 18:30–1:30",
        domingo: "Domingo: 9:30–16:00, 18:30–1:30"
      },
      phone: "Teléfono",
      phoneValue: "667 01 21 13",
      whatsappNumber: "667 01 21 13",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Cervecería Casa Madrile."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJv2UoLy4fFA0R0pYKRY6l-6k"
    },
    footer: {
      copyright: "© 2024 Cervecería Casa Madrile. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Cervecería Casa Madrile",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/htzsijeqmvwjbkwjzxjnjpeeckpskf/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/htzsijeqmvwjbkwjzxjnjpeeckpskf/photo_2.jpg",
      paragraph1: "At Cervecería Casa Madrile, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Torremejía, Badajoz, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Av. Extremadura, 51, 6210 Torremejía Badajoz",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 18:30–1:30",
        miercoles: "Wednesday: 9:30–16:00, 18:30–1:30",
        jueves: "Thursday: 9:30–16:00, 18:30–1:30",
        viernes: "Friday: 9:30–16:00, 18:30–1:30",
        sabado: "Saturday: 9:30–16:00, 18:30–1:30",
        domingo: "Sunday: 9:30–16:00, 18:30–1:30"
      },
      phone: "Phone",
      phoneValue: "667 01 21 13",
      whatsappNumber: "667 01 21 13",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Cervecería Casa Madrile."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJv2UoLy4fFA0R0pYKRY6l-6k"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
