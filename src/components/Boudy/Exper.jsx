
import { Canvas } from '@react-three/fiber'
import {    ContactShadows,
    Environment,
    OrbitControls,
    Sky,} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { Body } from './Bido'
import { useControls } from "leva";

export default function Exp(){

    const { animation } = useControls({
        animation: {
          value: "Typing",
          options: ["walks","Typing", "Falling"],
        },
      });

  return (
    <>
    <Canvas>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
<Body animation={animation} />  
      {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
      </Canvas>
    </>
  )
}


