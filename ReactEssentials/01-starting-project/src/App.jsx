import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js";

let reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build! 
        </p>
      </header>
  );
}

//BELOW ARE THE TWO WAYS DEFINED TO MAKE THE COMPONENTS AND USE THE PARAMETERS
// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }


function CoreConcepts({title, image, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>      
      <main>
        <section id="core-concepts">        
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts    //below are two ways defined to use the data
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}>
            </CoreConcepts>
            
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts> 

            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>

            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
