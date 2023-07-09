

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Navbar from './first/Navbar';
import Main from './first/Main';
config.autoAddCss = false;
function App() {
  return (
    <div className="App">
      
    <Navbar />
    <Main />
    </div>
  );
}

export default App;
