import Tag from "../components/Tag";
import FeatureBox from "../components/FeatureBox";
import Avatar from "../components/Avatar";

import AshwinAvatar from "../assets/images/avatar-ashwin-santiago.jpg";
import LunaAvatar from "../assets/images/avatar-lula-meyers.jpg";
import FlorenceAvatar from "../assets/images/avatar-florence-shaw.jpg";
import OwenGarcia from "../assets/images/avatar-owen-garcia.jpg";

import IncredibleGif from "../assets/images/gif-incredible.mp4";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

/* Feature Component */
const Feature = ({ children }) => {
  return (
    <div className=" relative px-3 py-1.5 flex items-center justify-center gap-3 border border-white/10 rounded-2xl bg-neutral-900 hover:scale-105 transition duration-300 group ">
      <span className=" size-5 text-xl inline-flex items-center justify-center text-neutral-950 rounded-full bg-lime-400 group-hover:rotate-45 transition duration-300 ">
        &#10038;
      </span>
      <span className=" text-lg font-medium text-center ">{children}</span> 
    </div>
  );
};

/* Key Component */
const Key = ({ value, className }) => {
  return (
    <div
      className={` size-14 inline-flex items-center justify-center text-xl font-medium text-neutral-950 rounded-xl bg-neutral-300 group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-100 duration-500 ${className} `}
    >
      {value}
    </div>
  );
};

const Features = () => {
  return (
    <section className=" px-8 lg:px-12 py-28 flex flex-col justify-center items-center gap-10 ">
      {/* Tag */}
      <div className=" flex item-center justify-center ">
        <Tag value="Features" />
      </div>
      {/* Headline */}
      <div className=" text-5xl font-medium text-center ">
        <span>Where power meets</span>
        <span className=" block text-lime-400 ">simplicity</span>
      </div>
      {/* Feature Box Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 ">
        {/* Avatar Feature Box */}
        <FeatureBox
          featureTitle="Real-time Collaboration"
          featureDesc="Work together seamlessly with conflict-free team editing"
          className=" relative md:col-span-2 lg:col-span-1 group "
        >
          {/* Avatars */}
          <div className=" aspect-video flex items-center justify-center ">
            <Avatar
              imageUrl={AshwinAvatar}
              altText="Ashwin Profile Image"
              color="blue"
              className=" z-40 "
            />
            <Avatar
              imageUrl={LunaAvatar}
              altText="Luna Profile Image"
              color="indigo"
              className=" z-30 -ml-5  "
            />
            <Avatar
              imageUrl={FlorenceAvatar}
              altText="Florence Profile Image"
              color="amber"
              className=" z-20 -ml-5 "
            />
            {/* Hover Animation */}
            <div className=" relative z-10 -ml-5 size-24 rounded-full bg-neutral-700 ">
              <Avatar
                imageUrl={OwenGarcia}
                altText="Owen Profile Image"
                color="green"
                className=" absolute inset-0  h-full w-auto z-10 opacity-0 group-hover:opacity-100 transition duration-500 "
              />
              <div className=" absolute inset-0 flex items-center justify-center gap-1 group-hover:opacity-0 transition duration-500 ">
                <div className=" size-2 rounded-full bg-white "></div>
                <div className=" size-2 rounded-full bg-white "></div>
                <div className=" size-2 rounded-full bg-white "></div>
              </div>
            </div>
          </div>
        </FeatureBox>
        {/* Incredible Gif Feature Box */}
        <FeatureBox
          featureTitle="Interactive Prototyping"
          featureDesc="Engage your clients with prototypes that react to user actions"
          className=" relative md:col-span-2 lg:col-span-1 group "
        >
          <div className=" aspect-video flex flex-col items-center justify-center text-4xl font-bold text-center text-white/15 group-hover:text-white/30 transition duration-500 ">
            <span>We've achieved </span>
            <span className=" relative block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ">
              <span>incredible</span>
              <video
                src={IncredibleGif}
                autoPlay
                muted
                loop
                playsInline
                className=" absolute bottom-full rounded-2xl shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 "
              />
            </span>
            <span className=" block ">growth this year</span>
          </div>
        </FeatureBox>
        {/* Keys Feature Box */}
        <FeatureBox
          featureTitle="Keyboard Quick Actions"
          featureDesc="Powerful commands to help you create designs more quickly"
          className=" relative md:col-span-2 md:col-start-2 lg:col-span-1 group "
        >
          <div className=" aspect-video flex items-center justify-center gap-4 ">
            <Key value="shift" className=" w-28 " />
            <Key value="alt" className=" delay-100 " />
            <Key value="C" className=" delay-200 " />
          </div>
        </FeatureBox>
      </div>
      {/* Feature List */}
      <div className=" max-w-3xl flex flex-wrap items-center justify-center gap-3 ">
        {features.map((value, key) => (
          <Feature key={key}>{value}</Feature>
        ))}
      </div>
    </section>
  );
};

export default Features;
