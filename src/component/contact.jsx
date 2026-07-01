import { useState } from 'react';
export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "ce27e3e7-32bf-4e9f-8840-2bf0ea8c0f95"); // Ensure you use your new key!

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Something went wrong.");
    if(data.success) event.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        className="p-3 bg-gray-800 border border-gray-600 rounded text-white" 
        required
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        className="p-3 bg-gray-800 border border-gray-600 rounded text-white" 
        required
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        className="p-3 bg-gray-800 border border-gray-600 rounded text-white h-32" 
        required
      ></textarea>
      <button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
      >
        Submit
      </button>
      <p className="text-sm">{result}</p>
    </form>
  );
}