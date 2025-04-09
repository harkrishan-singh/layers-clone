import Button from "../components/Button";
import LogoImage from "../assets/images/logo.svg";


const menuList = [
  { label: "Home", link: "#home" },
  { label: "Features", link: "#features" },
  { label: "Integrations", link: "#integrations" },
  { label: "FAQs", link: "#faqs" },
];

const Navbar = () => {
  return (
    <section className=" h-auto w-full px-8 lg:px-12 py-4 lg:py-6 text-white text-sm ">
      <div className=" h-auto w-full max-w-5xl mx-auto px-4 md:px-2 py-2 flex items-center justify-between border border-white/15 rounded-full ">
        {/* Logo */}
        <a href="#home">
          <img
            src={LogoImage}
            alt="Layers Logo"
            className=" h-8 md:h-10 w-auto cursor-pointer "
          />
        </a>
        {/* Menu */}
        <div className=" hidden lg:flex items-center justify-center gap-6 lg:gap-8 text-white ">
          {menuList.map((value, key) => (
            <a
              href={value.link}
              key={key}
              className=" hover:text-lime-400 hover:font-normal transition-all "
            >
              {value.label}
            </a>
          ))}
        </div>
        {/* Buttons */}
        <div className=" hidden md:flex gap-3 ">
          <Button variant={"secondary"} onClick={() => {}}>
            Log In
          </Button>
          <Button variant={"primary"} onClick={() => {}}>
            Sign Up
          </Button>
        </div>
        {/* Hamburger Menu */}
        <div className=" md:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" feather feather-menu cursor-pointer "
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
