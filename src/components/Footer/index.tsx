import '../../components/Footer/style.scss'

import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineInstagram , AiFillGithub} from 'react-icons/ai'
import { FaCopyright } from 'react-icons/fa'


function Footer() {
  const wts = import.meta.env.VITE_MESSAGE_WHATSAPP
  return ( 
    <footer>
      <div>
        <h3>Douglas Rodrigues</h3>
        <p>todos os direitos reservados <FaCopyright/></p>
      </div>
      <div>
        <h3>visite as redes sociais</h3>
        <div className='ico'>
          <a href={wts} target="_blank"><BsWhatsapp/></a>
          <a href="https://www.linkedin.com/in/douglas-rodrigues-310128276/" target="_blank"><AiOutlineLinkedin/></a>
          <a href="https://www.instagram.com/eu_douglaas/" target="_blank"><AiOutlineInstagram/></a>
          <a href="https://github.com/douglas-front" target="_blank"><AiFillGithub/></a>
        </div>
      </div>
    </footer>
   );
}

export default Footer;