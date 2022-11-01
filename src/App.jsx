import "./App.css";
import { ArwesThemeProvider } from "@arwes/core/lib/ArwesThemeProvider";
import { StylesBaseline } from "@arwes/core/lib/StylesBaseline";
import {Card,Button,Text} from "@arwes/core/lib";
import Header from "./Components/Header";

function App() {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const IMAGE_URL = "https://playground.arwes.dev/assets/images/wallpaper.jpg";

  return (
    <>
    <Header />
    <ArwesThemeProvider>
      <StylesBaseline
        styles={{
          body: { fontFamily: FONT_FAMILY_ROOT },
        }}
      />
      <Card
        animator={{ animate: false }}
        image={{
          src: IMAGE_URL,
        }}
        title="Nebula"
        options={
          <Button palette="secondary">
            <Text>Learn More</Text>
          </Button>
        }
        style={{ maxWidth: 400 }}
      >
        <Text>
          A nebula is an interstellar cloud of dust, hydrogen, helium and other
          ionized gases. Originally, the term was used to describe any diffused
          astronomical object, including galaxies beyond the Milky Way.
        </Text>
      </Card>
    </ArwesThemeProvider>
    </>
  );
}

export default App;

// https://playground.arwes.dev/assets/images/wallpaper.jpg
