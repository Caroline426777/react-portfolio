import "./ProjectOneImg.css";

function ProjectOneImg({img}){
    return(
        <div className="project-one-img">
            <img className="project-one-img__img" src={img} alt="projectimage"/>
        </div>
    )
}

export default ProjectOneImg;