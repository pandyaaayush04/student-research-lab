const About = () => {
  return (
    <section id="about" className="py-28 px-6 mx-4">
      <div className="max-w-7xl mx-auto">

        {/* PRIMARY ABOUT CARD */}
        <div
          className="rounded-2xl p-16"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:pr-8">
              <h2 className="text-4xl font-bold leading-tight mb-8">
                About the Student Research Lab
              </h2>

              <p className="text-lg leading-relaxed mb-10 max-w-xl">
                The Student Research Lab is a collaborative academic environment
                created to encourage engineering students to explore ideas,
                undertake research, and develop innovative solutions under
                guided faculty mentorship.
              </p>

              <div className="space-y-8 max-w-xl">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Our Vision
                  </h3>
                  <p className="leading-relaxed">
                    We aim to cultivate a strong research mindset by encouraging
                    curiosity, critical thinking, and interdisciplinary
                    collaboration. The lab bridges theoretical learning with
                    real-world engineering challenges.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    What We Do
                  </h3>
                  <p className="leading-relaxed">
                    Through structured research programs, mentoring sessions,
                    workshops, and project-based learning, students gain
                    hands-on experience while contributing to meaningful
                    academic research.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT — INNER CARD */}
            <div className="lg:pl-8">
              <div
                className="rounded-xl p-10"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Research Focus
                </h3>

                {/* subtle divider */}
                <div
                  className="h-1 w-16 rounded-full mb-6"
                  style={{ backgroundColor: "#5EEAD4" }}
                />

                <ul className="space-y-4 leading-relaxed">
                  <li>
                    Interdisciplinary research addressing emerging technologies
                    and real-world societal challenges.
                  </li>
                  <li>
                    Emphasis on applied research and industry-relevant,
                    solution-oriented problem solving.
                  </li>
                  <li>
                    Skill-oriented learning through hands-on projects, guided
                    experimentation, and collaborative exploration.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
