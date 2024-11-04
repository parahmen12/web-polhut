import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from "./components/navbar";
import Footer from './components/footer'
import Hero from "./components/hero";
import ForrestTeam from './components/forrestTeam';
import ForrestActivities from './components/forrestActivities';
import ForrestNews from './components/forrestNews';
import ForrestContact from './components/forrestContact';
import ScrollToTop from './components/ScrollOnTop';

function App() {
  return (
    <Router>
      <div>
      <Navbar />

      <main>
      <section id="home" className="pt-16">
            <Hero />
      </section>
      <section id="forrestNews" className="pt-16">
            <ForrestNews />
      </section>
      <section id="forrestTeam" className="pt-16">
            <ForrestTeam />
      </section>
      <section id="forrestActivities" className="pt-16">
            <ForrestActivities />
      </section>
      <section id="forrestContact" className="pt-16">
            <ForrestContact />
      </section>
      </main>
      <section className="pt-9">
      <Footer />
      </section>
      </div>

      <ScrollToTop />
    </Router>
    
  );
}

export default App;
