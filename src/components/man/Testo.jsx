import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useControls } from 'leva'; // Import Leva
import { Canvas } from '@react-three/fiber';

export function Men(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/testo.glb');
  const { actions } = useAnimations(animations, group);

  // Leva control for animation
  const { playAnimation, animationName } = useControls('Animation Control', {
    playAnimation: false,
    animationName: { value: 'walk', options: ['walk', 'idle'] },
  });

  useEffect(() => {
    if (playAnimation) {
      actions[animationName].play();
    } else {
      Object.values(actions).forEach((action) => action.stop());
    }
  }, [playAnimation, animationName, actions]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="walk" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh
              name="Mesh"
              geometry={nodes.Mesh.geometry}
              material={materials.Ch06_body}
              skeleton={nodes.Mesh.skeleton}
            />
            <skinnedMesh
              name="Mesh_1"
              geometry={nodes.Mesh_1.geometry}
              material={materials.Ch06_eyelashes}
              skeleton={nodes.Mesh_1.skeleton}
            />
            <skinnedMesh
              name="Mesh_2"
              geometry={nodes.Mesh_2.geometry}
              material={materials.Ch06_body1}
              skeleton={nodes.Mesh_2.skeleton}
            />
          </group>
        </group>
        <group name="idle" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh
              name="Mesh"
              geometry={nodes.Mesh.geometry}
              material={materials.Ch06_body}
              skeleton={nodes.Mesh.skeleton}
            />
            <skinnedMesh
              name="Mesh_1"
              geometry={nodes.Mesh_1.geometry}
              material={materials.Ch06_eyelashes}
              skeleton={nodes.Mesh_1.skeleton}
            />
            <skinnedMesh
              name="Mesh_2"
              geometry={nodes.Mesh_2.geometry}
              material={materials.Ch06_body1}
              skeleton={nodes.Mesh_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/testo.glb');
