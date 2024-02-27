
import { Canvas ,useFrame} from '@react-three/fiber'
import { easing } from "maath"
import { ContactShadows,
    Environment,
    OrbitControls,
    Scroll,
    ScrollControls,
    Sky,} from '@react-three/drei'
import { useRef ,useState} from 'react'
import * as THREE from 'three'
import { Body } from './Bido'
import { useControls } from "leva";
import { Room } from './room'
import { ScrollManager } from './ScrollManager'
import { MotionConfig } from 'framer-motion'
// import { framerMotionConfig } from "config";
import { motion } from "framer-motion";


export default function Exp( props){
  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-0 + state.mouse.x / -4, 0.8 + state.mouse.y / -4, 2.5], 0.2, delta)
    })
  }
    const { animation } = useControls({
        animation: {
          value: "Typing",
          options: ["gaming","Typing", "Falling"],
        },
      });

      // const [section, setSection] = useState(0);
      // const [menuOpened, setMenuOpened] = useState(false);
    
      // useEffect(() => {
      //   setMenuOpened(false);
      // }, [section]);

  return (
    <>

    {/* <MotionConfig   transition={{
          ...framerMotionConfig,
        }}> */}

    <Canvas shadows camera={{ position: [-1.8, 2, 5], fov: 40}}>
    <ScrollControls pages={4} damping={0.1}>
    <ambientLight intensity={0} />
    {/* <directionalLight position={[5, 5, 5]} intensity={1} castShadow color={'#9e69da'} /> */}
     {/* <Rig/> */}
      <OrbitControls />
      <Sky />
      {/* <ScrollManager section={section} /> */}
      <Environment preset="sunset" />

      <Scroll html>
        <h1 className="mt-5"> hiiiiiiiiiiii</h1>
            </Scroll>

      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />


      <Body animation={animation}  />  
<Room/>
      {/* {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )} */}

        <mesh scale={4.5} rotation-x={-Math.PI * 0.5} position={[0.1,0.1,0.6]}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      </ScrollControls>
      </Canvas>
      {/* </MotionConfig> */}
    </>
  )
}


