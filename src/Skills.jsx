import './skill.css'
export default function Skills({lang}){
    return(
        <>
        <div style={{width:"80%",margin:"0 auto"}}>
        <h1 id='skills'>Skills</h1>
        <p className='skill-info'>I have an extensive experience working with a variety of tools as a teacher. <br /> I've taught and developed multiple projects using these technologies yet <br /> I'm always eager to learn more.</p>
        <br /><br />
        <div className='super-wrapper'>
{lang.map(
            data =>
                <>
<div className='wrapper'>
<div className='lang-container'>
                    <img src={data.icon} alt="" />
                    <h2>{data.name}</h2>
                </div>
                <h3>{data.desc}</h3>
                </div>
                
                
                

                </>

            

            
            
        )}
        </div>    
        </div>
        
        
        </>
    )
}