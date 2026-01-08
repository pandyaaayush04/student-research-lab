const About = () => {
  return (
    <section
      id="about"
      className="
        pt-14 sm:pt-16
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
            bg-white
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
                "
              >
                About the Student Research Lab
              </h2>

              <p
                className="
                  text-base sm:text-lg
                  leading-relaxed
                  max-w-xl
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
                    bg-neutral-50/60
                    px-6 sm:px-8
                    py-5 sm:py-6
                    text-center
                  "
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    Research Focus
                  </h3>

                  <div className="mx-auto h-1 w-16 rounded-full mb-4 bg-[#5EEAD4]" />

                  <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
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
                    p-7 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-sm text-neutral-500">Active Members</p>
                  <p className="text-4xl font-bold mt-1">30+</p>
                </div>

                {/* Research Domains */}
                <div
                  className="
                    sm:col-span-2 lg:col-span-2
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-7 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-sm text-neutral-500">Research Domains</p>
                  <p className="text-4xl font-bold mt-1">8+</p>
                </div>

                {/* Applied Research */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-7 sm:p-8 lg:p-9
                    flex items-center justify-center
                    text-center
                    transition-colors duration-300
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-base font-bold leading-snug">
                    Applied
                    <br />
                    Research
                  </p>
                </div>

                {/* CENTER LOGO — NO SHADOW */}
                <div className="flex items-center justify-center overflow-hidden">
                  <div
                    className="
                      h-28 w-28
                      sm:h-32 sm:w-32
                      lg:h-36 lg:w-36
                      rounded-full
                      bg-white
                      flex items-center justify-center
                      ring-8 ring-neutral-200/40
                    "
                  >
                    <img
                      src="/SRL Logo.png"
                      alt="SRL Logo"
                      className="
                        h-18 w-18
                        sm:h-20 sm:w-20
                        lg:h-22 lg:w-22
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
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-base font-bold leading-snug">
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
                    p-7 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-sm text-neutral-500 font-semibold">
                    Workshops
                  </p>
                  <p className="text-xl font-bold mt-1">Hands-on Learning</p>
                </div>

                {/* Publications */}
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-neutral-100 to-neutral-50
                    p-7 sm:p-8 lg:p-9
                    text-center
                    transition-colors duration-300
                    hover:bg-[#ECFDF5]
                  "
                >
                  <p className="text-sm text-neutral-500">Publications</p>
                  <p className="text-4xl font-bold mt-1">2+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
