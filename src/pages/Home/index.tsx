import {Header , SectionPrimary , CardsSecPrimary , AboutSection , Ability , Footer} from '../../components';


const Home = () => {
  return ( 
    <>
      <Header nameContact='contato' nameAbout='sobre' nameLink='projetos' />
      <main>
       <SectionPrimary/>
       <CardsSecPrimary/>
       <Ability/>
       <AboutSection/>
       <Footer/>
      </main>
    </>
 );
}
 
export default Home;