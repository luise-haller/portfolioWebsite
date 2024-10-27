import Image from 'next/image';

export default function Projects() {
  const projects = [
    { 
      title: "Inventory App for MVHS Treasure Closet", 
      description: "Digitizes the inventory log, enhancing it with a secure sign-in feature, low stock alerts, and a history tracking system to improve overall usability and design.",
      image: "/treasurePic.png",
      technologies: ["PHP", "CSS", "JavaScript"]
    },
    { 
      title: "CulturesConnect", 
      description: "A web app designed to share daily insights about lesser-known cultures, fostering a deeper appreciation for global diversity beyond mainstream narratives.",
      image: "/cultureConnect.png",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    { 
      title: "Multiplayer UNO game", 
      description: "Allows four or more clients to connect to a central server, enabling real-time gameplay and interaction in a classic card game experience.",
      image: "/uno.png",
      technologies: ["Java"]
    },
    { 
      title: "Car Bootloader Design Challenge", 
      description: "The design challenge at the MIT Beaver Works Summer Institute involved creating a secure car bootloader system through an engaging attack and defense exercise, enhancing my skills in cybersecurity and system design.",
      image: "/bwsi.png",
      technologies: ["C", "Python"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              {/* Add Image component here */}
              <Image
                src={project.image} 
                alt={project.title} 
                width={1000} 
                height={300}
                className="object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-800 px-2 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}