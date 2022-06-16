import "./App.css";
import InputField from "./Components/Inputs/InputField";
import SingleItem from "./Components/SingleItem/SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputField />} />
        <Route path="/SingleItem/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
