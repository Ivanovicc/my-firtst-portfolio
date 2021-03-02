import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* COMPONENTS */
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About id="About" />
    </>
  );
}

export default App;
