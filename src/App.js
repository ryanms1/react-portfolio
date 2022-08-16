import React, { useState } from 'react';
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';

function App() {
  const [tabs] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <body>
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <main>
        {currentTab.name === 'about' ? (<About></About>)
          : currentTab.name === 'portfolio' ? (<Portfolio></Portfolio>)
            : currentTab.name === 'contact' ? (<Contact></Contact>)
              : (<Resume></Resume>)
        }
      </main>
      <Footer></Footer>
    </body>

  )
}

export default App
