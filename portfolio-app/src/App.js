
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="container">
      <Nav />
      <AboutMe />
      <Portfolio /> 
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;