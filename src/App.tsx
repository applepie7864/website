import Sidebar from './components/Sidebar';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer'
import Contact from './sections/Contact';

function App() {
  return (
    <div className='pb-16'>
      <Sidebar />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
