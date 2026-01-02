import { useState } from "react";

const Team = () => {
  const faculty = [
    {
      name: "Dr. Himani Trivedi",
      role: "Head of MMPSRC & MMPSRPC Cell At LDRP-ITR, KSV",
      specialization: "PhD",
      department: "Computer Engineering",
      research:
        "Student research frameworks, applied AI systems, institutional research development",
    },
  ];

  const students = [
    { name: "Kandarp Gajjar", role: "Research Assistant", project: "Smart Grid Systems" },
    { name: "Hemant Pande", role: "Undergraduate Student", project: "Autonomous Navigation" },
    { name: "Pragati Varu", role: "Undergraduate Student", project: "Water Quality IoT" },
    { name: "Mahi Parmar", role: "Undergraduate Student", project: "Drone Technology" },
    { name: "Aayush Pandya", role: "Undergraduate Student", project: "Solar Optimization" },
    { name: "Rudr Halvadiya", role: "Undergraduate Student", project: "Predictive Maintenance" },
  ];

  return (
    <section
      id="team"
      className="relative z-10 bg-white rounded-xl shadow-sm px-5 py-6 max-w-5xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center mb-10">
        Meet the Team
      </h2>

      {/* Faculty */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-center mb-6">
          Faculty Mentor
        </h3>

        <div className="flex justify-center">
          <FacultyCard member={faculty[0]} />
        </div>
      </div>

      {/* Students */}
      <div>
        <h3 className="text-lg font-semibold text-center mb-6">
          Student Researchers
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {students.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm px-4 py-4 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="font-medium text-gray-700">
                  {s.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <p className="text-sm font-semibold">{s.name}</p>
              <p className="text-xs text-gray-600">{s.role}</p>
              <p className="text-xs text-gray-500 mt-1">{s.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Faculty Card ---------- */

const FacultyCard = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`
        bg-white
        rounded-xl
        shadow-md
        px-6 py-6
        max-w-md w-full
        transition-all duration-300
        ${open ? "scale-[1.03] shadow-lg" : ""}
      `}
    >
      <div className="text-center">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {member.name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>

        <h4 className="font-semibold">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
        <p className="text-sm text-gray-500">{member.specialization}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm text-gray-700 space-y-2">
          <p><b>Department:</b> {member.department}</p>
          <p><b>Research:</b><br />{member.research}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
