import {BrowserRouter, Route, Routes} from "react-router-dom" 
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return <>
  {/**define the routes here */}
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="*" element={<NotFound/>}/>{/**this means a default route for undefined routes */}
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
