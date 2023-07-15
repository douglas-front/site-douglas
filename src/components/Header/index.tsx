import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
// styled-components, sass!
//npm install styled-components
//npm install --save-dev @types/styled-components
type MyComponentProps = {
  nameLink: string;
  nameAbout: string;
  nameContact: string;
};

function Header(props: MyComponentProps){
  
    const [classe , setClasse] = useState('')
    function addClassNavMobile(){
      if(classe === 'mobile-on'){
        setClasse('')
        return
      }
      setClasse('mobile-on')
    } 

    const home =  "/site-douglas"
    const projects =  "/site-douglas/projetos"
    const contact =  "/site-douglas/contato"
    
    return(
    <header>
      <nav>
        <div className='Header__navgation__brand'>
          <h1>Douglas</h1>
        </div>
        <ul className='Header__navgation__links'>
          <li><Link to={home}>Home</Link></li>
          <li><a href="#sobre">{props.nameAbout}</a></li>
          <li><Link to={projects}>{props.nameLink}</Link></li>
          <li><Link to={contact}>{props.nameContact}</Link></li>
          <li><a href="https://github.com/douglas-front" target='_blank'>Git Hub</a></li>
        </ul>
        {/* mobile */}
          <button onClick={()=> addClassNavMobile()} className='Btn-Mobile'>
            <span className={` sp ln1 ${classe}`}></span>
            <span className={` sp off ${classe}`}></span>
            <span className={` sp ln2 ${classe}`}></span>
          </button>
          <ul onClick={()=> addClassNavMobile()} className={`ul-mobile ${classe}`} >
          <li><Link to={home}>Home</Link></li>
          <li><a href="#sobre">{props.nameAbout}</a></li>
          <li><Link to={projects}>{props.nameLink}</Link></li>
          <li><Link to={contact}>{props.nameContact}</Link></li>
          <li><a href="https://github.com/douglas-front" target='_blank'>Git Hub</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header