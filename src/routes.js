import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Links from './pages/Links/links'; // Importe o diretório, não o arquivo específico
import Error from "./pages/Error/error";


function RoutesApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/links" element={<Links />} />
                <Route path="/*" element={<Error />} />
            </Routes>    
        </BrowserRouter>
    )
}

export default RoutesApp;
