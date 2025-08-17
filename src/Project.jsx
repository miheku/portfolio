import './project.css'
export default function Project({project}){
    
    
    return(
        <>
        <div style={{width:"90%",margin:"0 auto"}}>
<h1 id='project'>Projects</h1>
        <p style={{fontSize:"25px"}}>Here's some projects that I've made using html, css, js and react</p>
            <div className='container'>            
        {project.map(
            (data, index) => <div className='card' style={{
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
                <a href="https://github.com/miheku" target='_blank'><h1 className='more'>see more</h1></a>
        </div>
        
          
        </>
    )
}