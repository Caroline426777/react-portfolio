import daf from '../assets/MockupDAF2.png';
import './WorkCard.css'

function WorkCard(){
    return(
        <div className='work-card'>
            <img className='work-card__img' src={daf} alt="DAF" />
            <div className='work-card__overlay font-face-cb'>
            DAF Dashboard tool</div>
        </div>
    )
}

export default WorkCard;