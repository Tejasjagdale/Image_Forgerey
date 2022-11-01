import React from "react";
import { StylesBaseline } from "@arwes/core/lib/StylesBaseline";
import { FrameBox, Text, List, Blockquote } from "@arwes/core/lib";

const About = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <StylesBaseline />
        <FrameBox animator={{ animate: false }}>
          <div
            style={{
              width: 700,
              height: "auto",
            }}
          >
            <Text as="h2">About site</Text>
            <Blockquote palette={"error"}>
              <Text>
                Despite numerous tools exist to perform forensics investigations
                on images, they lack features and are generally buggy. This site
                is meant to address these issues and offer a stable and reliable
                service for forensics investigators and security professionals.
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
        </FrameBox>
      </div>
    </>
  );
};

export default About;
