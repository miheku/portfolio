import './hero.css'
import cv from './assets/resume.pdf'
import vid from '../public/earth.mp4'
export default function Hero(){
    return(
        <>
        <div className='hero'>
            
<video src="/earth.mp4" className='video' autoPlay loop muted ></video>

<div className='content'>
<h1 className="name">
            Hey!
        </h1>
        <p>I am <span>Min Hein Kyaw</span>  also known <br /> as Mike.
        I am an ICT teacher from <br /> Yangon, Myanmar with experience in Scratch, <br />Web Development, Programming and 3D designs. <br /> I am passionate about learning new tech and <br />teaching how to grasp the concepts</p>
        <a href={cv} download={cv} target='_blank'>
<button className='resume'>My resume</button>
        </a>
</div>
 
                

        </div>
       
        </>
    )
}
