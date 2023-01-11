import NavBar from "../components/NavBar";
import HomeIntro from "../components/HomeIntro";
import Work from "../components/Work";

import "../components/Home.css";

function Home() {
    return (
        <div>
            <NavBar gradient="radial-gradient(#E9CDCD, #E8C1C5)"></NavBar>
            <HomeIntro></HomeIntro>
            <Work></Work>
        </div>
    )
}

export default Home;