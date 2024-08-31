import './app.scss';
import Hero from './componets/hero/Hero';
import Navbar from './componets/navbar/Navbar';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      
      </section>
      <section id='Portfolio'>portfolio</section>
      <section id= "Services">Services</section>
      <section>ddh</section>
      <section>ddh</section>
      <section id='Contacts'>contacts</section>
    </div>
  );
};

export default App;
