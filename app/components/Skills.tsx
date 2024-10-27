export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "C", "C++", "Assembly", "Swift", "PHP"]
    },
    {
      category: "Web Design",
      items: ["HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      category: "Machine Learning & AI",
      items: [
        "Supervised ML",
        "Multi-Class Neural Networks",
        "Decision Trees",
        "Unsupervised ML"
      ]
    },
    {
      category: "Tools",
      items: [
        "Git",
        "TensorFlow",
        "GDB",
        "Jira",
        "Cryptographic Algorithms"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, i) => (
                  <li key={i} className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg shadow">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}