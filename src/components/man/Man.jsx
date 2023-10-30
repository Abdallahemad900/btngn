import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Men } from './Testo';
import { Womenso } from './Womens';
import { Fuk } from './Full';
import { useControls } from 'leva';

const Mans = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('women'); 

  useControls('Select Character', {
    Character: {
      value: selectedCharacter,
      options: ['men', 'women', 'fuk'], 
      onChange: (value) => setSelectedCharacter(value),
    },
  });

  return (
    <>
      <Canvas>
        <color attach="background" args={['#dbecfb']} />
        <fog attach="fog" args={['#dbecfb', 30, 40]} />
        <Suspense fallback={null}>
          <OrbitControls />
          {selectedCharacter === 'men' ? <Men position={[1, 0, 0]} /> : null}
          {selectedCharacter === 'women' ? <Womenso /> : null}
          {selectedCharacter === 'fuk' ? <Fuk /> : null} 
          <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow color={'#9e69da'} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Mans;
