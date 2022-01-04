
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import ShowPage from "../Item/ShowPage";

const Router = ( props ) =>{

  return (
    <BrowserRouter>
        <Routes>
            <Route exactly path="/" element={<Home/>}/>
            <Route path="/Detail" element={<ShowPage/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default Router;
