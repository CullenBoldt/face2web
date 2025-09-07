import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Café Bar La Niña",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/rjjlizdaprpjmeevcxpiulanwxhzgt/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/rjjlizdaprpjmeevcxpiulanwxhzgt/photo_2.jpg",
      paragraph1: "En Café Bar La Niña, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Torremejía, Badajoz, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Av. Extremadura, 62, 6210 Torremejía Badajoz",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 6:00–22:00",
        miercoles: "Miercoles: 6:00–22:00",
        jueves: "Jueves: 6:00–22:00",
        viernes: "Viernes: 6:00–23:00",
        sabado: "Sabado: 7:00–24:00",
        domingo: "Domingo: 7:00–23:00"
      },
      phone: "Teléfono",
      phoneValue: "824 91 99 22",
      whatsappNumber: "824 91 99 22",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Café Bar La Niña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ639gVwAfFA0ReXnXqtVL248"
    },
    footer: {
      copyright: "© 2024 Café Bar La Niña. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Café Bar La Niña",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/rjjlizdaprpjmeevcxpiulanwxhzgt/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/rjjlizdaprpjmeevcxpiulanwxhzgt/photo_2.jpg",
      paragraph1: "At Café Bar La Niña, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Torremejía, Badajoz, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Av. Extremadura, 62, 6210 Torremejía Badajoz",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 6:00–22:00",
        miercoles: "Wednesday: 6:00–22:00",
        jueves: "Thursday: 6:00–22:00",
        viernes: "Friday: 6:00–23:00",
        sabado: "Saturday: 7:00–24:00",
        domingo: "Sunday: 7:00–23:00"
      },
      phone: "Phone",
      phoneValue: "824 91 99 22",
      whatsappNumber: "824 91 99 22",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Café Bar La Niña."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ639gVwAfFA0ReXnXqtVL248"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
