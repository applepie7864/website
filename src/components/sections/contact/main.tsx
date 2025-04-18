import React from 'react';
import ContactForm from './contact-form';

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="text-3xl medium text-gray-800 dark:text-gray-200">Contact</div>
        <div className="text-lg regular text-gray-500">Let's get in touch &nbsp;🌸</div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;