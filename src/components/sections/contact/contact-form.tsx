import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
  const emailjs_key = process.env.REACT_APP_EMAILJS_KEY ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function validEmail(email: string) {
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  function sendEmail(e: any) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError("Missing fields.");
    } else if (!validEmail(email)) {
      setError("Invalid email.");
    } else {
      try {
        emailjs.send(
          service_id,
          template_id,
          {
            name: name,
            email: email,
            message: message,
          },
          emailjs_key
        );
      } catch (err) {
        console.log(err);
        setError("Unable to send email.");
      };
    };
  };

  return (
    <form
      onSubmit={(e) => sendEmail(e)}
      className="w-1/2 m-2 flex flex-col gap-2"
    >
      {error && <div className="regular text-md text-red-500">{error}</div>}

      <div className="w-full flex flex-row">
        <input
          className="flex flex-grow mr-2 px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-md border-2 border-gray-200 dark:border-gray-800 regular text-md text-gray-700 dark:text-gray-300 placeholder-gray-500 focus:outline-none"
          type="text"
          autoComplete="none"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className="w-3/4 px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-md border-2 border-gray-200 dark:border-gray-800 regular text-md text-gray-700 dark:text-gray-300 placeholder-gray-500 focus:outline-none"
          type="text"
          autoComplete="none"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <textarea
        rows={8}
        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-md border-2 border-gray-200 dark:border-gray-800 regular text-md text-gray-700 dark:text-gray-300 placeholder-gray-500 focus:outline-none"
        autoComplete="none"
        placeholder="Your Message Here"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button
        className="w-1/6 p-2 mt-2 bg-gray-800 dark:bg-gray-200 rounded-full regular text-md text-gray-300 dark:text-gray-700 hover:text-gray-500 dark:hover:text-gray-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;