import './nav.css'
import vite from '../public/github-mark-white.png'
import fb from '../public/facebook3.png'
import react from './assets/react.svg'
import ln from '../public/lnwhite.png'
export default function Nav({ onProjectClick }){
    return(
        <>
        <nav className="nav-bar">
            <div className="main">
                <img src={react} alt="" className='react'/>
                 <a href="#project">
                    <span onClick={onProjectClick}>Projects</span>
                 </a>
            <a href="#skills"><span>Skills</span></a>
            <a href="#about"><span>About</span></a>
            </div>
           <div className="links">
            <a href="https://github.com/miheku" target='_blank'><img src={vite} alt="" /></a>
            <a href="https://www.facebook.com/share/1CfVABPHQN/" target='_blank'><img src={fb} alt="" /></a>
            <a href="https://www.linkedin.com/in/min-hein-kyaw/" target='_blank'><img src={ln} alt="" /></a>
           </div>
           
        </nav>
        </>
    )
}