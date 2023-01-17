import "./ProjectIntro.css";

function ProjectIntro({gradient, title, categories, img}) {
  return (
    <div className="project-intro" style={{backgroundImage: gradient}}>
      <div className="project-intro__content">
        <div className="project-intro__text">
          <h1 className="font-link">{title}</h1>
          <p className="font-face-cr">{categories}</p>
        </div>
        <img
          className="project-intro__img"
          src={img}
          alt="projectimage"
        />
      </div>
    </div>
  );
}
export default ProjectIntro;
