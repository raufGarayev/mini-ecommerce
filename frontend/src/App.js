import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path="*" element={<Navigate to ="/not-found" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
