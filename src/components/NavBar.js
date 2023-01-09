import './NavBar.css';
import logo from '../assets/MyLogo-white.png';

function NavBar(){
    return(
        <div className='nav-bar'>
            <img className='nav-bar__logo' src={logo} alt="Logo" />
            <ul className='nav-bar__list'>
                <li className='nav-bar__item font-link'><a href='#'>Work</a></li>
                <li className='nav-bar__item font-link'><a href='#'>About</a></li>
            </ul>
        </div>
    )
}

export default NavBar;