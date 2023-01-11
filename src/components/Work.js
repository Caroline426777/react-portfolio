import "./Work.css";
import WorkCard from "./WorkCard";

import dafimg from "../assets/MockupDAF2.png";
import strijpimg from "../assets/MockupStrijp.png";
import ladiesimg from "../assets/MockupLadiesGamers.png";
import ddwimg from "../assets/MockupDDW.png";
import ellieimg from "../assets/MockupEllie2.png";
import lickaliximg from "../assets/MockupLickalix.png";

function Work() {
  return (
    <div className="work">
      <h1 className="work__head font-link">Work</h1>
      <div className="work__cards">
        <a href="/daf">
          <WorkCard
            img={dafimg}
            title="DAF Dashboard Tool"
            description="A WebApp where the user can learn how to truck dashboard and switched work in different ways."
          />
        </a>
        <a>
          <WorkCard
            img={strijpimg}
            title="Strijp-T Hotspot WebApp"
            description="A Web Application with a map of Strijp-T with various hotspots. This way the user gets information about that location and a piece of history."
          />
        </a>
        <a>
          <WorkCard
            img={ladiesimg}
            title="LadiesGamers"
            description="Banners and wallpapers for this gaming review website. They are a mixture between feminine and gaming."
          />
        </a>
        <a>
          <WorkCard
            img={ddwimg}
            title="Dutch Design Week"
            description="An immersive experience of the Fontys ICT InnovationLab. This experience shows visitors how the building perceives them."
          />
        </a>
        <a>
          <WorkCard
            img={ellieimg}
            title="Interactive Ellie App"
            description="The concepting and design of a WebApp that creates the users personal agenda based on their learning needs and keeps track of their progress."
          />
        </a>
        <a>
          <WorkCard
            img={lickaliximg}
            title="Lickalix packaging"
            description="New compostable packaging for their organic and allergy free ice lollies. And a new styling for their YouTube content."
          />
        </a>
      </div>
    </div>
  );
}

export default Work;
