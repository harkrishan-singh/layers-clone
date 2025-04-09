import Tag from "../components/Tag";
import FeatureBox from "../components/FeatureBox";
import Avatar from "../components/Avatar";

import AshwinAvatar from "../assets/images/avatar-ashwin-santiago.jpg";
import LunaAvatar from "../assets/images/avatar-lula-meyers.jpg";
import FlorenceAvatar from "../assets/images/avatar-florence-shaw.jpg";

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
    <div className=" px-3 py-1.5 flex items-center justify-center gap-3 border border-white/10 rounded-2xl bg-neutral-900 ">
      <span className=" size-5 text-xl inline-flex items-center justify-center text-neutral-950 rounded-full bg-lime-400 ">
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
      className={` size-14 inline-flex items-center justify-center text-xl font-medium text-neutral-950 rounded-xl bg-neutral-300 ${className} `}
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
        <FeatureBox
          featureTitle="Real-time Collaboration"
          featureDesc="Work together seamlessly with conflict-free team editing"
          className=" md:col-span-2 lg:col-span-1 "
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
              altText="Ashwin Profile Image"
              color="indigo"
              className=" z-30 -ml-5  "
            />
            <Avatar
              imageUrl={FlorenceAvatar}
              altText="Ashwin Profile Image"
              color="amber"
              className=" z-20 -ml-5 "
            />
            <div className=" z-10 -ml-5 size-24 flex items-center justify-center gap-1 rounded-full bg-neutral-700 ">
              <div className=" size-2 rounded-full bg-white "></div>
              <div className=" size-2 rounded-full bg-white "></div>
              <div className=" size-2 rounded-full bg-white "></div>
            </div>
          </div>
        </FeatureBox>
        <FeatureBox
          featureTitle="Interactive Prototyping"
          featureDesc="Engage your clients with prototypes that react to user actions"
          className=" md:col-span-2 lg:col-span-1 "
        >
          <div className=" aspect-video flex flex-col items-center justify-center text-4xl font-bold text-center ">
            <span className=" text-white/15 ">We've achieved </span>
            <span className=" block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ">
              incredible
            </span>
            <span className=" block text-white/15 ">growth this year</span>
          </div>
        </FeatureBox>
        <FeatureBox
          featureTitle="Keyboard Quick Actions"
          featureDesc="Powerful commands to help you create designs more quickly"
          className=" md:col-span-2 md:col-start-2 lg:col-span-1 "
        >
          <div className=" aspect-video flex items-center justify-center gap-4 ">
            <Key value="shift" className=" w-28 " />
            <Key value="alt" />
            <Key value="C" />
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
