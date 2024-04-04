import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Ready from './components/Ready'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <About />
      <Tokenomics />
      <Ready />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
