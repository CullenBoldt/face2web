import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Cruzcampo Desayunos Tapas Raciones",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/klvldalpoaqxlfdakfghroneqoeowi/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/klvldalpoaqxlfdakfghroneqoeowi/photo_2.jpg",
      paragraph1: "En Cruzcampo Desayunos Tapas Raciones, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Torremejía, Badajoz, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. Miguel Hernández, 6210 Torremejía Badajoz",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: ",
        martes: "Martes: ",
        miercoles: "Miercoles: ",
        jueves: "Jueves: ",
        viernes: "Viernes: ",
        sabado: "Sabado: ",
        domingo: "Domingo: "
      },
      phone: "Teléfono",
      phoneValue: "",
      whatsappNumber: "",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Cruzcampo Desayunos Tapas Raciones."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJZZ0g-LwfFA0RpTp8w--fG4o"
    },
    footer: {
      copyright: "© 2024 Cruzcampo Desayunos Tapas Raciones. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Cruzcampo Desayunos Tapas Raciones",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/klvldalpoaqxlfdakfghroneqoeowi/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/2222/klvldalpoaqxlfdakfghroneqoeowi/photo_2.jpg",
      paragraph1: "At Cruzcampo Desayunos Tapas Raciones, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Torremejía, Badajoz, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. Miguel Hernández, 6210 Torremejía Badajoz",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: ",
        martes: "Tuesday: ",
        miercoles: "Wednesday: ",
        jueves: "Thursday: ",
        viernes: "Friday: ",
        sabado: "Saturday: ",
        domingo: "Sunday: "
      },
      phone: "Phone",
      phoneValue: "",
      whatsappNumber: "",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Cruzcampo Desayunos Tapas Raciones."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJZZ0g-LwfFA0RpTp8w--fG4o"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
