import Tag from "../components/Tag";

import FigmaIcon from "../assets/images/figma-logo.svg";
import GitHubIcon from "../assets/images/github-logo.svg";
import NotionIcon from "../assets/images/notion-logo.svg";
import FramerIcon from "../assets/images/framer-logo.svg";
import SlackIcon from "../assets/images/slack-logo.svg";
import RelumeIcon from "../assets/images/relume-logo.svg";
import IntegrationsList from "../components/IntegrationsList";

const integrations = [
  {
    name: "Figma",
    icon: FigmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
  {
    name: "Notion",
    icon: NotionIcon,
    description: "Notion is an all-in-one worksodce for notes and docs.",
  },
  {
    name: "Framer",
    icon: FramerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "Slack",
    icon: SlackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: RelumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
];

const Integrations = () => {
  return (
    <section className=" px-8 lg:px-12 py-24 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-14 ">
      <div className=" flex flex-col items-center lg:items-start justify-center gap-10 ">
        {/* Tag */}
        <div className=" flex items-center justify-center ">
          <Tag value="Integrations" />
        </div>
        <div className=" flex flex-col items-center lg:items-start justify-center gap-4 ">
          {/* Heading */}
          <div className=" text-5xl font-medium text-center lg:text-start ">
            <span>Play well with</span>{" "}
            <span className=" text-lime-400 ">others</span>
          </div>
          {/* Paragraph */}
          <p className=" text-xl font-medium text-center lg:text-start text-white/50 ">
            Layers seamlessly connects with your favorite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>
      </div>
       {/* Integrations Listing */}
      <div
        className=" h-[400px] lg:h-[780px] overflow-hidden "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
      {/* Integration Listing Grid */}
        <div className=" flex md:grid md:grid-cols-2 gap-4 ">
          <IntegrationsList integrations={integrations} />
          <IntegrationsList integrations={integrations.slice().reverse()} className=" hidden md:flex " />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
