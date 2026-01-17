import { useEffect, useState } from "react";
import { researchWorks } from "../data/researchData";

const ResearchAreas = () => {
  const [activeResearch, setActiveResearch] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const openModal = (work) => {
    setActiveResearch(work);
    setIsOpening(true);
    setTimeout(() => setIsOpening(false), 20);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveResearch(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && activeResearch) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeResearch]);

  return (
    <section
      id="research"
      className="
        pt-12 sm:pt-16
        pb-20 sm:pb-28
        px-4 sm:px-6 lg:px-8
        overflow-x-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-card px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center text-text-primary">
            Research Works
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {researchWorks.map((work) => {
              const isOngoing = work.status === "Ongoing";

              return (
                <div
                  key={work.title}
                  onClick={() => openModal(work)}
                  className="
                    relative cursor-pointer
                    rounded-2xl
                    p-6 sm:p-8
                    bg-background
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  {/* STATUS PILL WITH LIVE DOT */}
                  <div className="absolute top-4 left-4">
                    {isOngoing ? (
                      <span
                        className="
                          inline-flex items-center gap-2
                          px-2 py-0.4
                          rounded-full
                          text-[11px] font-medium
                          bg-primary/20
                          text-primary
                        "
                      >
                        {/* LIVE DOT */}
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        Ongoing
                      </span>
                    ) : (
                      <span
                        className="
                          inline-flex items-center gap-2
                          px-2 py-0.4
                          rounded-full
                          text-[11px] font-medium
                          bg-border
                          text-text-muted
                        "
                      >
                        {/* STATIC DOT */}
                        <span className="inline-flex h-2 w-2 rounded-full bg-text-muted/60"></span>
                        Completed
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-text-primary">
                    {work.title}
                  </h3>

                  <p className="text-sm text-text-muted">
                    {work.short}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeResearch && (
        <div
          onClick={closeModal}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            px-4 sm:px-6
            bg-black/50 backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
              relative
              w-full max-w-3xl
              bg-card
              rounded-3xl
              px-6 sm:px-10
              py-8 sm:py-10
              transform transition-all duration-300 ease-out
              ${
                isClosing
                  ? "opacity-0 scale-95"
                  : isOpening
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }
            `}
          >
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wide text-text-muted">
                {activeResearch.status}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-text-primary">
                {activeResearch.title}
              </h3>
            </div>

            <p className="text-text-muted leading-relaxed mb-8">
              {activeResearch.description}
            </p>

            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-text-primary">
              Research Team
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">
              {activeResearch.members.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl p-5 bg-background"
                >
                  <p className="font-semibold text-text-primary">
                    {member.name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {member.branch} · {member.semester} Semester
                  </p>

                  <div className="mt-3 flex gap-4 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:underline"
                    >
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchAreas;
