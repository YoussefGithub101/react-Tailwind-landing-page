 
 
import './App.css'
import Producs from './components/producs'
import Clients from './components/Clients'
import Section3 from './components/section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
 
import Nav from './layout/nav'
import Footer from './layout/Footer'
import { useEffect, useState } from 'react'
  
 

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  useEffect(() => {
    // Apply the theme to the document body
    document.body.classList.remove('light', 'dark'); // Remove existing classes
    document.body.classList.add(theme); // Add the selected theme
    localStorage.setItem('theme', theme); // Save the theme to localStorage
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
      
        
      
  return (
    <>
    <body className='bg-body_bg'>
    <Nav/>
    <Producs/>
    <Clients/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
    <button className='fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 text-white'
    onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>

       
    </body>
    </>
    
  )
}

export default App
