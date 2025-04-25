import data from '../../../config.json';
import ContactForm from './contact-form';
import Email from '../../common/icons/email';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <div className="text-2xl desktop:text-3xl medium">Get in Touch.</div>
        <div className="text-base desktop:text-lg text-gray-500 flex flex-row items-center gap-1 desktop:gap-2">
          <a
            className="contact-form-icon scale-[0.8] desktop:scale-100"
            href={data.links.email}
            target="_blank"
            rel="noreferrer"
          >
            <Email />
          </a>
          anniewenqingguo@gmail.com
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;