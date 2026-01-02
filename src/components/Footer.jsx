const Footer = () => {
  return (
    <footer className="relative mt-24">

      {/* Compact footer with strong curve */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute -top-[79px] left-0 w-full h-[80px]"
      >
        <path
          d="
            M0,68
            Q720,-10 1440,68
            L1440,80
            L0,80
            Z
          "
          fill="#1B5E20"
        />
      </svg>

      {/* Footer Body */}
      <div className="bg-[#1B5E20] text-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

            {/* Lab Info */}
            <div>
              <h3 className="text-base font-semibold mb-2">
                Student Research Lab
              </h3>
              <p className="text-green-100 leading-relaxed text-sm">
                An academic research environment fostering engineering
                innovation and collaboration.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>

              <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-green-100 text-sm">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#research" className="hover:underline">Research</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#gallery" className="hover:underline">Gallery</a>
                <a href="#team" className="hover:underline">Team</a>
                <a href="#join" className="hover:underline">Join Us</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </div>
            </div>

            {/* Institute Info */}
            <div>
              <h4 className="font-semibold mb-2 text-sm">Institute</h4>
              <p className="text-green-100 leading-relaxed text-sm">
                LDRP Institute of Technology & Research<br />
                Kadi Sarva Vishwavidyalaya (KSV)<br />
                Gandhinagar, Gujarat
              </p>
            </div>

          </div>

          <div className="border-t border-green-300/30 my-5"></div>

          <div className="text-center text-green-200 text-xs">
            © {new Date().getFullYear()} Student Research Lab
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
