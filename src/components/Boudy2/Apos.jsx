import { Scroll, ScrollControls,OrbitControls,Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";


import { useEffect, useState, Suspense } from "react";
// import { framerMotionConfig } from "./config";
import Exprs from "./Exper";
import { ScrollManagers } from "./ScrollManagers";

function Appos() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
     <MotionConfig transition={{
          type:" spring "
          , mass:5 , 
          stiffnes:20 ,
          damping :5,
          restDelta :0.0001
        }}>

     <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
     <color attach="background" args={["#e6e7ff"]} />
     
     <ScrollControls pages= {4} damping={0.1}>
     <ScrollManagers section={section} onSectionChange={setSection} />
     <Scroll>
     <Exprs section={section} menuOpened={menuOpened}/>
        </Scroll>
    
     </ScrollControls> 

          <Environment preset="sunset" background />
      </Canvas>

      </MotionConfig>
    </>
  );
}
export default Appos;