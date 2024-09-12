import { useState } from "react";
import emailjs from "@emailjs/browser";
import Email from "../assets/svg/Email";

interface StatusProps {
  message: string;
  isError: boolean;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<StatusProps>({
    message: "",
    isError: false
  });

  function validEmail(email: string) {
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  };

  function sendEmail(e: any) {
    e.preventDefault()
    if (name == "") {
      setStatus({
        message: "Name not provided.",
        isError: true
      })
      return;
    } else if (!validEmail(email)) {
      setStatus({
        message: "Invalid email.",
        isError: true
      })
      return;
    } else if (message == "") {
      setStatus({
        message: "Empty message.",
        isError: true
      })
      return;
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "", 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
      {
        name: name,
        email: email,
        message: message,
      }, 
      process.env.REACT_APP_EMAILJS_KEY ?? ""
    );
    setStatus({
      message: "Email sent!",
      isError: false
    })
  }


  return (
    <section id="contact" className="pl-[34.5rem] pr-20 pt-16">
      <form onSubmit={(e) => sendEmail(e)} className="w-full flex flex-col justify-center items-start gap-4">
            <div>
              <div className="sb text-2xl text-zinc-900">Contact</div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Email />
                <div className="text-zinc-700">anniewenqingguo@gmail.com</div>
              </div>
            </div>
            { status.message != "" && (
              <div className={ status.isError ? "text-sm m text-red-600" : "text-sm m text-green-600" }>{ status.message }</div>
            )}
            <input 
                className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
                type="text" 
                placeholder="Name" 
                value={ name } 
                onChange={e => setName(e.target.value)}
            />
            <input 
                className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
                type="text" 
                placeholder="Email" 
                value={ email } 
                onChange={e => setEmail(e.target.value)}
            />
            <textarea 
                rows={8}
                className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
                placeholder="Your Message Here"
                value={ message } 
                onChange={e => setMessage(e.target.value)}
            />
            <button className="px-4 py-2 rounded-md border-2 border-zinc-300 m text-zinc-700 hover:bg-zinc-200" type="submit">Send</button>
        </form>
    </section>
  )
}
