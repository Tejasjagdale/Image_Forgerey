import "./App.css";
import { ArwesThemeProvider } from "@arwes/core/lib/ArwesThemeProvider";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ArwesThemeProvider>
        <Header />
        <Home/>
      </ArwesThemeProvider>
    </>
  );
}

export default App;

// https://playground.arwes.dev/assets/images/wallpaper.jpg
