import HomeIntroText from './HomeIntroText';
import './HomeIntro.css';
import headerimg from '../assets/HeaderImg.png';

function HomeIntro(){
    return(
        <div className='home-intro'>
            <img className='home-intro__img' src={headerimg} alt="HeaderImg" />
            <HomeIntroText></HomeIntroText>
        </div>
    )
}

export default HomeIntro;