import Nav from "./components/Nav.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import SoundSection from "./components/SoundSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import WebGiViewer from "./components/WebGiViewer.jsx";
import { useRef } from "react";
function App() {
  const webGiViewerRef = useRef();

  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      <WebGiViewer ref={webGiViewerRef} />
    </div>
  );
}

export default App;
