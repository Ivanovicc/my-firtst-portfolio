import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* COMPONENTS */
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Header id="Home" />
      <About id="About" />
      <Projects id="Projects" />
    </>
  );
}

export default App;
