import { useState } from "react";
import teamData from "../data/teamMembers.json";

/* ---- helper to detect touch devices ---- */
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Team = () => {
  const { faculty, students } = teamData;
  const lead = faculty[0];

  return (
    <section
      id="team"
      className="
        pt-16 sm:pt-20
        pb-20 sm:pb-28
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-2xl px-6 sm:px-12 lg:px-16 py-10 sm:py-14">

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-text-primary">
            Our Researchers
          </h2>

          {/* ================= FACULTY SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

            {/* FACULTY DETAILS */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                {lead.name}
              </h3>
              <p className="text-lg text-text-muted mt-1">
                {lead.role}
              </p>

              <div className="mt-6 space-y-3 text-text-muted">
                <p>
                  <b>Department:</b> {lead.department}
                </p>
                <p>
                  <b>Research Interests:</b> {lead.research}
                </p>
              </div>

              {/* QUOTE / THOUGHT */}
              <blockquote className="mt-8 pl-4 border-l-4 border-primary/30 italic text-text-muted">
                “Research is not about answers alone, but about cultivating the
                courage to ask better questions.”
              </blockquote>
            </div>

            {/* FACULTY IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="
                w-48 h-48 sm:w-56 sm:h-56
                rounded-full overflow-hidden
                bg-border
              ">
                <img
                  src={lead.image}
                  alt={lead.name}
                  onError={(e) => (e.target.src = "/team/default-avatar.png")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= STUDENTS SECTION ================= */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-10 text-text-primary">
              Student Researchers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {students.map((student, i) => (
                <StudentCard key={i} member={student} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================= STUDENT CARD ================= */

const StudentCard = ({ member }) => {
  const [open, setOpen] = useState(false);
  const touch = isTouchDevice();

  return (
    <div
      onMouseEnter={!touch ? () => setOpen(true) : undefined}
      onMouseLeave={!touch ? () => setOpen(false) : undefined}
      onClick={touch ? () => setOpen((v) => !v) : undefined}
      className="
        bg-card rounded-2xl
        p-6
        transition-all duration-300
        hover:scale-[1.03]
        cursor-pointer
      "
    >
      <div className="flex items-center gap-4">
        {/* IMAGE */}
        <div className="w-16 h-16 rounded-full overflow-hidden bg-border shrink-0">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => (e.target.src = "/team/default-avatar.png")}
            className="w-full h-full object-cover"
          />
        </div>

        {/* BASIC INFO */}
        <div>
          <h4 className="font-semibold text-text-primary">
            {member.name}
          </h4>
          <p className="text-sm text-text-muted">
            {member.role}
          </p>
        </div>
      </div>

      {/* HOVER DETAILS */}
      <div
        className={`
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-sm text-text-muted">
          {member.branch} · {member.semester} Semester
        </p>
        <p className="text-sm text-text-muted">
          <b>Research:</b> {member.research}
        </p>
      </div>
    </div>
  );
};

export default Team;
