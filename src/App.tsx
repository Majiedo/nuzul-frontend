import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
