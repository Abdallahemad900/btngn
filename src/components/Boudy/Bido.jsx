
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

export function Body(props) {

  const {animation} = props;
  const { headFollow, cursorFollow } = useControls({
    headFollow: false,
    cursorFollow: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("/bod.glb");
 
 const {animations: walkAnm} =useFBX("anim/Gaming.fbx")
 const {animations: typing} =useFBX("anim/Typing.fbx")
 const {animations: fall} =useFBX("anim/Falling Idle.fbx")

 walkAnm[0].name = "walks";
 typing[0].name = "Typing";
 fall[0].name = "Falling";

 const { actions } = useAnimations(
  [walkAnm[0], typing[0], fall[0]],
  group
);  
useFrame((state) => {
  if (headFollow) {
    group.current.getObjectByName("CC_Base_NeckTwist01").lookAt(state.camera.position);
  }
  if (cursorFollow) {
    const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
    group.current.getObjectByName("CC_Base_Spine01").lookAt(target);
  }
});

useEffect(() => {
  actions[animation].reset().fadeIn(0.5).play();
  return () => {
    actions[animation].reset().fadeOut(0.5);
  };
}, [animation]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group >
      <group name="Scene">
        <group name="idle" scale={0.01}>
          <skinnedMesh
            name="CC3_Base_Plus"
            geometry={nodes.CC3_Base_Plus.geometry}
            material={materials.remesh_8_combined_Bake}
            skeleton={nodes.CC3_Base_Plus.skeleton}
            morphTargetDictionary={nodes.CC3_Base_Plus.morphTargetDictionary}
            morphTargetInfluences={nodes.CC3_Base_Plus.morphTargetInfluences}
          />
          <primitive object={nodes.RL_BoneRoot} />
        </group>
      </group>
      </group>

    </group>
  );
}

useGLTF.preload("/bod.glb");
