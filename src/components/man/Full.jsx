import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useControls, button } from 'leva'; // Import Leva
import { Canvas } from '@react-three/fiber';

export function Fuk(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('full.glb');
  const { actions } = useAnimations(animations, group);
  let currentAnimation = null;
  // Function to play an animation and stop the previous one
  const playAnimation = (animationName) => {
    if (currentAnimation) {
      currentAnimation.stop();
    }
    currentAnimation = actions[animationName];
    currentAnimation.play();
  };

  // Leva controls for animations
  const { playAnimationWalk, playAnimationIdle, playAnimationCC } = useControls('Animation Control', {
    playAnimationWalk: button(() => playAnimation('walk')),
    playAnimationIdle: button(() => playAnimation('idle')),
    playAnimationCC: button(() => playAnimation('cc')),
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="idle" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch06_body} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch06_eyelashes} skeleton={nodes.Mesh_1.skeleton} />
            <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Ch06_body1} skeleton={nodes.Mesh_2.skeleton} />
          </group>
        </group>
        <group name="walk" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch06_body} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch06_eyelashes} skeleton={nodes.Mesh_1.skeleton} />
            <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Ch06_body1} skeleton={nodes.Mesh_2.skeleton} />
          </group>
        </group>
        <group name="cc" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch06_body} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch06_eyelashes} skeleton={nodes.Mesh_1.skeleton} />
            <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Ch06_body1} skeleton={nodes.Mesh_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/full.glb')
