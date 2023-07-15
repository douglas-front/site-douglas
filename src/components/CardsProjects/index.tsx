import landing from "../../img/landing.png";
// import { AiFillHtml5 } from "react-icons/ai";
// import { SiJavascript } from "react-icons/si";
// import { DiCss3 } from "react-icons/di";
import { motion } from "framer-motion";
import "../../components/CardsProjects/cardsProject.scss";

type MyComponentProps = {
  Link: string;
  Projects: string;
  Discription: string;
  language: string;
};

const CardsProjects = (props: MyComponentProps) => {
  // usa um hook que redireciona para o link de outra página
  const paraLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <section className="containerProjects">
      <motion.div
        initial={{ scale: 0, rotate: 300 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <div className="content-cards CardsProjects">
          <div className="cards">
            <div className="card1" onClick={() => paraLink(`${props.Link}`)}>
              <img src={landing} alt="Imagem" />
              <p>{props.Projects}</p>
              <p>{props.Discription}</p>
              <span>
                {/* <AiFillHtml5 />
              <DiCss3 />
              <SiJavascript /> */}
                <p>{props.language}</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CardsProjects;
