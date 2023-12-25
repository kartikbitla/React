import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButtom.jsx";


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



function App() {
  function handleSelect(selectedButton){
    console.log("Hello world - selected");
  }

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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
                <TabButton onSelect={() => handleSelect}>Components</TabButton>
                <TabButton onSelect={() => handleSelect}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect}>Props</TabButton>
                <TabButton onSelect={() => handleSelect}>State</TabButton>
          </menu>          


        </section>
      </main>
    </div>
  );
}

export default App;