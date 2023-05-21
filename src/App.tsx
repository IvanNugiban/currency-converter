import React from 'react';
import Header from './components/Header';
import ConvertSection from './components/ConvertSection';
import Footer from './components/Footer';


function App() {



  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="flex-auto bg-neutral-200">
        <ConvertSection/>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
