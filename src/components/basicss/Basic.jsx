import { useState,useRef, useEffect , useMemo } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls, TransformControls, useCursor,PointerLockControls } from '@react-three/drei'
import { useControls } from 'leva'
import {create} from 'zustand'
import "./basic.css"
import * as THREE from 'three'


const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }))

function Box(props) {
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)
    ,    new THREE.DodecahedronGeometry(0.785398),
  ],
    []
  )
  // useEffect(() => {
  //   console.log(ref.current.geometry.uuid)
  // })   
   const ref = useRef()
    const [rotate, setRotate] = useState(false)
    const [count, setCount] = useState(0);
  const setTarget = useStore((state) => state.setTarget)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)
  useFrame((_, delta) => {
    if (rotate) {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
      }
  })
  return (
    <mesh {...props}
      ref={ref}
       onClick={(e) => setTarget(e.object)} 
       onPointerOver={() => setHovered(true)} 
       onPointerOut={() => setHovered(false)}
       onPointerDown={() => {
        setRotate(!rotate);
        setCount((count + 1) % geometry.length);
      }}
      // scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      geometry={geometry[count]}
       >
      <boxGeometry />
      <meshNormalMaterial color={0x00ff00} wireframe />
      {/* <PointerLockControls /> */}

    </mesh>
  )
}

export default function Basics() {
  const { target, setTarget } = useStore()
  const { mode } = useControls({ mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] } })
  return (
    <Canvas dpr={[1, 2]} onPointerMissed={() => setTarget(null)}>
      <Box position={[2, 2, 0]} />
      <Box />
      {target && <TransformControls object={target} mode={mode} />}
      <OrbitControls makeDefault />
      <axesHelper args={[5]} />
      <gridHelper />

    </Canvas>
  )
}

