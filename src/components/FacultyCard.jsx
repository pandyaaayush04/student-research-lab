import { useState } from "react";

const FacultyCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white
        rounded-xl
        shadow-md
        px-6 py-6
        w-full max-w-md
        transition-all duration-300
        ${hovered ? "scale-[1.03] shadow-lg" : ""}
      `}
    >
      {/* Profile */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4" />

        <h3 className="text-lg font-semibold">
          Dr. ABC XYZ
        </h3>

        <p className="text-sm text-gray-600">
          Associate Professor
        </p>
      </div>

      {/* Expandable Info */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${hovered ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="text-sm text-gray-700 space-y-2 pt-2">
          <p>
            <span className="font-medium">Department:</span> Computer Engineering
          </p>
          <p>
            <span className="font-medium">Semester:</span> 6th–8th
          </p>
          <p>
            <span className="font-medium">Current Research:</span><br />
            Quantum-safe cryptography, applied machine learning in financial systems,
            and student-centric research frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
