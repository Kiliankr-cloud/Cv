export default function KilianCVWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <CVPage />
    </div>
  );
}

function CVPage() {
  const germanCV = {
    address: "Bitte Adresse hier einfügen",
    workEducation: [
      "Berufserfahrung hier ergänzen",
      "Ausbildung hier ergänzen",
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    projects: ["Projekt 1", "Projekt 2"],
    contact: "Bitte Kontaktdaten hier ergänzen",
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Kilian Kräftner
        </h1>

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-3 rounded-2xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition">
            Download CV as PDF
          </button>
          <button className="px-5 py-3 rounded-2xl bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white shadow-lg hover:opacity-80 transition">
            DE / EN Switch
          </button>
          <button className="px-5 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow-lg hover:opacity-80 transition">
            Light / Dark Mode
          </button>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card title="Address">
          <p>{germanCV.address}</p>
        </Card>

        <Card title="Contact Info">
          <p>{germanCV.contact}</p>
        </Card>

        <Card title="Work Experience / Education">
          <ul className="list-disc list-inside space-y-2">
            {germanCV.workEducation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="Skills">
          <div className="flex flex-wrap gap-2">
            {germanCV.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <Card title="Projects">
          <ul className="list-disc list-inside space-y-2">
            {germanCV.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </Card>
      </section>
    </main>
  );
}

function Card({ title, children }) {
  return (
    <section className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-800 shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}
