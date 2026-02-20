import { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";
import { organizationData } from "../data/organizationData";

const Counter = ({ to, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const node = ref.current;
    const controls = animate(0, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        if (node) {
          node.textContent = Math.round(value) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [to, suffix, duration, isInView]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

const About = () => {
  return (
    <section
      id="about"
      className="
        sm:pt-16
        pb-8 sm:pb-12
        px-4 sm:px-6 lg:px-8
        overflow-x-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* PRIMARY ABOUT CONTAINER */}
        <div
          className="
            rounded-2xl
            bg-card
            px-6 sm:px-10 lg:px-14
            py-6 sm:py-8
            mx-auto
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center text-center">
              <h2
                className="
                  text-3xl sm:text-4xl
                  font-bold
                  leading-tight
                  mb-5 sm:mb-6
                  text-text-primary
                "
              >
                About the Student Research Lab
              </h2>

              <p
                className="
                  text-base sm:text-lg
                  leading-relaxed
                  max-w-xl
                  text-text-muted
                "
              >
                The Student Research Lab fosters a collaborative environment
                where engaging engineering students explore ideas, conduct
                research, and develop innovative solutions under faculty
                mentorship, bridging theory with real-world engineering
                challenges.
              </p>

              {/* RESEARCH FOCUS */}
              <div className="mt-8 sm:mt-10 max-w-xl w-full">
                <div
                  className="
                    rounded-2xl
                    bg-background
                    px-6 sm:px-8
                    py-5 sm:py-6
                    text-center
                  "
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-text-primary">
                    Research Focus
                  </h3>

                  <div className="mx-auto h-1 w-16 rounded-full mb-4 bg-primary" />

                  <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-text-muted">
                    <li>
                      Interdisciplinary research addressing emerging
                      technologies and real-world societal challenges.
                    </li>
                    <li>
                      Applied and industry-relevant solution-oriented research.
                    </li>
                    <li>
                      Skill-based learning through hands-on experimentation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT — BALANCED BENTO GRID */}
            <div className="flex justify-center lg:-mt-4 w-full">
              <div
                className="
                  grid
                  grid-cols-1
                  gap-5 sm:gap-6

                  sm:grid-cols-2
                  sm:auto-rows-fr

                  lg:grid-cols-3
                  lg:grid-rows-3
                  lg:auto-rows-[130px]

                  w-full
                "
              >
                {/* Active Members */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-5 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-sm text-text-muted">Active Members</p>
                  <p className="text-4xl font-bold mt-1 text-text-primary">
                    <Counter to={30} suffix="+" />
                  </p>
                </div>

                {/* Research Domains */}
                <div
                  className="
                    sm:col-span-2 lg:col-span-2
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-5 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-sm text-text-muted">Research Domains</p>
                  <p className="text-4xl font-bold mt-1 text-text-primary">
                    <Counter to={8} suffix="+" />
                  </p>
                </div>

                {/* Applied Research */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-5 sm:p-8 lg:p-9
                    flex items-center justify-center
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-base font-bold leading-snug text-text-primary">
                    Applied
                    <br />
                    Research
                  </p>
                </div>

                {/* CENTER LOGO — NO SHADOW */}
                <div className="flex items-center justify-center overflow-hidden">
                  <div
                    className="
                      hidden sm:flex
                      items-center justify-center
                      h-28 w-28
                      sm:h-32 sm:w-32
                      lg:h-28 lg:w-28
                      rounded-full
                      bg-card
                      ring-8 ring-border/40
                    "
                  >
                    <img
                      src="/SRL Logo.svg"
                      alt="SRL Logo"
                      className="
                        sm:h-32 sm:w-32
                        lg:h-32 lg:w-32
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* Guided Mentorship */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-6 sm:p-8 lg:p-9
                    flex items-center justify-center
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-base font-bold leading-snug text-text-primary">
                    Guided
                    <br />
                    Mentorship
                  </p>
                </div>

                {/* Workshops */}
                <div
                  className="
                    sm:col-span-2 lg:col-span-2
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-5 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-sm text-text-muted font-semibold">
                    Workshops
                  </p>
                  <p className="text-xl font-bold mt-1 text-text-primary">
                    Hands-on Learning
                  </p>
                </div>

                {/* Publications */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-5 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-primary/5
                  "
                >
                  <p className="text-sm text-text-muted">Publications</p>
                  <p className="text-4xl font-bold mt-1 text-text-primary">
                    <Counter to={2} suffix="+" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HONOURABLE FOUNDERS SECTION */}
      <div className="max-w-7xl mx-auto mt-20 px-6 sm:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Honoring Our Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {organizationData.svkm.founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-72 mx-auto bg-gray-200 p-3 shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-sm">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {founder.name}
              </h3>

              <div className="flex gap-2 text-primary/60">
                <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9 14.9381 9.68715 14.1802 10.4566 13.7915C10.8732 13.5811 11.017 13.0423 10.7496 12.656C10.4651 12.2452 9.8736 12.1895 9.53982 12.5645C8.01633 14.276 7 16.6433 7 19.5C7 20.3284 7.67157 21 8.5 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.983C15.983 14.9381 16.6702 14.1802 17.4396 13.7915C17.8562 13.5811 18 13.0423 17.7326 12.656C17.4481 12.2452 16.8566 12.1895 16.5228 12.5645C14.9993 14.276 13.983 16.6433 13.983 19.5C13.983 20.3284 14.6546 21 15.483 21H21Z" />
                </svg>
                <p className="text-text-muted italic font-medium max-w-xs">
                  {founder.quote}
                </p>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9 14.9381 9.68715 14.1802 10.4566 13.7915C10.8732 13.5811 11.017 13.0423 10.7496 12.656C10.4651 12.2452 9.8736 12.1895 9.53982 12.5645C8.01633 14.276 7 16.6433 7 19.5C7 20.3284 7.67157 21 8.5 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.983C15.983 14.9381 16.6702 14.1802 17.4396 13.7915C17.8562 13.5811 18 13.0423 17.7326 12.656C17.4481 12.2452 16.8566 12.1895 16.5228 12.5645C14.9993 14.276 13.983 16.6433 13.983 19.5C13.983 20.3284 14.6546 21 15.483 21H21Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
