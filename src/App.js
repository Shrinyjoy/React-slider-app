
import './App.css';
import Slides from './components/Slides';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <h2><span className='heading1'>H<span style={{ color: "green", fontWeight: "900",letterSpacing:"-4px"}}>lll</span> </span>  
          <span style={{ color: "green", paddingLeft: "20px"}}>Slideshow App</span></h2>
      </header>
      <Slides />
    </div>
  );
}

export default App;
