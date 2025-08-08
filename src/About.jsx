import "./about.css"
import me from '../public/me.jpg'
export default function About(){
    return(
        <>
        <div className="about-me-container">
                    <h1 id="about">About Me</h1>

<img src={me} alt="" style={{width:"200px", borderRadius:"50%", border:"5px solid white"}} />
        <p className="color">

            Hailing from the vibrant city of <span>Yangon, Myanmar</span>, I am <span>Min Hein Kyaw</span>. I am a passionate <span>ICT and computer science</span> educator with over <span>3 years</span>  of dedicated experience in teaching <span>web development, programming, and digital tools</span>. My commitment to fostering <span>a love for technology</span> in my students is complemented by my background as an <span>English teacher</span> , where I have achieved a <span>TESOL certification</span> along with an impressive <span>IELTS</span> band score of <span>7.5</span> and TKT scores of 3, 4, and 4 across modules. I have successfully trained <span>IGCSE students in computer science and ICT</span>, equipping them with the skills to excel in <span>IGCSE O level exams</span> and coding competitions. Beyond the classroom, I actively engage students in <span>co-curricular activities</span>, conducting robotics courses that utilize <span>Arduino and micro:bit</span>, inspiring the next generation of innovators. My multifaceted approach to teaching not only enhances <span>technical literacy</span> but also encourages <span>creative thinking and problem-solving skills</span>, empowering students to thrive in an increasingly digital world.
        </p>
        </div>
        
        </>
    )
}