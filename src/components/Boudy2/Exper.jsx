import { Rooms } from "./Rooms";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useControls } from "leva";

import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Bodys } from "./Bidos";


export default function Exprs(props) {  
  const { viewport } = useThree();
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["gaming","Typing", "Falling"],
    },
  });

  const { section } = props;
  return (
    <>
    <OrbitControls/>
     <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Rooms srction={section} />
        
      </motion.group>

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <group scale={1} position={[1,1,12]}>
          <Bodys  animation={animation}/>
         
          {/* animation={section === 0 ? "gaming" : "Falling"}  */}
        </group>
      </motion.group>
    </>
  );
};
