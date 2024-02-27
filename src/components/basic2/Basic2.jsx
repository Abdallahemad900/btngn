import { Canvas } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'

import imgs from "../image/car1.png"
import imgs1 from "../image/car2.png"
import imgs2 from "../image/car3.png"

function Lights() {
  const ambientCtl = useControls('Ambient Light', {
    visible: false,
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
  })

  const directionalCtl = useControls('Directional Light', {
    visible: true,
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    castShadow: true,
  })

  const pointCtl = useControls('Point Light', {
    visible: false,
    position: {
      x: 2,
      y: 0,
      z: 0,
    },
    castShadow: true,
  })

  const spotCtl = useControls('Spot Light', {
    visible: false,
    position: {
      x: 3,
      y: 2.5,
      z: 1,
    },
    castShadow: true,
  })

  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        castShadow={directionalCtl.castShadow}
      />
      <pointLight
        visible={pointCtl.visible}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
        castShadow={pointCtl.castShadow}
      />
      <spotLight
        visible={spotCtl.visible}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
        castShadow={spotCtl.castShadow}
      />
    </>
  )
}

function Polyhedron(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.05 * delta
  })

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ref.current.material.wireframe = v
      },
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        ref.current.material.color = new THREE.Color(v)
      },
    },
  })

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}

function Floor() {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function Basic2() {
  const texture = useLoader(THREE.TextureLoader, imgs); // Adjust the path
  const texture2 = useLoader(THREE.TextureLoader, imgs1); // Adjust the path

  return (
    <Canvas shadows camera={{ position: [-1, 4, 2.5] }}>
      <Lights />
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={
          new THREE.MeshBasicMaterial({ color: 'yellow', map: texture })
        }
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial({ map: texture2 })}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <Floor />
      <OrbitControls target-y={1}  />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}




// import { Canvas } from '@react-three/fiber'

// import { useRef,useMemo } from 'react'
// import { useControls } from 'leva'
// import * as THREE from 'three'
// import { useFrame,useLoader } from '@react-three/fiber'
// import { Stats, OrbitControls, } from '@react-three/drei'

// import imgs from "../image/car1.png"
// import imgs1 from "../image/car2.png"
// import imgs2 from "../image/car3.png"

// function Lights() {
//     const ambientCtl = useControls('Ambient Light', {
//       visible: false,
//       intensity: {
//         value: 1.0,
//         min: 0,
//         max: 1.0,
//         step: 0.1,
//       },
//     })
  
//     const directionalCtl = useControls('Directional Light', {
//       visible: true,
//       position: {
//         x: 3.3,
//         y: 1.0,
//         z: 4.4,
//       },
//       castShadow: true,
//     })
  
//     const pointCtl = useControls('Point Light', {
//       visible: false,
//       position: {
//         x: 2,
//         y: 0,
//         z: 0,
//       },
//       castShadow: true,
//     })
  
//     const spotCtl = useControls('Spot Light', {
//       visible: false,
//       position: {
//         x: 3,
//         y: 2.5,
//         z: 1,
//       },
//       castShadow: true,
//     })
  
//     return (
//       <>
//         <ambientLight
//           visible={ambientCtl.visible}
//           intensity={ambientCtl.intensity}
//         />
//         <directionalLight
//           visible={directionalCtl.visible}
//           position={[
//             directionalCtl.position.x,
//             directionalCtl.position.y,
//             directionalCtl.position.z,
//           ]}
//           castShadow={directionalCtl.castShadow}
//         />
//         <pointLight
//           visible={pointCtl.visible}
//           position={[
//             pointCtl.position.x,
//             pointCtl.position.y,
//             pointCtl.position.z,
//           ]}
//           castShadow={pointCtl.castShadow}
//         />
//         <spotLight
//           visible={spotCtl.visible}
//           position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
//           castShadow={spotCtl.castShadow}
//         />
//       </>
//     )
//   }

// function Polyhedron(props) {
//     const ref = useRef()
  
//     useFrame((_, delta) => {
//       ref.current.rotation.x += 0.2 * delta
//       ref.current.rotation.y += 0.05 * delta
//     })
  
//     useControls(props.name, {
//       wireframe: {
//         value: false,
//         onChange: (v) => {
//           ref.current.material.wireframe = v
//         },
//       },
//       flatShading: {
//         value: true,
//         onChange: (v) => {
//           ref.current.material.flatShading = v
//           ref.current.material.needsUpdate = true
//         },
//       },
//       color: {
//         value: 'lime',
//         onChange: (v) => {
//           ref.current.material.color = new THREE.Color(v)
//         },
//       },
      
//     })
  
//     return (
//       <mesh {...props} ref={ref} castShadow receiveShadow>
//         <icosahedronGeometry args={[1, 1]} />
//       </mesh>
//     )
//   }

//   function Floor() {
//     return (
//       <mesh rotation-x={-Math.PI / 2} receiveShadow>
//         <circleGeometry args={[10]} />
//         <meshStandardMaterial />
//       </mesh>
//     )
//   }
// export default function Basic2() {
//     const texture = useLoader(THREE.TextureLoader, imgs); // Adjust the path
//     const texture2 = useLoader(THREE.TextureLoader, imgs1); // Adjust the path

    
//     return (
//         <Canvas shadows camera={{ position: [-1, 4, 2.5] }}>
//                   <Lights />
//           <directionalLight position={[1, 1, 1]} />
//           <Polyhedron
//             name="meshBasicMaterial"
//             position={[-3, 1, 0]}
//             material={
//                 new THREE.MeshBasicMaterial({ color: 'yellow', flatShading: true , map:texture })
//               }  />
//           <Polyhedron
//             name="meshNormalMaterial"
//             position={[-1, 1, 0]}
//             material={new THREE.MeshNormalMaterial({ flatShading: true })}
//           />
//           <Polyhedron
//             name="meshPhongMaterial"
//             position={[1, 1, 0]}
//             material={new THREE.MeshPhongMaterial({ flatShading: true, map:texture2 })}
//           />
//           <Polyhedron
//             name="meshStandardMaterial"
//             position={[3, 1, 0]}
//             material={new THREE.MeshStandardMaterial({ flatShading: true })}
//           />
//           <Floor/>
     
//           <OrbitControls target-y={1} autoRotate />
//           <axesHelper args={[5]} />
//           <gridHelper />
//           <Stats />
//         </Canvas>
//       )
// }