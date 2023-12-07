import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from './Frontpage';
import Contactpage from './Contactpage';
import Master from './Master';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />}>
       <Route index element={<Frontpage />} />
        <Route path="home" element={<Frontpage />} />
        <Route path="contact" element={<Contactpage />} />
       
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
