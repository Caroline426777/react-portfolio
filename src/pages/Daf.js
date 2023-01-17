import NavBar from "../components/NavBar";
import ProjectIntro from "../components/ProjectIntro";
import CompanyIntro from "../components/CompanyIntro";
import ProjectOneImg from "../components/ProjectOneImg";
import AssignmentText from "../components/AssignmentText";

import dafimg from "../assets/DAF/MockupDAF-sep.png";
import daflogo from "../assets/DAF/DAF_LOGO_RGB_PNG.png";

import longimg from "../assets/DAF/Dashboard.jpg";

function Daf() {
  return (
    <div className="daf">
      <NavBar gradient="linear-gradient(#d3def4,#d3def4)" />
      <ProjectIntro
        gradient="linear-gradient(#d3def4,#b7ccf7)"
        title="DAF Trucks"
        categories="Concepting, Design, Development - 2022"
        img={dafimg}
      />
      <CompanyIntro
        img={daflogo}
        body="The assignment I am going to work on, is run on behalf of the company: DAF Trucks N.V. DAF Trucks is a technology company and a manufacturer of transport solutions. This year a new generation of trucks have been presented to the world. These New Generation trucks are called XF, XG and XG+. In these new high-tech, next level luxury trucks there are multiple digital screens, one for the dashboard and one for the infotainment system."
        client="Client: DAF Trucks N.V."
      />
      <ProjectOneImg img={longimg} />
      <AssignmentText
        head={"DAF Dashboard Tool"}
        body={
          "A feature that is particularly important for my own assignment was the dashboard screen. On the dashboard there are numerous options that can be customized to fit the driver’s needs. These options can be altered or set using the buttons on the steering wheel. But before the dashboard screen can be used, an emulator had to be created to teach drivers how to operate the buttons.The assignment for my internship was to develop a tool that explains the New Generation trucks new dashboard system and controls to support trainings and presentations. The goal for the project was to build a simulator that the target group can use to interactively learn or teach the new dashboard screen without the truck being present."
        }
      />
    </div>
  );
}

export default Daf;
