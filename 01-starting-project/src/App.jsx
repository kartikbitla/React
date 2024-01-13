import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContent = "Please click a button";
  function handleSelect(selectedButton){
    console.log(selectedButton);
    tabContent = selectedButton;
   }


  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>            
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
              <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
            </menu>
            {tabContent}
        </section>        
      </main>
    </div>
  );
}

export default App;
 