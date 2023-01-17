import "./AssignmentText.css";

function AssignmentText({head, body}){
    return(
        <div className="assignment-text">
            <h1 className="font-link">{head}</h1>
            <p className="font-face-cr">{body}</p>
        </div>
    )
}

export default AssignmentText;