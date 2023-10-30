
import { Canvas } from '@react-three/fiber'
import {  OrbitControls} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { Bod } from './Avatar'

export default function Basicso(){
  return (
    <Canvas tonemapped={'false'}>
      <color attach="background" args={['#fff']} />
      <OrbitControls />
      <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow color={'#9e69da'} />
      <Bod />
    </Canvas>
  )
}


