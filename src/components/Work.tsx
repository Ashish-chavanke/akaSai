import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "GeneGuard",
              category: "AI Genetic Risk Prediction",
              tools: "Python, Flask, MySQL, Firebase",
            },
            {
              title: "Inventory Management System",
              category: "Web Application",
              tools: "HTML, CSS, Python, Flask, MySQL",
            },
            {
              title: "Web & App Feature Development",
              category: "Full Stack Development",
              tools: "Python, Firebase, JavaScript, React",
            },
            {
              title: "UI/UX Design Assets",
              category: "Design and Branding",
              tools: "Canva, UI/UX, Digital Design",
            },
            {
              title: "Genetic Risk Prediction Platform",
              category: "AI-Based Healthcare",
              tools: "Python, AI Tools, Predictive Modeling",
            },
            {
              title: "Analytics & Hackathon Projects",
              category: "Research and Prototyping",
              tools: "MongoDB, MySQL, AI Tools",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="Project screenshot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
