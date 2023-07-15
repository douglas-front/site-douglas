import { useState, useEffect } from "react";

import { GithubRepoBody } from "../../@types/github";

import { Header, CardsProjects, Loading} from "../../components";

import "../../pages/Projects/style.scss";



const Projects = () => {
  const [data, setData] = useState<GithubRepoBody[]>([]); // Typar o state

  const apiToken = import.meta.env.VITE_API_KEY;
  const api = import.meta.env.VITE_API

  useEffect(() => {
    const requisition = async () => {
      // exception
      const apiRes = await fetch( api ,
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      const response = await apiRes.json();
      if (Array.isArray(response)) {
        console.log(data)
        setData(response);
      }

    };
    requisition();

    
  }, []);

  if (data.length === 0) return <Loading />;
  return (
    <>
      <Header nameContact="contato" nameAbout="" nameLink="" />

      <section className="SectionProjects">
        <h1>PROJETOS</h1>
        <div
          className="card-content"
          style={{ gridTemplateRows: `repeat(${data.length} , 450px)` }}
        >
          {data.map((repo) => (
            <div key={repo.id} className="card">
              {data.length > 0 ? (
                <CardsProjects
                  language={repo.language}
                  Discription={repo.description}
                  Link={repo.language === "C#" ? `${repo.html_url}` : `https://douglas-front.github.io/${repo.name}`}
                  Projects={repo.name}
                />
              ) : (
                ""
              )}
            </div>
          ))}

        </div>
        <div style={{height: '50'}}>
               
        </div>
      </section>
    </>
  );
};

export default Projects;
