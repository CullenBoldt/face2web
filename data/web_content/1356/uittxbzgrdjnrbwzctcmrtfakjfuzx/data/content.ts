import { Content, Language } from '../types';

export const content: { [key in Language]: Content } = {
  es: {
    header: {
      logo: "Boca Bistro",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/uittxbzgrdjnrbwzctcmrtfakjfuzx/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/uittxbzgrdjnrbwzctcmrtfakjfuzx/photo_2.jpg",
      paragraph1: "En Boca Bistro, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
      paragraph2: "Ubicado en Ojén, Málaga, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable."
    },
    contact: {
      title: "Ponte en Contacto",
      address: "Dirección",
      addressValue: "C. la Carrera, 13, 29610 Ojén Málaga",
      openingHours: "Horario de Apertura",
      hours: {
        lunes: "Lunes: 19:00–24:00",
        martes: "Martes: 19:00–24:00",
        miercoles: "Miercoles: Cerrado",
        jueves: "Jueves: Cerrado",
        viernes: "Viernes: 19:00–24:00",
        sabado: "Sabado: 19:00–24:00",
        domingo: "Domingo: 19:00–24:00"
      },
      phone: "Teléfono",
      phoneValue: "747 76 63 53",
      whatsappNumber: "747 76 63 53",
      email: "Correo Electrónico",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Hacer una Reserva",
        submit: "Reservar por WhatsApp",
        whatsappMessage: "Hola, me gustaría hacer una reserva en Boca Bistro."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJLZO23ojZcg0RrjSX2cx3_pU"
    },
    footer: {
      copyright: "© 2024 Boca Bistro. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      logo: "Boca Bistro",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/uittxbzgrdjnrbwzctcmrtfakjfuzx/photo_1.jpg",
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
      image: "https://storage.googleapis.com/gastronomio_images/1356/uittxbzgrdjnrbwzctcmrtfakjfuzx/photo_2.jpg",
      paragraph1: "At Boca Bistro, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
      paragraph2: "Located in the Ojén, Málaga, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal."
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      addressValue: "C. la Carrera, 13, 29610 Ojén Málaga",
      openingHours: "Opening Hours",
      hours: {
        lunes: "Monday: 19:00–24:00",
        martes: "Tuesday: 19:00–24:00",
        miercoles: "Wednesday: Closed",
        jueves: "Thursday: Closed",
        viernes: "Friday: 19:00–24:00",
        sabado: "Saturday: 19:00–24:00",
        domingo: "Sunday: 19:00–24:00"
      },
      phone: "Phone",
      phoneValue: "747 76 63 53",
      whatsappNumber: "747 76 63 53",
      email: "Email",
      emailValue: "reservas@gastronom.io",
      reservation: {
        title: "Make a Reservation",
        submit: "Book via WhatsApp",
        whatsappMessage: "Hello, I would like to make a reservation at Boca Bistro."
      },
      embed_url: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDm6MhtGVlGk0laRqDIqYN0dWQwAogjBJs&q=place_id:ChIJLZO23ojZcg0RrjSX2cx3_pU"
    },
    footer: {
      copyright: "© 2025 gastronom.io - All rights reserved."
    }
  }
};
