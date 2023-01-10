import "./WorkCard.css";

function WorkCard(props) {
  return (
    <div className="work-card">
      <img className="work-card__img" src={props.img} alt="workimage"/>
      <div className="work-card__overlay">
        <div className="work-card__head font-face-cb">{props.title}</div>
        <div className="work-card__body font-face-cr">{props.description}</div>
      </div>
    </div>
  );
}

export default WorkCard;
