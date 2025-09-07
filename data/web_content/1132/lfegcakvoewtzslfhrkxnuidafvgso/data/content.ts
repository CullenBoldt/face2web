import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "A Casiña da Ponte",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/lfegcakvoewtzslfhrkxnuidafvgso/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/lfegcakvoewtzslfhrkxnuidafvgso/photo_2.jpg",
      paragraph1: "En A Casiña da Ponte, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Castro de Rei, Lugo, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Rúa Poeta Crecente Vega, 15, 27250 Castro de Rei Lugo",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: Cerrado",
        martes: "Martes: 8:00–17:00",
        miercoles: "Miercoles: 8:00–17:00",
        jueves: "Jueves: 8:00–17:00",
        viernes: "Viernes: 8:00–23:30",
        sabado: "Sabado: 8:00–23:30",
        domingo: "Domingo: 8:00–17:00"
      },
      phone: "Teléfono",
      phoneValue: "622 74 36 50",
      whatsappNumber: "622 74 36 50",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en A Casiña da Ponte."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ4XXCdAC_MQ0RwsLf9Za9Rjc"
    },
    footer: {
      copyright: "© 2024 A Casiña da Ponte. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "A Casiña da Ponte",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/lfegcakvoewtzslfhrkxnuidafvgso/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1132/lfegcakvoewtzslfhrkxnuidafvgso/photo_2.jpg",
      paragraph1: "At A Casiña da Ponte, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Castro de Rei, Lugo, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Rúa Poeta Crecente Vega, 15, 27250 Castro de Rei Lugo",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: Closed",
        martes: "Tuesday: 8:00–17:00",
        miercoles: "Wednesday: 8:00–17:00",
        jueves: "Thursday: 8:00–17:00",
        viernes: "Friday: 8:00–23:30",
        sabado: "Saturday: 8:00–23:30",
        domingo: "Sunday: 8:00–17:00"
      },
      phone: "Phone",
      phoneValue: "622 74 36 50",
      whatsappNumber: "622 74 36 50",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at A Casiña da Ponte."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJ4XXCdAC_MQ0RwsLf9Za9Rjc"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
