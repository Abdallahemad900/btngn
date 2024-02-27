import { Canvas } from "@react-three/fiber";

import { useEffect, useState } from "react";
import Exp from "./Exper";

function Appo() {

    return (
      <>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <Exp section={section} menuOpened={menuOpened} />
          
        </Canvas>
      </>
    );
  }

export default Appo;
