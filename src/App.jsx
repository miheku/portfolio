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
function App() {
  const [project, setProject] = useState([{
    name:"calculator",
    link:"https://miheku.github.io/calculator",
    info:"a project about calculator where you can do the basic maths",
    background: calc
  },{
    name:"hangman",
    link: "https://miheku.github.io/hangman/",
    info:"a game where you have to guess the correct word to win",
    background:hm
  },{
    name: "colorbox",
    link:"https://miheku.github.io/colorbox/",
    info:"an app that you can click the icons to change the colors",
    background: cb
  },{
    name:"Quiz App",
    link:"https://miheku.github.io/quiz",
    info:"An app that gives you trivial quiz of different category and scores at the end",
    background:qm
  },{
    name:"Password Generator",
    link:"https://miheku.github.io/random-password-generator/",
    info:"An app that generate the random password based on your preference",
    background: pw
  },{
    name:"Rock Paper Scissors",
    link:"https://miheku.github.io/rockpaperscissors/",
    info:"A classic game of rock paper scissors",
    background: rps
  },{
    name:"Tic-Tac-Toe",
    link:"https://miheku.github.io/tictactoe",
    info:"A classic 3x3 2 player game",
    background:ttt
  },{
    name:"Meme generator",
    link:"https://miheku.github.io/meme-generator",
    info:"An app where you can generate memes and save it",
    background:meme
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
  }])


  return (
    <>
    
<Nav />
      <Hero />        
      <Project project = {project} />
      <Skills lang = {lang}/>
      <About />
    
    <footer className='footer'>
        <p>Made by Min Hein Kyaw in 2025</p>
      </footer>
      
      
    </>
  )
}

export default App
