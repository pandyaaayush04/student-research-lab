import { useEffect, useState } from "react";

const NAV_HEIGHT = 72;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Research", id: "research" },
    { label: "Gallery", id: "gallery" },
    { label: "Researchers", id: "team" },
    { label: "Join Us", id: "join" },
  ];

  /* ---- hide / show navbar on scroll ---- */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      NAV_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-[#DDE8E3]
        border-b border-[#C8D6D0]/60
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px]">
        <div className="flex items-center justify-between gap-4 h-full">

          {/* LEFT — SRL Identity */}
          <div
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => handleScroll("home")}
          >
            <img
              src="/SRL Logo.png"
              alt="SRL"
              className="h-10 sm:h-11 object-contain"
            />
            <span className="hidden sm:block text-base sm:text-lg font-semibold text-[#1F1F1F]">
              Student Research Lab
            </span>
          </div>

          {/* CENTER — DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                className="
                  relative
                  font-medium
                  text-[#1F1F1F]/90
                  transition-colors
                  hover:text-black
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-full
                  after:bg-[#5EEAD4]
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform
                  after:duration-300
                  hover:after:scale-x-100
                "
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://appointment.mmpsrpc.in/student"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-full
                bg-[#134E4A]
                text-[#DDE8E3]
                font-medium
                hover:bg-[#3A3A35]
                transition
              "
            >
              Appointment
            </a>
          </div>

          {/* RIGHT — INSTITUTIONAL LOGOS (UNCHANGED) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <img
              src="/MMPSRPC Logo.png"
              alt="MMPSRPC"
              className="h-10 sm:h-11 object-contain"
            />
            <img
              src="/svkm.png"
              alt="SVKM"
              className="h-10 sm:h-11 object-contain"
            />
            <img
              src="/KSV Logo.png"
              alt="KSV"
              className="h-10 sm:h-11 object-contain"
            />
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-[#1F1F1F]"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          bg-[#DDE8E3]
          border-t border-[#C8D6D0]
          overflow-hidden
          transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.id)}
              className="text-left font-medium text-[#1F1F1F]"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://appointment.mmpsrpc.in/student"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              inline-flex justify-center
              px-5 py-3
              rounded-full
              bg-[#1F1F1F]
              text-[#DDE8E3]
              font-medium
            "
          >
            Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
