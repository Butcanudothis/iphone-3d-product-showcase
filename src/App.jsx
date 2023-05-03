import Nav from "./components/Nav.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import SoundSection from "./components/SoundSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import WebGiViewer from "./components/WebGiViewer.jsx";
import Loader from "./components/Loader.jsx";
import { useRef } from "react";
function App() {
  const webGiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebGiViewer ref={webGiViewerRef} contentRef={contentRef} />
    </div>
  );
}

export default App;
