import { Header , Footer} from "../../components";
import "../..//pages/Contact/style.scss";

//icons
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineInstagram , AiFillGithub} from 'react-icons/ai'
function Contact() {

  const wts = import.meta.env.VITE_MESSAGE_WHATSAPP
  return (
    <>
      <Header nameAbout="" nameContact="" nameLink="projetos" />
      <main>
      <section className="contact-sec">
          <h1>contatos</h1>
        <div>
          <a href={wts} target="_blank"><BsWhatsapp/></a>
          <a href="https://www.linkedin.com/in/douglas-rodrigues-310128276/" target="_blank"><AiOutlineLinkedin/></a>
          <a href="https://www.instagram.com/eu_douglaas/" target="_blank"><AiOutlineInstagram/></a>
          <a href="https://github.com/douglas-front" target="_blank"><AiFillGithub/></a>
        </div>

      </section>
        <Footer/>
      </main>
    </>
  );
}

export default Contact;
