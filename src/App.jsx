import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, createContext, useContext } from "react";

// Scroll Direction Context
const ScrollDirectionContext = createContext("down");

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (current > previous) {
      setScrollDirection("down");
    } else if (current < previous) {
      setScrollDirection("up");
    }
  });

  return scrollDirection;
};

// --- Imports kept same as your original ---
import frdTree from "./assets/Fantasy Nature/FRD Tree.png";
import gyges from "./assets/Fantasy Nature/GYGES.jpg";
import mermaidsTear from "./assets/Fantasy Nature/Mermmaid's Tear.jpg";
import mysticWeaver from "./assets/Fantasy Nature/Mystic Weaver.png";
import ranoir from "./assets/Fantasy Nature/Ranoir.png";
import storyBeads from "./assets/Fantasy Nature/Story Beads.jpg";
import adula from "./assets/Grotesque/Adula.png";
import bewitcher from "./assets/Grotesque/Bewitcher.png";
import bloodhoundFangs from "./assets/Grotesque/Bloodhound Fangs.jpg";
import enchantedTear from "./assets/Grotesque/Enchanted Tear.png";
import hallowKnight from "./assets/Grotesque/Hallow Knight.png";
import tarantula from "./assets/Grotesque/Tarantula.jpg";
import signatureArc from "./assets/Signature/Signature Arc.png";
import signatureMaiden from "./assets/Signature/Signature Maiden.png";
import signatureMaze from "./assets/Signature/Signature Maze.png";
import signatureRoots from "./assets/Signature/Signature Roots.png";
import signatureSerene from "./assets/Signature/Signature Serene.png";
import signatureTeardrop from "./assets/Signature/Signature Teardrop.png";

import mahir from "/PP4.png";
import apu from "/Apu.jpg";
import Shawon from "/Shwon.jpg";
import Sif from "/Sif.jpg";
import mahir2 from "/dpks.jpg"

import mylogo from "/logo2.png";
const productCategories = [
  {
    name: "Fantasy Nature",
    description:
      "Inspired by the mystical beauty of nature, these pieces capture enchanting organic forms",
    products: [
      { name: "ERD TREE", image: frdTree },
      { name: "GYGES", image: gyges },
      { name: "MERMAID'S TEAR", image: mermaidsTear },
      { name: "MYSTIC WEAVER", image: mysticWeaver },
      { name: "RANOIR", image: ranoir },
      { name: "STORY BEADS", image: storyBeads },
    ],
  },
  {
    name: "Grotesque",
    description:
      "Bold, daring designs that make a statement. For those who embrace the extraordinary",
    products: [
      { name: "ADULA", image: adula },
      { name: "BEWITCHER", image: bewitcher },
      { name: "BLOODHOUND FANGS", image: bloodhoundFangs },
      { name: "ENCHANTED TEAR", image: enchantedTear },
      { name: "HALLOW KNIGHT", image: hallowKnight },
      { name: "TARANTULA", image: tarantula },
    ],
  },
  {
    name: "Signature",
    description:
      "Timeless elegance with our signature collection. Classic designs redefined",
    products: [
      { name: "SIGNATURE ARC", image: signatureArc },
      { name: "SIGNATURE MAIDEN", image: signatureMaiden },
      { name: "SIGNATURE MAZE", image: signatureMaze },
      { name: "SIGNATURE ROOTS", image: signatureRoots },
      { name: "SIGNATURE SERENE", image: signatureSerene },
      { name: "SIGNATURE TEARDROP", image: signatureTeardrop },
    ],
  },
];

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const scrollDirection = useContext(ScrollDirectionContext);

  // Scroll down: animate from bottom (y: 60), Scroll up: animate from top (y: -60)
  const yOffset = scrollDirection === "down" ? 60 : -60;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }) => {
  const scrollDirection = useContext(ScrollDirectionContext);
  const yOffset = scrollDirection === "down" ? 40 : -40;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const IntroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="gradient-orb w-[600px] h-[600px] bg-purple-900/40 top-[-100px] left-[-100px] absolute" />

    <div className="z-10 flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={mylogo}
          alt="Lumos"
          className="w-48 h-48 md:w-64 md:h-64 object-contain floating"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-display text-7xl md:text-9xl font-bold mb-4"
      >
        <span className="gradient-text">LUMOS</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-elegant text-2xl md:text-4xl text-purple-200 tracking-wide"
      >
        luxury can be affordable
      </motion.p>
    </div>
  </section>
);

const HeroSection = () => (
  <section className="min-h-screen py-16 md:py-32 px-6 flex items-center justify-center overflow-hidden relative">
    <div className="w-full max-w-7xl flex flex-col items-center relative gap-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-center"
      >
        100% Custom Design
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl font-light"
      >
        Fully In-House Designs
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg md:text-xl text-purple-300 text-center max-w-2xl italic"
      >
        Not your everyday jewelries in Bangladesh
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass-card p-8 mb-10 md:p-14 text-center purple-glow w-full max-w-3xl mt-8"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Same Ring for{" "}
          <span className="gradient-text-gold text-5xl md:text-6xl">10x</span>{" "}
          Less
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Get the same quality as mined diamonds but at 10 times cheaper than
          that.
        </p>
      </motion.div>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {/* Value Prop Items (kept same structure, improved padding) */}
        {[
          {
            icon: "💎",
            title: "Express Your Love",
            desc: "Wide range of collections designed specifically for your loved ones",
          },
          {
            icon: "✨",
            title: "Express Your Personality",
            desc: "Accessories define your personality like never before",
          },
          {
            icon: "🎨",
            title: "Truly Unique Designs",
            desc: "Tired of so-called unique designs? Try ours!",
          },
        ].map((item, idx) => (
          <StaggerItem key={idx}>
            <div className="glass-card-dark p-8 text-center h-full hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-heading text-xl font-semibold mb-4 gradient-text">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const CollectionsSection = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
    <div className="w-full max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-24 flex flex-col items-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
          Our <span className="gradient-text">Collections</span>
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl font-light leading-relaxed ">
          Choose what matches your personality from our bold & stunning themes
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-40">
        {" "}
        {/* Standardized vertical spacing between categories */}
        {productCategories.map((category) => (
          <div key={category.name} className="relative">
            <AnimatedSection className="text-center mb-16 relative z-10">
              <h3 className="font-luxury text-4xl md:text-5xl text-purple-200 mb-4 tracking-wider">
                {category.name}
              </h3>

              <p className="text-xl text-gray-400 italic font-elegant">
                {category.description}
              </p>
            </AnimatedSection>

            {/* Zigzag Grid with added bottom padding to prevent overlap from translation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-32 pb-32">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`${index % 2 !== 0 ? "md:translate-y-20" : ""} ${
                    index % 3 === 1 ? "lg:translate-y-16" : ""
                  }`}
                >
                  <div className="group relative cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <h4 className="font-mck text-2xl flex items-center justify-center font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {product.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyLabGrownSection = () => {
  const features = [
    {
      title: "Physical Appearance",
      icon: "👁️",
      description:
        "There is no way of differentiating between a lab diamond and a natural diamond by looking at them. Lab-grown diamonds do not change their appearance over time.",
    },
    {
      title: "Chemical Composition",
      icon: "⚛️",
      description:
        "The chemical composition of lab-grown diamonds is the same as that of naturally mined diamonds.",
    },
    {
      title: "Pricing",
      icon: "💰",
      description:
        "Lab-grown diamonds are 10 times if not more cheaper than mined diamonds. Get the luxury you deserve.",
    },
    {
      title: "Grading & Certificate",
      icon: "📜",
      description:
        "They are certified by all the leading gemological labs, such as IGI, SGL, and EGL.",
    },
    {
      title: "Durability & Hardness",
      icon: "💪",
      description:
        "Both lab diamonds and natural diamonds have the same hardness of 10 on the Mohs Scale.",
    },
    {
      title: "4 Cs",
      icon: "💎",
      description:
        "Lab diamonds are characterised based on the 4Cs just like natural diamonds. No two lab diamonds are the same.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Why <span className="gradient-text">Lab-Grown</span> Diamonds?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlike moissanite, lab-grown diamonds are{" "}
            <span className="text-purple-400 font-semibold">
              100% identical
            </span>{" "}
            to mined diamonds
          </p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-10 h-full group hover:purple-glow-sm transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 gradient-text text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const PromiseSection = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
    <div className="w-full max-w-6xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Our <span className="gradient-text">Promise</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          At Lumos, we're committed to make luxury affordable without
          compromising quality.
        </p>
      </AnimatedSection>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "✅",
            title: "100% Authentic",
            desc: "Certified by leading gemological labs",
          },
          {
            icon: "🎨",
            title: "Custom Designs",
            desc: "Tailored to your unique style",
          },
          {
            icon: "💵",
            title: "80% Buyback",
            desc: "We value your investment",
          },
          {
            icon: "📞",
            title: "24/7 Support",
            desc: "Always here to help you",
          },
        ].map((promise, index) => (
          <StaggerItem key={index}>
            <div className="gradient-border p-8 text-center h-full hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-2 text-white">
                {promise.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {promise.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="relative py-24 md:py-32 px-6 flex flex-col items-center justify-center">
    <div className="w-full max-w-5xl mx-auto">
      <AnimatedSection className="glass-card p-12 md:p-20 text-center purple-glow">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">
          Discover{" "}
          <span className="gradient-text">Lab-Grown Diamond Jewellery</span>
          <br />
          <span className="text-3xl md:text-4xl font-light">by Lumos</span>
        </h2>
        <div className="space-y-8 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
          <p>
            Welcome to{" "}
            <span className="text-purple-400 font-semibold">Lumos</span>, where
            brilliance meets science.
          </p>
          <p>
            Every piece tells a story of{" "}
            <span className="text-purple-300">
              innovation and conscious luxury
            </span>
            .
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const TeamSection = () => {
  const team = [
    {
      name: "Farhan Mahtab",
      role: "Founder & CEO",
      desc: "The visionary behind the foundation.",
      dp: Sif,
    },
    {
      name: "MD. Mahir Hossain Khan",
      role: "Co-Founder & CMO",
      desc: "Leading brand scaling and marketing.",
      dp: mahir2,
    },
    {
      name: "Jahid Hasan Shawon",
      role: "Co-Founder & COO",
      desc: "Operations and documentation expert.",
      dp: Shawon,
    },
    {
      name: "Munsur Hossain Apu",
      role: "Co-Founder & CFO",
      desc: "Incredible financial strategic abilities.",
      dp: apu,
    },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-lg">The visionaries behind Lumos</p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <StaggerItem key={index}>
              <div className="glass-card-dark p-8 text-center h-full group hover:purple-glow-sm transition-all duration-500">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-purple-500/30">
                  <img
                    src={member.dp}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const ComingSoonSection = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
    <div className="gradient-orb w-[800px] h-[400px] bg-purple-600 bottom-[-200px] left-1/2 -translate-x-1/2 absolute" />
    <div className="w-full max-w-4xl mx-auto text-center relative z-10">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-10">
          Where to Find Us?
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <span className="text-5xl md:text-8xl font-bold gradient-text text-glow font-heading tracking-tighter">
            COMING SOON!
          </span>
        </motion.div>
      </AnimatedSection>
      <div className="section-divider my-20" />
      <AnimatedSection delay={0.3} className="flex flex-col items-center">
        <img
          src="/logo2.png"
          alt="Lumos"
          className="w-20 h-20 object-contain mb-6 opacity-80"
        />
        <p className="text-gray-400 text-sm">
          © 2026 Lumos. All rights reserved.
          <br />
          <span className="text-purple-400">Brilliance. Redefined.</span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

function App() {
  const scrollDirection = useScrollDirection();

  return (
    <ScrollDirectionContext.Provider value={scrollDirection}>
      <div className="w-full bg-transparent text-white overflow-x-hidden">
        <IntroSection />
        <HeroSection />
        <CollectionsSection />
        <WhyLabGrownSection />
        <PromiseSection />
        <AboutSection />
        <TeamSection />
        <ComingSoonSection />
      </div>
    </ScrollDirectionContext.Provider>
  );
}

export default App;
