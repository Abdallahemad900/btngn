import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useControls, button } from 'leva'; // Import Leva
import { Canvas } from '@react-three/fiber';

export function Womenso(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/womens.glb')
  const { actions } = useAnimations(animations, group);
  const { playAnimation } = useControls('Animation Control', {
    PlayAnimation: button(() => {
      // Play the desired animation when the button is clicked
      actions.walk.play(); // Change 'walk' to the animation you want to play
    }),
  });

  useEffect(() => {
    // Optionally, you can play the animation immediately upon loading
    if (playAnimation) {
      actions.walk.play(); // Change 'walk' to the animation you want to play
    }
  }, [actions.walk, playAnimation]); // Listen for the 'walk' animation and 'playAnimation'


  // const [playAnimation, setPlayAnimation] = useState(true);
  // const playFirstAnimation = () => {
  //   actions.walk.play();
  // };
  // const stopAnimation = () => {
  //   actions.walk.stop();
  // };
  // useEffect(() => {
  //   if (playAnimation) {
  //     playFirstAnimation();
  //   } else {
  //     stopAnimation();
  //   }
  // }, [playAnimation]);
  // useControls('Animation Control', {
  //   PlayAnimation: {
  //     value: playAnimation,
  //     onChange: (value) => setPlayAnimation(value),
  //   },
  // });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="walk" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh 
          receiveShadow castShadow
          name="Mesh"
           geometry={nodes.Mesh.geometry}
            material={materials.SpacePirate_M}
             skeleton={nodes.Mesh.skeleton} />
        </group>
        <group name="run" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <group name="idle" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/womens.glb')
