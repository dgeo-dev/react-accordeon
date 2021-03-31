import "./App.css"
import Accordion from "./components/Accordion"

function App() {
  return (
    <div className="App">
      <div className="accordions">
        <Accordion title="Titre 1" content="contenu 1 " />
        <Accordion title="Titre 2" content="contenu 2 " />
        <Accordion title="Titre 3" content="contenu 3 " />
      </div>
    </div>
  )
}

export default App
