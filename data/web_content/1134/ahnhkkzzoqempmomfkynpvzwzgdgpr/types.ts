
export type Language = 'en' | 'es';

export interface MenuItem {
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  price: string;
  category: string;
}

export interface HeaderContent {
  logo: string;
  nav: {
    home: string;
    menu: string;
    about: string;
    contact: string;
  };
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface MenuContent {
  title: string;
  categories: {
    all: string;
    appetizers: string;
    mainCourses: string;
    desserts: string;
    drinks: string;
  };
}

export interface AboutContent {
  title:string;
  paragraph1: string;
  paragraph2: string;
}

export interface ContactContent {
  title: string;
  address: string;
  addressValue: string;
  openingHours: string;
  hours: {
    monFri: string;
    saturday: string;
    sunday: string;
  };
  phone: string;
  phoneValue: string;
  whatsappNumber: string;
  email: string;
  emailValue: string;
  reservation: {
    title: string;
    submit: string;
    whatsappMessage: string;
  }
}

export interface FooterContent {
  copyright: string;
}


export interface Content {
  header: HeaderContent;
  hero: HeroContent;
  menu: MenuContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
}