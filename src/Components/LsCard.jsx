import { AnimatorGeneralProvider } from "@arwes/animation";
import {
  ArwesThemeProvider,
  Button,
  Card,
  StylesBaseline,
  Text,
} from "@arwes/core";
import { BleepsProvider } from "@arwes/sounds";
import React from "react";

const LsCard = () => {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const IMAGE_URL = "https://playground.arwes.dev/assets/images/wallpaper.jpg";
  const SOUND_OBJECT_URL = "/assets/sounds/object.mp3";
  const SOUND_ASSEMBLE_URL = "/assets/sounds/assemble.mp3";
  const SOUND_TYPE_URL = "/assets/sounds/type.mp3";
  const SOUND_CLICK_URL = "/assets/sounds/click.mp3";

  const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
  const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };
  const audioSettings = { common: { volume: 0.25 } };
  const playersSettings = {
    object: { src: [SOUND_OBJECT_URL] },
    assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
    type: { src: [SOUND_TYPE_URL], loop: true },
    click: { src: [SOUND_CLICK_URL] },
  };
  const bleepsSettings = {
    object: { player: "object" },
    assemble: { player: "assemble" },
    type: { player: "type" },
    click: { player: "click" },
  };

  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 1000000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={globalStyles} />
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            // image={{
            //   src: IMAGE_URL,
            //   alt: "A nebula",
            // }}
            title="Image detection"
            options={
              <>
                <Button palette="secondary" id="upload">
                  <input type="file" name="file" id="file" class="inputfile" />
                  <Text> Upload file</Text>
                </Button>
              </>
            }
            landscape
            hover
            style={{ maxWidth: 800 }}
          >
            <Text>
              Upload file and wait for model to work only .png ,jpg ,jpeg files are allowed.
            </Text>
          </Card>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};

export default LsCard;
