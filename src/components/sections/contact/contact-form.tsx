export {}
// import { useState } from "react";
// import emailjs from "@emailjs/browser";
//
// export default function EmailForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//
//   function validEmail(email: string) {
//     return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
//   };
//
//   function sendEmail(e: any) {
//     e.preventDefault()
//     if (name == "" || email == "" || message == "") {
//       setError("Missing fields.")
//     } else if (!validEmail(email)) {
//       setError("Invalid email.")
//     } else {
//         try {
//             emailjs.send(
//                 process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
//                 process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
//                 {
//                   name: name,
//                   email: email,
//                   message: message,
//                 },
//                 process.env.REACT_APP_EMAILJS_KEY ?? ""
//             );
//         } catch (err) {
//             console.log(err)
//             setError("Unable to send email.")
//         }
//     }
//   }
//
//
//   return (
//         <form onSubmit={(e) => sendEmail(e)} className="w-full flex flex-col justify-center items-start gap-4">
//             { error && <div className="text-red-600">{error}</div> }
//             <input
//                 className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
//                 type="text"
//                 placeholder="Name"
//                 value={ name }
//                 onChange={e => setName(e.target.value)}
//             />
//             <input
//                 className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
//                 type="text"
//                 placeholder="Email"
//                 value={ email }
//                 onChange={e => setEmail(e.target.value)}
//             />
//             <textarea
//                 rows={8}
//                 className="w-full border-2 border-zinc-300 rounded-md p-2 text-zinc-700 text-md"
//                 placeholder="Your Message Here"
//                 value={ message }
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button className="px-4 py-2 rounded-md border-2 border-zinc-300 m text-zinc-700 hover:bg-zinc-200" type="submit">Send</button>
//         </form>
//   )
// }