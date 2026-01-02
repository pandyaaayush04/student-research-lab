const JoinLab = () => {
  return (
    <section
      id="join"
      className="py-24 px-6 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl mx-4">
      {" "}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-6">
          Ready to Start Your Research Journey?
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          We welcome passionate engineering students who are eager to learn,
          collaborate, and contribute to meaningful research. Join our community
          and take the first step towards becoming a researcher.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-primary-foreground/10 p-6 rounded-lg">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold text-primary-foreground mb-2">
              Apply Online
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Submit your application with academic details and research
              interests
            </p>
          </div>
          <div className="bg-primary-foreground/10 p-6 rounded-lg">
            <div className="text-3xl mb-3">🎤</div>
            <h3 className="font-semibold text-primary-foreground mb-2">
              Interview
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Meet with faculty mentors to discuss your goals and fit
            </p>
          </div>
          <div className="bg-primary-foreground/10 p-6 rounded-lg">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-primary-foreground mb-2">
              Get Started
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Join a project team and begin your research experience
            </p>
          </div>
        </div>

        <button className="px-10 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200">
          Apply Now
        </button>

        <p className="mt-6 text-primary-foreground/70 text-sm">
          Applications for Spring 2025 are now open
        </p>
      </div>
    </section>
  );
};

export default JoinLab;
