import { useState } from 'react';
import '../../components/AboutSection/style.scss'
import bg1 from '../../img/Imagem-Douglas.jpg'
import Modal from "react-modal";
import { VscChromeClose } from 'react-icons/vsc';

Modal.setAppElement("#root");

const AboutSection = () => {

  const [ModalisOpen, setIsOpen] = useState(false);
  const [text, setText] = useState<string>();

  const OpenModal = (text: string | undefined) => {
    setIsOpen(true);
    setText(text);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  return ( 
    <section id='sobre'>

      <div className='container-sobre'>
        <div className='div-img'>
          <img src={bg1} alt="" />
        </div>
        <div className='div-text'>
          <h1>Sobre mim</h1>
          <p>Olá! Meu nome é Douglas e sou um desenvolvedor web com conhecimentos sólidos em HTML, CSS, JavaScript, TypeScript, React e Sass. Com experiência prática nesses campos, estou ansioso para compartilhar com você um resumo do meu trabalho e habilidades.</p>
           <button className='seeMoreMobile' onClick={()=> OpenModal('Estou animado para trabalhar em projetos desafiadores e contribuir com meu conhecimento em HTML, CSS, JavaScript, TypeScript, React e Sass. Se você está procurando um desenvolvedor dedicado e apaixonado por criar experiências digitais excepcionais, adoraria fazer parte da sua equipe.')}>ler mais</button>
          <p>Estou animado para trabalhar em projetos desafiadores e contribuir com meu conhecimento em HTML, CSS, JavaScript, TypeScript, React e Sass. Se você está procurando um desenvolvedor dedicado e apaixonado por criar experiências digitais excepcionais, adoraria fazer parte da sua equipe.</p>
        </div>
      </div>

      <Modal
        isOpen={ModalisOpen}
        onRequestClose={CloseModal}
        className={`modal ${ModalisOpen ? "IsOpen" : ""}`}
      >
        <p>{text}</p>
        <div>
          <button onClick={CloseModal}><VscChromeClose/></button>
        </div>
      </Modal>
    </section>
  );
}
export default AboutSection;