const Navbar = () => {
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Research", id: "research" },
    { label: "Gallery", id: "gallery" },
    { label: "Researchers", id: "team" },
    { label: "Join Us", id: "join" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#0d8f84" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT — SRL Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <div className="w-12 h-1 bg-white rounded-lg flex items-center justify-center">
              <img
              src="/SRL Logo.png"
              alt="SRL"
              className="h-14 object-contain"
            />
            </div>
            <span className="text-lg font-semibold text-white">
              Student Research Lab
            </span>
          </div>

          {/* CENTER — Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                className="text-white/90 font-medium hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT — Institutional Logos */}
          <div className="hidden lg:flex items-center gap-6">
            <img
              src="/MMPSRPC Logo.png"
              alt="MMPSRPC"
              className="h-14 object-contain"
            />
            <img
              src="/svkm.png"
              alt="SVKM"
              className="h-14 object-contain"
            />
            <img
              src="/KSV Logo.png"
              alt="KSV"
              className="h-14 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
