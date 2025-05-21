import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import Computers from "./routes/Home/Products/Computers";
import Eletronics from "./routes/Home/Products/Eletronics";
import Books from "./routes/Home/Products/Books";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to={'/home'}/>} />
            <Route path="home" element={<HomeBody />}/>
            <Route path="products" element={<Products />}>
              <Route index element={<Navigate to={'computer'}/>}/>
              <Route path="computer" element={<Computers/>}/>
              <Route path="eletronics" element={<Eletronics/>}/>
              <Route path="books" element={<Books/>}/>
            </Route>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound/>}></Route> 
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App
