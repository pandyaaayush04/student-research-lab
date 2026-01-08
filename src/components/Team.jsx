import { useState } from "react";

/* ---- helper to detect touch devices ---- */
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Team = () => {
  const faculty = [
    {
      name: "Dr. Himani Trivedi",
      role: "Head of MMPSRC & MMPSRPC Cell, LDRP-ITR, KSV",
      department: "Computer Engineering",
      specialization: "PhD",
      research:
        "Student research frameworks, applied AI systems, institutional research development",
      image: "/team/faculty/Maam Photo.png",
    },
  ];

  const students = [
    {
      name: "Kandarp Gajjar",
      role: "Research Assistant",
      branch: "Computer Engineering",
      semester: "8th",
      research: "Smart Grid Systems",
      image: "/team/students/Kandarpbhai.jpg",
    },
    {
      name: "Hemant Pande",
      role: "Undergraduate Student",
      branch: "Computer Engineering",
      semester: "6th",
      research: "Autonomous Navigation",
      image: "/team/students/Hemant Pande.jpg",
    },
    {
      name: "Pragati Varu",
      role: "Undergraduate Student",
      branch: "Computer Engineering",
      semester: "4th",
      research: "Water Quality IoT",
      image: "/team/students/Pragati Varu.jpeg",
    },
    {
      name: "Mahi Parmar",
      role: "Undergraduate Student",
      branch: "Computer Engineering",
      semester: "4th",
      research: "Drone Technology",
      image: "/team/students/Mahi Parmar.jpg",
    },
    {
      name: "Aayush Pandya",
      role: "Undergraduate Student",
      branch: "Computer Engineering",
      semester: "4th",
      research: "Solar Optimization",
      image: "/team/students/Aayush Pandya.jpeg",
    },
    {
      name: "Rudr Halvadiya",
      role: "Undergraduate Student",
      branch: "Computer Engineering",
      semester: "4th",
      research: "Predictive Maintenance",
      image: "/team/students/Rudr.png",
    },
  ];

  return (
    <section
      id="team"
      className="
        pt-14 sm:pt-18
        pb-14 sm:pb-18
        px-4 sm:px-6 lg:px-8
        overflow-x-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl px-6 sm:px-12 lg:px-16 py-8 sm:py-10">

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-20">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* FACULTY */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 flex justify-center">
              <FacultyCard member={faculty[0]} />
            </div>

            {/* STUDENTS */}
            <div className="lg:col-span-8 bg-neutral-50 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full max-w-4xl justify-items-center">
                {students.map((student, i) => (
                  <StudentCard key={i} member={student} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- FACULTY CARD ---------- */

const FacultyCard = ({ member }) => {
  const [open, setOpen] = useState(false);
  const touch = isTouchDevice();

  return (
    <div
      onMouseEnter={!touch ? () => setOpen(true) : undefined}
      onMouseLeave={!touch ? () => setOpen(false) : undefined}
      onClick={touch ? () => setOpen((v) => !v) : undefined}
      className="
        bg-white rounded-2xl
        px-8 py-6
        w-full max-w-sm
        transition-all duration-300
        hover:scale-[1.03]
        cursor-pointer
      "
    >
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-neutral-200">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => (e.target.src = "/team/default-avatar.png")}
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="font-semibold">{member.name}</h4>
        <p className="text-sm text-neutral-600">{member.role}</p>
        <p className="text-sm text-neutral-500">{member.specialization}</p>
      </div>

      <div
        className={`
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-sm text-neutral-700">
          <b>Department:</b> {member.department}
        </p>
        <p className="text-sm text-neutral-700">
          <b>Research:</b> {member.research}
        </p>
      </div>
    </div>
  );
};

/* ---------- STUDENT CARD ---------- */

const StudentCard = ({ member }) => {
  const [open, setOpen] = useState(false);
  const touch = isTouchDevice();

  return (
    <div
      onMouseEnter={!touch ? () => setOpen(true) : undefined}
      onMouseLeave={!touch ? () => setOpen(false) : undefined}
      onClick={touch ? () => setOpen((v) => !v) : undefined}
      className="
        bg-white rounded-2xl
        px-6 py-5
        w-full max-w-sm
        transition-all duration-300
        hover:scale-[1.03]
        cursor-pointer
      "
    >
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-neutral-200">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => (e.target.src = "/team/default-avatar.png")}
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-sm font-semibold">{member.name}</h4>
        <p className="text-xs text-neutral-600">{member.role}</p>
      </div>

      <div
        className={`
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-36 opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-xs text-neutral-700 text-center">
          {member.branch} · {member.semester} Semester
        </p>
        <p className="text-xs text-neutral-700 text-center">
          <b>Research:</b> {member.research}
        </p>
      </div>
    </div>
  );
};

export default Team;
