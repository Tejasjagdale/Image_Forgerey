import "./App.css";
import { ArwesThemeProvider } from "@arwes/core/lib/ArwesThemeProvider";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Help from "./Pages/Help";
import ReportBug from "./Pages/ReportBug";

function App() {
  return (
    <>
      <ArwesThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/reportbug" element={<ReportBug />} />
          </Routes>
        </BrowserRouter>
      </ArwesThemeProvider>
    </>
  );
}

export default App;

// https://playground.arwes.dev/assets/images/wallpaper.jpg
