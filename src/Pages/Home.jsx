import React from "react";
import LsCard from "../Components/LsCard";
import SfCard from "../Components/SfCard";

const Home = () => {
  const content = [
    {
      title: "Spliced Image Detection",
      body: "Image splicing is an image editing method to copy a part of an image and paste it onto another image, and it is commonly followed by postprocessing such as local/global blurring, compression, and resizing.",
    },
    {
      title: "Copy-Move Image Detection",
      body: "Copy-move forgery is a common type of forgery in digital images. In copy-move forgery, one part of the image is replicated within the same image, generally at different location. For revival of trustworthiness of images, there is a need to develop an efficient and robust technique to detect such forgeries.",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        <SfCard data={content[0]} />
        <SfCard data={content[1]} />
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <LsCard />
      </div>
    </>
  );
};

export default Home;
