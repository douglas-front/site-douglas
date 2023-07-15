
import "../../components/SectionPrimary/style.scss";
import { Link } from "react-router-dom";

function SectionPrimary() {
  return (
   <>
    <section className="secPrimary" id="particles-js">
      <div className="back"></div>
      <div className="sec-content">
      <h1>Douglas - Desenvolvedor Front-End</h1>
      <p>Bem-vindo ao meu site de portfólio! Sou Douglas,
         um desenvolvedor front-end apaixonado por criar 
         experiências digitais incríveis. Estou sempre em busca de desafios estimulantes 
          e oportunidades para aprimorar minhas habilidades.</p>
          <div className="d">
           <Link to="projetos"><button className="btn-sec-primary">Clique e Saiba Mais!</button></Link>
          </div>
      </div>
    </section>
   </>
  )
}

export default SectionPrimary

