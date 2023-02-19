import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
            <Route path='/not-found' element={<NotFound />} />
          <Route path={'/'} exact element={<Home />} />
          <Route path="*" element={<Navigate to ="/not-found" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
