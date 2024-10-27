export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl mb-6">
        I&apos;m always eager to explore new opportunities and collaborations. Don&apos;t hesitate to get in touch if you&apos;d like to connect.
        </p>
        <a 
          href="mailto:luise@h4ll3r.net" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Email Me
        </a>
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/luise-haller" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luise-haller-8414bb327/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}