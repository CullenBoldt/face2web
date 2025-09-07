import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "kebab shahid",
      nav: {
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
      }
    },
    hero: {
      title: "Sabor Tradicional en el Corazón de Guadasuar",
      subtitle: "Descubre la auténtica cocina.",
      image: "https://storage.googleapis.com/gastronomio_images/1134/ahnhkkzzoqempmomfkynpvzwzgdgpr/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ahnhkkzzoqempmomfkynpvzwzgdgpr/photo_2.jpg",
      paragraph1: "En kebab shahid, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Guadasuar, Valencia, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "Plaça Reginaldo Barbera Jorn, 46610 Guadassuar Valencia",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 12:00–24:00",
        martes: "Martes: 12:00–24:00",
        miercoles: "Miercoles: 12:00–24:00",
        jueves: "Jueves: 12:00–24:00",
        viernes: "Viernes: 23:00–24:00",
        sabado: "Sabado: 23:00–24:00",
        domingo: "Domingo: 23:00–24:00"
      },
      phone: "Teléfono",
      phoneValue: "632 15 36 58",
      whatsappNumber: "632 15 36 58",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en kebab shahid."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=&q=place_id:ChIJS6PPx8uvYQ0R3WO2UEbm4Ck"
    },
    footer: {
      copyright: "© 2024 kebab shahid. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "kebab shahid",
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
      }
    },
    hero: {
      title: "Traditional Flavor in the Heart of Guadasuar",
      subtitle: "Discover authentic Castilian cuisine.",
      image: "https://storage.googleapis.com/gastronomio_images/1134/ahnhkkzzoqempmomfkynpvzwzgdgpr/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1134/ahnhkkzzoqempmomfkynpvzwzgdgpr/photo_2.jpg",
      paragraph1: "At kebab shahid, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Guadasuar, Valencia, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "Plaça Reginaldo Barbera Jorn, 46610 Guadassuar Valencia",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 12:00–24:00",
        martes: "Tuesday: 12:00–24:00",
        miercoles: "Wednesday: 12:00–24:00",
        jueves: "Thursday: 12:00–24:00",
        viernes: "Friday: 23:00–24:00",
        sabado: "Saturday: 23:00–24:00",
        domingo: "Sunday: 23:00–24:00"
      },
      phone: "Phone",
      phoneValue: "632 15 36 58",
      whatsappNumber: "632 15 36 58",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at kebab shahid."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=&q=place_id:ChIJS6PPx8uvYQ0R3WO2UEbm4Ck"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
