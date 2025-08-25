import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Hero from './Hero'
import Project from './Project'
import About from './About'
import calc from '../public/calc.png'
import hm from '../public/hm.avif'
import cb from '../public/color.png'
import qm from '../public/qm.jpg'
import pw from '../public/pw.jpg'
import rps from '../public/rps.webp'
import Skills from './Skills'
import scratch from '../public/scratch.png'
import html from '../public/html.png'
import react from './assets/react.svg'
import css from '../public/css.png'
import js from '../public/js.png'
import so from '../public/stem.png'
import tk from '../public/tk.png'
import py from '../public/python.png'
import meme from '../public/meme.png'
import ttt from '../public/ttt.png'
import todo from '../public/todo.png'
import dict from '../public/dictionary.png'
import weather from '../public/weather2.png'
import ig from '../public/igcse.png'
import tenzi from '../public/tenzi.jpg'
function App() {

  

  const [project, setProject] = useState([{
          name:"Calculator",
          link:"https://min-hein-kyaw.github.io/calculator",
          info:"a project about calculator where you can do the basic maths",
          background: calc
        },{
    name:"Quiz App",
    link:"https://min-hein-kyaw.github.io/quiz",
    info:"An app that gives you trivial quiz of different category and scores at the end",
    background:qm
  },{
    name:"Password Generator",
    link:"https://min-hein-kyaw.github.io/random-password-generator/",
    info:"An app that generate the random password based on your preference",
    background: pw
  },{
    name:"Rock Paper Scissors",
    link:"https://min-hein-kyaw.github.io/rockpaperscissors/",
    info:"A classic game of rock paper scissors",
    background: rps
  },{
    name:"Tic-Tac-Toe",
    link:"https://min-hein-kyaw.github.io/tictactoe",
    info:"A classic 3x3 2 player game",
    background:ttt
  },{
    name:"Meme generator",
    link:"https://min-hein-kyaw.github.io/meme-generator",
    info:"An app where you can generate memes and save it",
    background:meme
  },{
    name:"To-Do app",
    link:"https://min-hein-kyaw.github.io/to-do-app",
    info:"An app that track your activities",
    background:todo

  },{
    name:"Dictionary",
    link:"https://min-hein-kyaw.github.io/dictionary",
    info:"A dictionary app where you can find meanings and examples of the words",
    background:dict
  },{
    name:"Weather App",
    link:"https://min-hein-kyaw.github.io/weather-app",
    info:"An app shows the tempearature and condition of the cities",
    background:weather

  }])
  
  const[lang,setLang] = useState([{
    name:"Scratch",
    icon: scratch,
    desc:"used for teaching the programming fundamentals"

  },{
    name:"HTML5",
    icon: html,
    desc: "used for static web pages and portfolio sites"
  },{
    name:"React",
    icon: react,
    desc:"used for dynamic web pages creation and user interactivity"
  },{
    name:"CSS3",
    icon: css,
    desc:"used for designing web pages to be stylish and modern"
  },{
    name:"STEM Olympiad",
    icon: so,
    desc:"used to compete coding olympiad using blockly, python and javascript to solove problems"
  },{
    name:"Java Script",
    icon:js,
    desc:"used for dynamic web pages to interact with the user"
  },{
    name:"Tinker Cad",
    icon:tk,
    desc:"used for teaching 3d design and circuit designs"
  },{

    name: "Python",
    icon:py,
    desc:"used for IGCSE exams and coding olympiads"
  },{
    name:"IGCSE",
    icon: ig,
    desc:"prepared IGCSE ICT and CS exams by using various office tools, web developement, programming, computer systems, logics and alogorithms"
  }])


  return (
    <>
    
<Nav />
      <Hero />        
      <Project project = {project}/>
      <Skills lang = {lang}/>
      <About />
    
    <footer className='footer'>
        <p>Made by Min Hein Kyaw in 2025</p>
      </footer>
      
      
    </>
  )
}

export default App
