
import React from 'react';
import { ContactContent } from '../types';
import { AnimatedSection } from './AnimatedSection';

interface ContactProps {
  content: ContactContent;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif text-center font-bold mb-4">{content.title}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <AnimatedSection className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">{content.address}</h3>
              <p className="text-secondary">{content.addressValue}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">{content.openingHours}</h3>
              <p className="text-secondary">{content.hours.lunes}</p>
              <p className="text-secondary">{content.hours.martes}</p>
              <p className="text-secondary">{content.hours.miercoles}</p>
              <p className="text-secondary">{content.hours.jueves}</p>
              <p className="text-secondary">{content.hours.viernes}</p>
              <p className="text-secondary">{content.hours.sabado}</p>
              <p className="text-secondary">{content.hours.domingo}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">{content.phone}</h3>
              <p className="text-secondary">{content.phoneValue}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">{content.email}</h3>
              <p className="text-secondary">{content.emailValue}</p>
            </div>
          </AnimatedSection>

          {/* Reservation Button */}
          <AnimatedSection className="md:col-span-2 bg-background p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-primary">{content.reservation.title}</h3>
            <a
              href={`https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(content.reservation.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-background font-bold py-3 px-8 rounded-md text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 inline-block"
              aria-label="Book a table via WhatsApp"
            >
              {content.reservation.submit}
            </a>
          </AnimatedSection>
        </div>
        
        {/* Map Placeholder */}
        <AnimatedSection className="mt-16">
            <div className="w-full h-80 sm:h-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Restaurant Location"
                    src={content.embed_url}
                ></iframe>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
};