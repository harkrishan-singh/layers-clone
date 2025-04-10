import logoImage from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <section className=" px-8 mg:14 lg:px-24 py-16 ">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Logo */}
        <div>
          <img src={logoImage} alt="Layers Logo" />
        </div>
        {/* Links */}
        <div className=" flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/50 ">
          <a className=" hover:scale-[101%] hover:text-lime-400 transition duration-300 " href="#Contact">Contact</a>
          <a className=" hover:scale-[101%] hover:text-lime-400 transition duration-300 " href="#PrivacyPolicy">Privacy Policy</a>
          <a className=" hover:scale-[101%] hover:text-lime-400 transition duration-300 " href="#TermsAndConditions">Terms & Conditions</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
