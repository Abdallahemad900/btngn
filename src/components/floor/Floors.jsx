import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import { Floar } from './Toweb'

export default function Floars() {
  return (
  
      <Canvas>
        <Suspense fallback={null}>
          <Floar />
          <OrbitControls/>
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
   
  )
}