import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Bar El Rincón",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qwaycrsxvfjsioedzckbayihulazpd/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qwaycrsxvfjsioedzckbayihulazpd/photo_2.jpg",
      paragraph1: "En Bar El Rincón, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Arenas de Iguña , Cantabria, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Av. General, 56, 39450 Arenas de Iguña Cantabria",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 8:00–24:00",
        martes: "Martes: 8:00–24:00",
        miercoles: "Miercoles: 8:00–24:00",
        jueves: "Jueves: 8:00–24:00",
        viernes: "Viernes: 8:00–24:00",
        sabado: "Sabado: 9:00–24:00",
        domingo: "Domingo: 9:00–24:00"
      },
      phone: "Teléfono",
      phoneValue: "622 21 03 47",
      whatsappNumber: "622 21 03 47",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Bar El Rincón."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJa9UwUh8iSQ0Rrld1h5ZT4bE"
    },
    footer: {
      copyright: "© 2024 Bar El Rincón. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Bar El Rincón",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qwaycrsxvfjsioedzckbayihulazpd/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2480/qwaycrsxvfjsioedzckbayihulazpd/photo_2.jpg",
      paragraph1: "At Bar El Rincón, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Arenas de Iguña , Cantabria, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Av. General, 56, 39450 Arenas de Iguña Cantabria",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 8:00–24:00",
        martes: "Tuesday: 8:00–24:00",
        miercoles: "Wednesday: 8:00–24:00",
        jueves: "Thursday: 8:00–24:00",
        viernes: "Friday: 8:00–24:00",
        sabado: "Saturday: 9:00–24:00",
        domingo: "Sunday: 9:00–24:00"
      },
      phone: "Phone",
      phoneValue: "622 21 03 47",
      whatsappNumber: "622 21 03 47",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Bar El Rincón."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJa9UwUh8iSQ0Rrld1h5ZT4bE"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
