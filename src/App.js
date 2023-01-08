import { Routes, Route } from "react-router-dom";
import WebNav from "./components/navbar/WebNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";
import vid from "./assets/images/pink.mp4";
import "./assets/app.css";

function App() {
  return (
    <>
    
    <WebNav />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/thanks" element={<Thanks />} />
      <Route path="/cabs" element={<Home />} />
    </Routes>
          <video id = "pink" className='videoTag' autoPlay loop muted>
    <source src={vid} type='video/mp4' />
</video>
    </>
  );
}

export default App;
