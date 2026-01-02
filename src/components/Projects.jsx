console.log("REAL ResearchAreas.jsx LOADED");

const Projects = () => {
  const projects = [
    {
      title: "Smart Grid Optimization",
      description:
        "Developing algorithms for efficient energy distribution in smart grid systems using machine learning techniques.",
      status: "Active",
      team: 6,
    },
    {
      title: "Autonomous Drone Navigation",
      description:
        "Building computer vision systems for obstacle detection and path planning in UAVs.",
      status: "Active",
      team: 4,
    },
    {
      title: "Water Quality Monitoring IoT",
      description:
        "Creating a network of sensors for real-time water quality assessment in urban areas.",
      status: "Active",
      team: 5,
    },
    {
      title: "Biodegradable Composites",
      description:
        "Researching sustainable alternatives to plastic using natural fiber reinforced polymers.",
      status: "Completed",
      team: 3,
    },
    {
      title: "Industrial Predictive Maintenance",
      description:
        "Applying deep learning for early detection of machinery failures in manufacturing.",
      status: "Active",
      team: 4,
    },
    {
      title: "Solar Panel Efficiency Study",
      description:
        "Analyzing and optimizing photovoltaic cell performance under varying environmental conditions.",
      status: "Completed",
      team: 5,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl mx-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-3 mb-4">
            Current Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the innovative projects our student researchers are working
            on across various engineering disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === "Active"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.team} members
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-primary text-sm font-medium cursor-pointer hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
