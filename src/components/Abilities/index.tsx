import { useState } from "react";
import "../../components/Abilities/style.scss";

//icons
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiBootstrap,
  SiReact,
  SiSass,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { VscChromeClose } from 'react-icons/vsc'
import Modal from "react-modal";

Modal.setAppElement("#root");

function Ability() {
  const results = [
    {
      id: {},
      name: "css3",
      principal: "Ao longo dos anos, dediquei tempo e esforço para aprimorar minhas habilidades em CSS, buscando sempre estar atualizado com as melhores práticas e tendências do mercado. Sou capaz de transformar designs em código, utilizando a flexibilidade e versatilidade do CSS para dar vida às ideias dos projetos.",
      icon: <DiCss3 />,
    },
    {
      id: {},
      name: "Html5",
      principal: "Ao longo dos anos, tenho me dedicado a aprimorar minhas habilidades em HTML, buscando sempre estar atualizado com as melhores práticas e os padrões do setor. Sou capaz de traduzir designs em código HTML limpo e semântico, garantindo uma base sólida para a construção de interfaces web.",
      icon: <AiFillHtml5 />,
    },
    {
      id: {},
      name: "Javascript",
      principal: "Minha abordagem no desenvolvimento web é baseada em oferecer uma experiência rica e interativa aos usuários. Com o uso do JavaScript, posso criar recursos dinâmicos, como animações, efeitos visuais, carregamento assíncrono de conteúdo e validação de formulários, para melhorar a usabilidade e a interatividade dos projetos.",
      icon: <SiJavascript />,
    },
    {
      id: {},
      name: "TypeScript",
      principal: 'Com o uso do TypeScript, posso identificar e corrigir erros de forma antecipada, reduzindo significativamente os bugs e tornando o processo de desenvolvimento mais eficiente. Além disso, as ferramentas de autocompletar e verificação de tipos do TypeScript me permitem ter uma melhor compreensão do código e facilitam a colaboração em projetos em equipe.',
      icon: <SiTypescript />,
    },
    {
      id: {},
      name: "sass",
      principal: "Com o uso do Sass, posso definir variáveis para cores, fontes e outras propriedades, o que facilita a personalização e a manutenção consistente de estilos em todo o projeto. Além disso, os mixins e as funções do Sass me permitem criar estilos complexos de forma mais concisa e sem repetição de código.",
      icon: <SiSass />,
    },
    {
      id: {},
      name: "bootstrap",
      principal: "Minha abordagem no desenvolvimento web é baseada na criação de interfaces intuitivas e acessíveis. O Bootstrap fornece uma estrutura sólida para a criação de interfaces responsivas, garantindo que meus projetos se adaptem perfeitamente a diferentes dispositivos e tamanhos de tela.",
      icon: <SiBootstrap />,
    },
    {
      id: {},
      name: "react",
      principal: "Tenho experiência em trabalhar com bibliotecas e ferramentas complementares ao React, como o Redux, para gerenciar o estado da aplicação de forma centralizada, e o React Router, para navegação entre diferentes páginas ou seções. Além disso, estou familiarizado com o uso de APIs externas, tanto para consumo de dados quanto para integração com serviços de terceiros.",
      icon: <SiReact />,
    },
  ];
  results.map((element, index) => {
    element.id = index;
  });

  const [ModalisOpen, setIsOpen] = useState(false);
  const [text, setText] = useState<string>();
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  const OpenModal = (text: string | undefined, icon: JSX.Element | null) => {
    setIsOpen(true);
    setText(text);
    setIcon(icon);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="section-ability">
      <h1>habilidades</h1>
      <div className="ability-div">
        {results.map((result, index) => (
          <div
            key={index}
            className="card-ability"
            onClick={() => OpenModal(result.principal, result.icon)}
          >
            <h1>{result.icon}</h1>
            <p>{result.name.toLocaleUpperCase()}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={ModalisOpen}
        onRequestClose={CloseModal}
        className={`modal ${ModalisOpen ? "IsOpen" : ""}`}
      >
        <h1>{icon}</h1>
        <p>{text}</p>
        <div>
          <button onClick={CloseModal}><VscChromeClose/></button>
        </div>
      </Modal>
    </section>
  );
}

export default Ability;
