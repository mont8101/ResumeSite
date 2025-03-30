import './App.css';
import Nav from './components/nav.jsx';
import About from './components/about.jsx'
import Projects from './components/projects.jsx';
import Hero from './components/hero.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-row justify-center mb-32">
        <Nav></Nav>        
      </div>
      <div className='mb-32 flex justify-center'>
        <Hero></Hero>
      </div>
      <div className='mb-10 flex justify-center' >
        <About></About>
      </div>
      <div className='mb-10 flex justify-center'>
        <Projects></Projects>
      </div>
      <div className='flex justify-center'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
