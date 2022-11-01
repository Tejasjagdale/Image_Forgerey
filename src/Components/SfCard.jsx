/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StylesBaseline } from "@arwes/core/lib/StylesBaseline";
import { Card, Button, Text, FrameHexagon } from "@arwes/core/lib";

const SfCard = ({ data }) => {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const Image_url = "https://playground.arwes.dev/assets/images/wallpaper.jpg";

  const [Data, setData] = useState({
    title: "no title loaded",
    body: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, the term was used to describe any diffused astronomical object, including galaxies beyond the Milky Way.",
    image: null,
  });

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <>
      <StylesBaseline
        styles={{
          body: { fontFamily: FONT_FAMILY_ROOT },
        }}
      />
      <Card
        animator={{ animate: true }}
        image={{
          src: Data.image
            ? Data.image
            : "https://playground.arwes.dev/assets/images/wallpaper.jpg",
        }}
        title={Data.title}
        options={
          <Button palette="success" FrameComponent={FrameHexagon} active>
            <Text>Learn More</Text>
          </Button>
        }
        style={{ maxWidth: 400 }}
      >
        <Text>
          {Data.body ? Data.body : ""}
        </Text>
      </Card>
    </>
  );
};

export default SfCard;
