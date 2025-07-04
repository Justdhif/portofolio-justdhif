import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import CVButton from "../components/CVButton";

const About = () => {
  const grid2Container = useRef();
  const mainContainerRef = useRef();

  // Handle CV download
  const handleDownloadCV = () => {
    const cvUrl = "/assets/cv/cv_nadhif_ararya_wiankosasi.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Justdhif_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={mainContainerRef}>
      <section id="about" className="c-space section-spacing overflow-x-hidden">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          <div className="flex items-end grid-default-color grid-1 overflow-hidden">
            <img
              src="/assets/coding-pov.png"
              alt=""
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Justdhif</p>
              <p className="subtext">
                I am a student at SMKS Taruna Bhakti, currently pursuing
                software engineering. I am ready to contribute through work or
                internship opportunities at your company, and I hope to bring a
                positive impact through my presence and efforts.
              </p>
            </div>
            <div className="absolute insex-x-0 pointer-events-none -bottom-4 h-1/2 smh-1/3 bg-gradient-to-t from-indigo" />
          </div>

          {/* Grid 2 */}
          <div className="grid-default-color grid-2 overflow-hidden">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end lg:text-5xl text-4xl text-gray-500 uppercase">
                Code is craft
              </p>
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text={"Frontend"}
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text={"Backend"}
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text={"Fullstack"}
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text={"UI/UX"}
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text={"Database"}
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="/assets/logos/vitejs.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="/assets/logos/javascript.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="/assets/logos/react.svg"
                containerRef={grid2Container}
              />
            </div>
          </div>

          {/* Grid 3 */}
          <div className="grid-black-color grid-3 overflow-hidden">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                A student at Indonesia ( GMT+7 ), passionate about software
                engineering. Ready to adapt to different time zones and
                contribute positively to international teams.
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>

          {/* Grid 4 */}
          <div className="grid-special-color grid-4 overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">
                Do you want start a project together?
              </p>
              <CVButton onClick={handleDownloadCV} />
            </div>
          </div>

          {/* Grid 5 */}
          <div className="grid-default-color grid-5 overflow-hidden">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                Familiar with modern technologies used in web and mobile
                application development, both on the frontend and backend.
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
