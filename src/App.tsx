import { FolderGit, Home, Phone, User, Sun, Moon } from "lucide-react";
import { useState } from "react";
import LightRays from "./LightRays/LightRays";
import Dock from "./Dock/Dock";
import BlurText from "./BlurText/BlurText";
import { TiltCard } from "./components/gsap/tilt-card";
import Spider from "./components/gsap/spider";

export default function App() {
  const [showLightRays, setShowLightRays] = useState(true);

  const items = [
    { icon: <Home size={18} color="white"/>, label: 'Home', onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), },
    { icon: <User size={18} color="white"/>, label: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), },
    { icon: <FolderGit size={18} color="white"/>, label: 'Projects', onClick: () => alert('Archive!') },
    { icon: <Phone size={18} color="white"/>, label: 'Contact', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <div id="home">
        {/* Light rays background */}
        {showLightRays && (
          <div
            style={{
              width: '100%',
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              pointerEvents: 'none', // ensures mouse events pass through
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="white"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.5}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
        )}

        {/* Header */}
        <header style={{ position: 'relative', zIndex: 1 }} className="m-5 flex justify-between items-center">
          <img src="my_logo.png" width={80}/>
          
          {/* Light Rays Toggle Switch */}
          <div className="flex items-center gap-3">
            <Sun size={20} color={showLightRays ? "white" : "gray"} />
            <button
              onClick={() => setShowLightRays(!showLightRays)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                showLightRays ? 'bg-yellow-400' : 'bg-gray-600'
              }`}
              role="switch"
              aria-checked={showLightRays}
              aria-label="Toggle light rays"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  showLightRays ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <Moon size={20} color={!showLightRays ? "white" : "gray"} />
          </div>
        </header>

        {/**Home Headline */}
        <section className="flex justify-center mt-10 sm:mt-16 md:mt-20 flex-col items-center px-4 sm:px-6">
          <BlurText
            text="Frequemarf Paculba Jr."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-serif text-white tracking-wider text-center"
            style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
          />

          <BlurText
            text="Full Stack Web Developer"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 font-serif text-white tracking-wider text-center"
            // style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
          />

          <BlurText
            text="Bringing your web vision to life with full-stack precision"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-serif text-white tracking-wider text-center max-w-4xl"
            // style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
          />

          <button className="border border-yellow-400 p-2 sm:p-3 md:p-4 text-white rounded-md bg-gray-800 hover:bg-black cursor-pointer text-sm sm:text-base transition-all duration-200 hover:scale-105">
            View Resume
          </button>

          <div className="border border-yellow-400 w-[95%] sm:w-[90%] mt-8 sm:mt-12 md:mt-16 lg:mt-20"></div>
        </section>
      </div>
      
      <h1 className="text-center text-white mt-5 text-4xl">About Me</h1>

    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-6 mb-20">
      {/* Tilt Card */}
      <TiltCard
        className="w-full max-w-sm aspect-[4/5] overflow-hidden rounded border border-amber-400" // aspect ratio close to 2400x3000
        highlightClassName="bg-white/15 dark:bg-white/2"
        maxTilt={25}
      >
        <img
          src="IMG_3723.jpg"
          alt="Image"
          className="h-full w-full object-cover rounded"
        />
      </TiltCard>

      {/* Text Content */}
      <div className="text-white flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          Hi, I am Frequemarf Paculba Jr. – A Full Stack Web Developer
        </h1>
        <p className="text-base leading-relaxed">
          Passionate about building powerful and efficient web applications.<br /><br />
          I enjoy bridging the gap between elegant front-end design and powerful back-end systems. My focus is not just
          on writing clean and maintainable code, but also on understanding user needs and delivering real-world
          business solutions.
          <br /><br />
          Whether working solo or as part of a team, I value clear communication, continuous learning, and delivering
          high-quality results on time.
        </p>
      </div>
    </section>

    <section className="text-center">
      <h1 className="text-white text-3xl">Skills</h1>
      <Spider/>
    </section>

      {/* Dock fixed to bottom center */}
      <div
        style={{
          position: "fixed",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>

    </>
  );
}