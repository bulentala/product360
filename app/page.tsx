"use client";
import { useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";
import type { ReactImageTurntableProps } from "react-image-turntable";

export const images = [
  "/product/_50M0991.jpg",
  "/product/_50M0992.jpg",
  "/product/_50M0993.jpg",
  "/product/_50M0994.jpg",
  "/product/_50M0995.jpg",
  "/product/_50M0996.jpg",
  "/product/_50M0997.jpg",
  "/product/_50M0998.jpg",
  "/product/_50M0999.jpg",
  "/product/_50M1000.jpg",
  "/product/_50M1001.jpg",
  "/product/_50M1002.jpg",
  "/product/_50M1003.jpg",
  "/product/_50M1004.jpg",
  "/product/_50M1005.jpg",
  "/product/_50M1006.jpg",
  "/product/_50M1007.jpg",
  "/product/_50M1008.jpg",
  "/product/_50M1009.jpg",
  "/product/_50M1010.jpg",
  "/product/_50M1011.jpg",
  "/product/_50M1012.jpg",
  "/product/_50M1013.jpg",
  "/product/_50M1014.jpg",
  "/product/_50M1015.jpg",
  "/product/_50M1016.jpg",
  "/product/_50M1017.jpg",
  "/product/_50M1018.jpg",
  "/product/_50M1019.jpg",
  "/product/_50M1020.jpg",
  "/product/_50M1021.jpg",
  "/product/_50M1022.jpg",
  "/product/_50M1023.jpg",
  "/product/_50M1024.jpg",
  "/product/_50M1025.jpg",
  "/product/_50M1026.jpg",
  "/product/_50M1027.jpg",
  "/product/_50M1028.jpg",
  "/product/_50M1029.jpg",
  "/product/_50M1030.jpg",
  "/product/_50M1031.jpg",
  "/product/_50M1032.jpg",
  "/product/_50M1033.jpg",
  "/product/_50M1034.jpg",
  "/product/_50M1035.jpg",
  "/product/_50M1036.jpg",
  "/product/_50M1037.jpg",
  "/product/_50M1038.jpg",
  "/product/_50M1039.jpg",
  "/product/_50M1040.jpg",
  "/product/_50M1041.jpg",
  "/product/_50M1042.jpg",
  "/product/_50M1043.jpg",
];

function App(props: Partial<ReactImageTurntableProps>) {
  const [rotationDisabled, setRotationDisabled] = useState(false);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (rotationDisabled) return;

    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  return (
    <ReactImageTurntable
      images={images}
      autoRotate={{ disabled: rotationDisabled, interval: 200 }}
      onPointerDown={() => setRotationDisabled(true)}
      onPointerUp={() => setRotationDisabled(false)}
      onKeyDown={handleKeyDown}
      onKeyUp={() => setRotationDisabled(false)}
      {...props}
    />
  );
}

export default App;
