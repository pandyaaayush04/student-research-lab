import { useEffect, useState } from "react";

const ResearchAreas = () => {
  const [activeResearch, setActiveResearch] = useState(null);

  const researchWorks = [
    {
      title: "Artificial Intelligence & Machine Learning",
      status: "Ongoing",
      short: "Applied research on intelligent systems and data-driven models.",
      description:
        "This research focuses on machine learning algorithms, intelligent systems, and data-driven decision-making.",
      members: [
        { name: "Aayush Pandya", semester: "4th", branch: "CE" },
        { name: "Mahi Parmar", semester: "4th", branch: "CE" },
      ],
    },
    {
      title: "Cybersecurity & Digital Trust",
      status: "Ongoing",
      short: "Secure systems, cryptography, and trust frameworks.",
      description:
        "This research explores cryptographic techniques and secure system design.",
      members: [
        { name: "Kandarp Gajjar", semester: "8th", branch: "CE" },
        { name: "Hemant Pande", semester: "6th", branch: "CE" },
      ],
    },
    {
      title: "Internet of Things (IoT)",
      status: "Completed",
      short: "Sensor-based systems for real-world monitoring.",
      description:
        "Completed research on IoT sensor networks and monitoring systems.",
      members: [
        { name: "Hemant Pande", semester: "8th", branch: "CE" },
        { name: "Pragati Varu", semester: "4th", branch: "CE" },
      ],
    },
  ];

  const ongoing = researchWorks.filter(r => r.status === "Ongoing");
  const completed = researchWorks.filter(r => r.status === "Completed");

  return (
    <section id="research" className="py-28 px-6 mx-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20">Research Works</h2>

        <h3 className="text-2xl font-semibold mb-8">Ongoing Research</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ongoing.map(work => (
            <div key={work.title} className="border p-6 rounded-xl bg-white">
              <h4 className="font-semibold mb-2">{work.title}</h4>
              <p className="text-sm">{work.short}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-8">Completed Research</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {completed.map(work => (
            <div key={work.title} className="border p-6 rounded-xl bg-white">
              <h4 className="font-semibold mb-2">{work.title}</h4>
              <p className="text-sm">{work.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
