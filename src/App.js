import './App.css';
import './components/Bio';
import './components/Experience';
import './components/Skills';
import './components/Contact';
import Exprerience from './components/Experience';
import Contact from './components/Contact';
import Bio from './components/Bio';
import Skills from './components/Skills';
import './index.css';




function App() {
  return (
    <main>
      <Bio />
      <hr />
      <Exprerience />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </main>
  );
}

export default App;
