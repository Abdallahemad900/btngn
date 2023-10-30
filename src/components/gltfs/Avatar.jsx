
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useControls, button } from 'leva'; // Import Leva
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";

export function Bod(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("fem.glb");
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
    playAnimationWalk: button(() => playAnimation('idle')),
    playAnimationIdle: button(() => playAnimation('walk')),
    playAnimationCC: button(() => playAnimation('hop')),
  });

useFrame((state)=>{
  group.current.getObjectByName("CC_Base_NeckTwist01").lookAt(state.camera.position);
})

  return (

    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="idle" scale={0.01}>
          <skinnedMesh
            name="CC3_Base_Plus"
            geometry={nodes.CC3_Base_Plus.geometry}
            material={materials.remesh_11_combined_Bake}
            skeleton={nodes.CC3_Base_Plus.skeleton}
            morphTargetDictionary={nodes.CC3_Base_Plus.morphTargetDictionary}
            morphTargetInfluences={nodes.CC3_Base_Plus.morphTargetInfluences}
          />
          <primitive object={nodes.RL_BoneRoot} />
        </group>
      </group>
    </group>

);
}

useGLTF.preload("/fem.glb");

