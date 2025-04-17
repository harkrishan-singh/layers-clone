import { motion } from "motion/react";

import QuantumLogo from "../assets/images/quantum.svg";
import AcmeCorpLogo from "../assets/images/acme-corp.svg";
import ApexLogo from "../assets/images/apex.svg";
import CelestialLogo from "../assets/images/celestial.svg";
import EchoValleyLogo from "../assets/images/echo-valley.svg";
import OutsideLogo from "../assets/images/outside.svg";
import PulseLogo from "../assets/images/pulse.svg";
import TwiceLogo from "../assets/images/twice.svg";

const logos = [
  { name: "Quantum Logo", link: QuantumLogo },
  { name: "Acme Corp Logo", link: AcmeCorpLogo },
  { name: "Apex Logo", link: ApexLogo },
  { name: "Celestial Logo", link: CelestialLogo },
  { name: "Echo Valley Logo", link: EchoValleyLogo },
  { name: "Outside Logo", link: OutsideLogo },
  { name: "Pulse Logo", link: PulseLogo },
  { name: "Twice Logo", link: TwiceLogo },
];

const LogoSlider = () => {
  return (
    <section className=" px-8 lg:px-12 py-24 flex flex-col gap-12 overflow-x-clip ">
      {/* Sub-Header */}
      <div className=" text-xl font-medium text-center text-white/50 ">
        Already chosen by these market leaders!
      </div>
      {/* Logo Slider */}
      <div
        className=" flex overflow-hidden "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Logos */}
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className=" flex flex-none "
        >
          {/* Logo Array for Animation */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className=" flex gap-24 pr-24 ">
              {logos.map((value) => (
                <img src={value.link} key={value.name} alt={value.name} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;
