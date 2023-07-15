import '../../components/CardsSecPrimary/style.scss'
import coffez from '../../img/Coffez.png'
import client from '../../img/client.png'
import landing from '../../img/landing.png'
import {FaAngleRight} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import { useState } from 'react'
import { motion } from 'framer-motion';

const CardsSecPrimary = () => {

  const [classe , setClasse] = useState('')

  const carousel = (name: string)=>{
      setClasse(name)
      if(classe == name){
        setClasse('on3')
      }
      if(classe == "on3"){
        setClasse('on1')
      }
  }

  const paraLink = (link: string) =>{
    window.open(link , '_blank')
  }
  return ( 
    <motion.div
  initial={{ scale: 0, rotate: 300 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 15,
  }}
>
  <div className="content-cards">
    <div className="cards">
      <div className={`card1 ${classe}`} onClick={() => paraLink('https://douglas-front.github.io/landing-douglas')}>
        <img src={landing} alt="Imagem" />
        {/* <p>Landing page desse site com html, css e javascript</p> */}
        <span>
          <AiFillHtml5/> 
          <DiCss3/>
          <SiJavascript/>
        </span>
     </div>

    <div className={`card2 ${classe}`} onClick={() => paraLink('https://douglas-front.github.io/site-coffez')}>
      <img src={coffez} alt="Imagem" />
      {/* <p>Projeto para uma loja de café com html , css e javascript</p> */}
      <span>
        <AiFillHtml5/> 
        <DiCss3/>
        <SiJavascript/>
      </span>
    </div>
  
    <div className={`card3 ${classe}`} onClick={() => paraLink('https://Renata-almeida.github.io/Curso')}>
      <img src={client} alt="Imagem" />
      {/* <p>Site/cliente para curso de bolos com html , css e javascript</p> */}
      <span>
        <AiFillHtml5/> 
        <DiCss3/>
        <SiJavascript/>
      </span>
    </div>
    <button className='right' onClick={()=> carousel('on')}><FaAngleRight/></button>
    </div>
  </div>
  </motion.div>
  );
}
 
export default CardsSecPrimary;