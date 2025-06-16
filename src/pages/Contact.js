import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact</h2>
      <div className="bg-gray-900 rounded-lg shadow p-8 w-full max-w-md text-center">
        <p className="text-gray-300 text-lg mb-4">
          I'd love to connect! Feel free to reach out to me via email or
          LinkedIn:
        </p>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:your.email@example.com"
            className="text-teal-300 hover:underline text-base font-medium"
          >
            philberthengyz@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/philbertheng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline text-base font-medium"
          >
            linkedin.com/in/philbertheng
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
