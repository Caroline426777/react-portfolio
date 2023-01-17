import "./CompanyIntro.css";

function CompanyIntro({ img, body, client }) {
  return (
    <div className="company-intro">
      <img className="company-intro__img" src={img} alt="projectimage" />
      <div>
        <p>{body}</p>
        <p>{client}</p>
      </div>
    </div>
  );
}

export default CompanyIntro;
