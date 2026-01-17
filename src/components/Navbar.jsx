import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Research", path: "/research" },
    { label: "Gallery", path: "/gallery" },
    { label: "Researchers", path: "/team" },
  ];

  /* ---- hide / show navbar on scroll ---- */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) setHidden(true);
      else setHidden(false);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-primary/90
        shadow-md
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px]">
        <div className="flex items-center h-full relative">

          {/* LEFT — SRL Identity */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/SRL Logo.png"
              alt="SRL"
              className="h-10 sm:h-11 object-contain"
            />
            <span className="hidden sm:block text-base sm:text-lg font-semibold text-white">
              Student Research Lab
            </span>
          </Link>

          {/* CENTER — DESKTOP MENU + APPOINTMENT */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="
                  relative
                  font-medium
                  text-white/90
                  transition-colors
                  hover:text-white
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-full
                  after:bg-white/70
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform
                  after:duration-300
                  hover:after:scale-x-100
                "
              >
                {item.label}
              </Link>
            ))}

            {/* APPOINTMENT BUTTON */}
            <a
              href="https://appointment.mmpsrpc.in/student"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-full
                bg-white
                text-primary
                font-medium
                hover:opacity-90
                transition
              "
            >
              Appointment
            </a>
          </div>

          {/* RIGHT — INSTITUTIONAL LOGOS */}
          <div className="ml-auto hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
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
            className="lg:hidden ml-auto text-white"
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
          bg-primary/90
          border-t border-white/10
          overflow-hidden
          transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-left font-medium text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE APPOINTMENT */}
          <a
            href="https://appointment.mmpsrpc.in/student"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              inline-flex justify-center
              px-5 py-3
              rounded-full
              bg-white
              text-primary
              font-medium
              hover:opacity-90
              transition
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
