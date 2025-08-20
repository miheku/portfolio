import { useState } from 'react'
import './project.css'
import tenzi from '../public/tenzi.jpg'
import calc from '../public/calc.png'
import cb from '../public/color.png'
import hm from '../public/hm.avif'
import mg from '../public/mg.png'
export default function Project({project}){
    const[top , setMain] = useState([{
      name:"Memory-Game",
      link:"https://miheku.github.io/memory-game",
      info:"flip the cards to get the same two items",
      background:mg
    },{
        name:"Tenzi",
        link:"https://miheku.github.io/tenzi",
        info:"a dice game to get all the same 6 numbers",
        background:tenzi
    
      },{
        name:"Hangman",
        link: "https://miheku.github.io/hangman/",
        info:"a game where you have to guess the correct word to win",
        background:hm
      },{
        name: "Colorbox",
        link:"https://miheku.github.io/colorbox/",
        info:"an app that you can click the icons to change the colors",
        background: cb
      }])
    const [show,setShow] = useState(false)
    console.log(top)
    function flip(){
      setShow(prev => !prev)
    }
    return(
        <>
        <div style={{width:"80%",margin:"0 auto"}}>
<h1 id='project'>Projects</h1>
        <p style={{fontSize:"25px"}}>Here's some projects that I've made using html, css, js and react</p>
            <div className='container'>
        {top.map(
            (data) => <div className='card' style={{
                backgroundImage: `url(${data.background})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat"
              }}>
              <div className='bg'>
        <a href={data.link} target='_blank'>
        <h1 className='card-header bru'>
                {data.name}
                </h1>
              </a>
              </div>
              <div className="bg">
                <p className='card-header brb'>{data.info}</p>
              </div>
                </div>
          )}
          </div>
          </div>
        {show?<div style={{width:"90%",margin:"0 auto"}}>
            <div className='container'>
        {project.map(
            (data) => <div className='card' style={{
                backgroundImage: `url(${data.background})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat"
              }}>
              <div className='bg'>
        <a href={data.link} target='_blank'>
        <h1 className='card-header bru'>
                {data.name}
                </h1>
              </a>
              </div>
              <div className="bg">
                <p className='card-header brb'>{data.info}</p>
              </div>
                </div>
          )}
          </div>
          </div>
        :null}
              <h1 className='more' onClick={flip} style={{cursor:"pointer"}}>{show?"hide":"show"}</h1>
        
          
        </>
    )
}