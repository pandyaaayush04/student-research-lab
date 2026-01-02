import logo from "../assets/SRL Logo.png";
import BlurText from "./ui/BlurText";

const Hero = () => {
  return (
    <section className="py-28 px-6 mx-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT COLUMN */}
        <div className="lg:pr-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            <BlurText
              text="Transforming  Notion  into  innovation"
              delay={140}
              animateBy="words"
              direction="left"
              onAnimationComplete={() =>
                console.log("Hero heading animation completed")
              }
              className="text-[#115E59]"
            />
          </h1>

          <p className="max-w-xl leading-relaxed mb-12">
            We are a collaborative hub where undergraduate and graduate students
            tackle real-world problems through interdisciplinary research.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap gap-8 mb-20">
            <button
              className="px-6 py-3 text-base font-semibold rounded-lg transition-colors"
              style={{
                backgroundColor: "#5EEAD4",
                color: "#134E4A",
              }}
            >
              Explore our research →
            </button>

            <button
              className="px-6 py-3 text-base font-semibold rounded-lg transition-colors"
              style={{
                backgroundColor: "#5EEAD4",
                color: "#134E4A",
              }}
            >
              Join The Lab
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <Stat value="25+" label="Active Students" />
            <Stat value="10" label="Projects" />
            <Stat value="1" label="Mentors" />
            <Stat value="2+" label="Publications" />
          </div>
        </div>

        {/* RIGHT COLUMN — LOGO + LAB NAME */}
        <div className="flex items-center justify-center lg:pl-8">
          <div className="text-center">
            {/* Increased Logo Size */}
            <img
              src={logo}
              alt="Student Research Lab MMPSRPC KSV"
              className="w-44 h-44 mx-auto mb-8 object-contain"
            />

            {/* Increased Title Size */}
            <h3
              className="text-4xl font-semibold tracking-wide"
              style={{ color: "#115E59" }}
            >
              Student Research Lab
            </h3>

            {/* Horizontal Line */}
            <div
              className="mx-auto mt-4 h-1 w-28 rounded-full"
              style={{ backgroundColor: "#5EEAD4" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-sm mt-1">{label}</div>
  </div>
);

export default Hero;
