import Nav from './components/Nav.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import SoundSection from './components/SoundSection.jsx';
import DisplaySection from './components/DisplaySection.jsx';
import WebGiViewer from './components/WebGiViewer.jsx';
function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
      <WebGiViewer/>
    </div>
  );
}

export default App;
