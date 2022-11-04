import React from "react";
import { StylesBaseline } from "@arwes/core/lib/StylesBaseline";
import { FrameBox, Text, List, Blockquote } from "@arwes/core/lib";
import { Animator,AnimatorGeneralProvider } from "@arwes/animation/lib";

const About = () => {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const [activate, setActivate] = React.useState(true);
  const animatorGeneral = { duration: { enter: 150, exit: 150, stagger: 40 } };

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <StylesBaseline styles={{
          body: { fontFamily: FONT_FAMILY_ROOT }
        }} />
        <FrameBox animator={{ animate: false }}>
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Animator animator={{ activate }}>
            <div
              style={{
                width: 700,
                height: "auto",
              }}
            >
              <Text as="h2" >About site</Text>
              <Blockquote palette={"error"}>
                <Text>
                  Despite numerous tools exist to perform forensics
                  investigations on images, they lack features and are generally
                  buggy. This site is meant to address these issues and offer a
                  stable and reliable service for forensics investigators and
                  security professionals.
                </Text>
              </Blockquote>

              <Text as="h2">Technical features</Text>
              <List>
                <li>
                  <Text>Supported image types</Text>
                  <List>
                    <li>
                      <Text>Windows bitmap .bmp</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .cr2</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .crw</Text>
                    </li>
                    <li>
                      <Text>Encapsulated PostScript .eps</Text>
                    </li>
                    <li>
                      <Text>Graphics Interchange Format .gif</Text>
                    </li>
                    <li>
                      <Text>JPEG File Interchange Format .jpg or .jpeg</Text>
                    </li>
                    <li>
                      <Text>Raw Minolta .mrw</Text>
                    </li>
                    <li>
                      <Text>Raw Olympus .orf</Text>
                    </li>
                    <li>
                      <Text>Portable Network Graphics .png</Text>
                    </li>
                  </List>
                </li>
                <li>
                  <Text>Supported image types</Text>
                  <List>
                    <li>
                      <Text>Windows bitmap .bmp</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .cr2</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .crw</Text>
                    </li>
                    <li>
                      <Text>Encapsulated PostScript .eps</Text>
                    </li>
                    <li>
                      <Text>Graphics Interchange Format .gif</Text>
                    </li>
                    <li>
                      <Text>JPEG File Interchange Format .jpg or .jpeg</Text>
                    </li>
                    <li>
                      <Text>Raw Minolta .mrw</Text>
                    </li>
                    <li>
                      <Text>Raw Olympus .orf</Text>
                    </li>
                    <li>
                      <Text>Portable Network Graphics .png</Text>
                    </li>
                  </List>
                </li>
                <li>
                  <Text>Supported image types</Text>
                  <List>
                    <li>
                      <Text>Windows bitmap .bmp</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .cr2</Text>
                    </li>
                    <li>
                      <Text>Raw Canon .crw</Text>
                    </li>
                    <li>
                      <Text>Encapsulated PostScript .eps</Text>
                    </li>
                    <li>
                      <Text>Graphics Interchange Format .gif</Text>
                    </li>
                    <li>
                      <Text>JPEG File Interchange Format .jpg or .jpeg</Text>
                    </li>
                    <li>
                      <Text>Raw Minolta .mrw</Text>
                    </li>
                    <li>
                      <Text>Raw Olympus .orf</Text>
                    </li>
                    <li>
                      <Text>Portable Network Graphics .png</Text>
                    </li>
                  </List>
                </li>
              </List>
            </div>
          </Animator>
          </AnimatorGeneralProvider>
        </FrameBox>
      </div>
    </>
  );
};

export default About;
