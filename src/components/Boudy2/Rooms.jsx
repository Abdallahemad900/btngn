
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";
import { motion } from "framer-motion-3d";

export function Rooms(props) {
  const {section}= props;
  const { nodes, materials } = useGLTF("anim/GG.glb");
  return (
    <group  position={[2,0,0]} rotation={[0,3.1,0]} {...props} dispose={null}
   
    >
      <group name="chair"
      castShadow
      receiveShadow
        position={[1.736, 0.227, 0.105]}
        rotation={[Math.PI, -0.732, Math.PI]}
        scale={0.345}
      >
        <group
          position={[-1.049, 2.471, 0.283]}
          rotation={[0, -1.172, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[-0.781, 2.471, -0.963]}
          rotation={[-Math.PI, -0.75, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[0.487, 2.471, -1.148]}
          rotation={[Math.PI, 0.453, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[1.064, 2.471, 0.037]}
          rotation={[Math.PI, 1.119, -Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <group
          position={[0.08, 2.471, 0.905]}
          rotation={[0, 0.998, Math.PI / 2]}
          scale={0.122}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_2.geometry}
            material={materials.ShinyPlastic}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Plastic}
          position={[0.913, 3.713, -0.653]}
          rotation={[-0.039, -0.822, -0.029]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials.Plastic}
          position={[-0.168, 2.214, -0.072]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.Plastic}
          position={[-0.168, 1.22, -0.072]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Metallic}
          position={[-0.168, 0.549, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={0.57}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Plastic}
          position={[-0.168, 2.214, -0.072]}
          rotation={[0, -0.822, 0]}
          scale={0.166}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials.Plastic}
          position={[0.599, 1.502, 0.544]}
          rotation={[0, -0.551, 0]}
          scale={0.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Plastic}
          position={[-0.051, 0.738, -0.181]}
          rotation={[0, -0.822, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Plastic}
          position={[-0.321, 1.105, 0.07]}
          rotation={[-0.471, -0.764, -0.339]}
        />
        <group
          position={[-0.168, 2.214, -0.072]}
          rotation={[Math.PI / 2, 0, 0.822]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_2.geometry}
            material={materials["Leather.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_3.geometry}
            material={materials["Leather.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Belt}
          position={[-0.168, 2.214, -0.072]}
          rotation={[Math.PI / 2, 0, 0.822]}
          scale={0.996}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.Belt}
          position={[0.304, 2.214, 0.435]}
          rotation={[Math.PI / 2, 0, 0.822]}
          scale={0.996}
        />
        <group position={[-0.168, 2.214, -0.072]} rotation={[0, -0.822, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Plastic}
            position={[0, 0.051, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Plastic}
            position={[0, 0.038, 0.432]}
            scale={0.058}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.Plastic}
            position={[0.016, 0.581, 0.432]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["Metallic.001"]}
            position={[0.003, 1.595, -1.295]}
            rotation={[0, 0.023, 0]}
            scale={0.009}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.Plastic}
            position={[0.363, 1.275, -1.25]}
            rotation={[-0.196, 0.026, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.Plastic}
            position={[0.363, 1.275, -1.25]}
            rotation={[-0.196, 0.026, -0.02]}
            scale={0.977}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.Plastic}
            position={[-0.329, 1.272, -1.252]}
            rotation={[-0.196, 0.026, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.Plastic}
            position={[-0.329, 1.272, -1.252]}
            rotation={[-0.196, 0.026, -0.02]}
            scale={0.977}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle002.geometry}
            material={materials.Plastic}
            position={[0, 0.205, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.Belt}
            position={[0.304, 1.528, 0.025]}
            rotation={[Math.PI / 2, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Belt}
            position={[0.009, 1.646, -1.177]}
            rotation={[Math.PI / 2, 0, 0.051]}
            scale={0.03}
          />
        </group>
      </group>
      
      <group position={[0,-0.1,0]}>

      <group position={[1.945, 0, -0.98]} scale={1.553}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottom_cabinets_panel.geometry}
          material={materials.test}
          position={[0.484, 0.151, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cabinets.geometry}
          material={materials.test}
          position={[0.484, 0.381, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handles.geometry}
          material={materials.Metal}
          position={[0.483, 0.38, 0.386]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_cabinets_panel.geometry}
          material={materials.test}
          position={[0.301, 0.38, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Metal_frame.geometry}
          material={materials.Metal}
          position={[0.116, 0.385, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_cabinets_panel.geometry}
          material={materials.test}
          position={[0.667, 0.38, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_top.geometry}
          material={materials.test}
          position={[0.037, 0.782, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_cabinets_panel.geometry}
          material={materials.test}
          position={[0.484, 0.61, 0.005]}
        />
      </group>
      
      <group name="tv"
        position={[2.579, 1.233, -1.137]}
        rotation={[0, -0.362, 0]}
        scale={1.264}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials["metallic paint"]}
          position={[0, 0.014, -0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base002.geometry}
          material={materials.Borracha}
          position={[0, 0.063, -0.001]}
        />
        <group position={[0, 0.271, -0.108]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["Plástico fosco.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials["Plástico fosco.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt002.geometry}
          material={materials["Brushed Steel Procedural"]}
          position={[0.036, 0.185, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Borracha}
          position={[0, 0.001, -0.073]}
          rotation={[-0.014, 0, -Math.PI / 2]}
          scale={[0.198, 0.1, 0.153]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Housing.geometry}
          material={materials["metallic paint.logo"]}
          position={[0, 0.271, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_.geometry}
          material={materials["Material.004"]}
          position={[0.001, 0.109, 0.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.p2_jack.geometry}
          material={materials[" black"]}
          position={[-0.107, 0.191, 0.003]}
          rotation={[0.002, -0.019, -3.097]}
          scale={[0.972, 1, 0.972]}
        />
        <group position={[0.078, 0.194, -0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["Plástico fosco"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials["screen matte"]}
          position={[0, 0.271, -0.098]}
        />
        <group position={[0, 0.183, 0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["metallic paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials["metallic paint"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.suport.geometry}
          material={materials["alumínio desgastado"]}
          position={[0, 0.237, -0.3]}
        />
        <group position={[-0.066, 0.191, 0.003]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["Brushed nickel.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials["Brushed gold.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_2.geometry}
            material={materials["Black plastic PL.003"]}
          />
        </group>
        <group position={[-0.088, 0.191, 0.003]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials["Brushed nickel.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials["Brushed gold.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials["Black plastic PL.003"]}
          />
        </group>
      </group>
      
      <group name="lap"
        position={[1.620, 1.233, -0.9]}
        rotation={[0, 0.433, 0]}
        scale={0.72}
      >
        <group
          position={[-0.138, 0.072, 0.017]}
          rotation={[2.932, 0, 0]}
          scale={[0.255, 0.255, 0.291]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_2.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_3.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_4.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_5.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_6.geometry}
            material={
              materials[
                "Asus-ROG-Grey.fw_ac20fb77-c59f-4be7-b04d-a95551e21040_700x700"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_7.geometry}
            material={
              materials[
                "Asus-ROG-Grey.fw_ac20fb77-c59f-4be7-b04d-a95551e21040_700x7"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_8.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_9.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_10.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_11.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_12.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_13.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_14.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_15.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_16.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_17.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_18.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_19.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_20.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_21.geometry}
            material={materials["cdd02337ff0d04de754117b7117d53a5.w265.h279"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_22.geometry}
            material={materials.amd_ryzen_7_logo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_23.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_24.geometry}
            material={materials["Material.022"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_25.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_26.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_27.geometry}
            material={materials["Material.029"]}
          />
        </group>
      </group>

      <group name="mouse"
        position={[2.02, 1.233, -0.75]}
        rotation={[0, 0.422, 0]}
        scale={2.385}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack.geometry}
          material={materials["Material.037"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.025, 0.019, 0.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack001.geometry}
          material={materials["Material.042"]}
          position={[-0.011, 0.015, 0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack002.geometry}
          material={materials["Material.041"]}
          position={[-0.015, 0.011, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_1.geometry}
            material={materials["main body"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_2.geometry}
            material={materials["Material.035"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_3.geometry}
            material={materials["Material.039"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_4.geometry}
            material={materials["Material.040"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack004.geometry}
          material={materials["Material.037"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack005.geometry}
          material={materials["Material.038"]}
          position={[0.001, 0, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack007.geometry}
          material={materials["Material.037"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack008.geometry}
          material={materials["main body.001"]}
          position={[0.002, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack009.geometry}
          material={materials["main body"]}
          position={[0.001, 0.007, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack010.geometry}
          material={materials["Material.036"]}
          position={[-0.013, 0.014, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack011.geometry}
          material={materials["main body"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack012.geometry}
          material={materials["Material.030"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack013.geometry}
          material={materials["Material.030"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack014.geometry}
          material={materials["Material.033"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_1.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_2.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_3.geometry}
            material={materials["Material.032"]}
          />
        </group>
      </group>
      </group>
      
      <motion.group name="tree"
        position={[0.046, 0.12, -0.366]}
        rotation={[Math.PI, -0.1, Math.PI]}
        scale={[0,0,0]}
        animate={{
          scale:section === 0 ? 0.213 : 0.5,
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials.trunk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.leaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials.detail}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_3.geometry}
          material={materials.trunk2}
        />
      </motion.group>


       {/* <group position={[2.895, 1.832, -1.518]} rotation={[Math.PI / 2, 0, 0]}>
       
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book.geometry}
          material={materials["book.009"]}
          position={[-0.048, 0.124, -0.659]}
          rotation={[-Math.PI / 2, 0, -1.484]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book001.geometry}
          material={materials["book.003"]}
          position={[0.005, 0.115, -0.399]}
          rotation={[-Math.PI / 2, -0.385, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book002.geometry}
          material={materials["book.004"]}
          position={[0.006, 0.109, -0.384]}
          rotation={[-Math.PI / 2, -0.385, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book003.geometry}
          material={materials["book.011"]}
          position={[-0.002, 0.109, -0.305]}
          rotation={[-Math.PI / 2, -0.647, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book004.geometry}
          material={materials["book.006"]}
          position={[0.012, 0.111, -0.365]}
          rotation={[-Math.PI / 2, -0.385, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book005.geometry}
          material={materials.book}
          position={[0.004, 0.105, -0.336]}
          rotation={[-Math.PI / 2, -0.821, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book006.geometry}
          material={materials["book.005"]}
          position={[0.008, 0.106, -0.376]}
          rotation={[-Math.PI / 2, -0.385, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book007.geometry}
          material={materials["book.008"]}
          position={[0.011, 0.104, -0.35]}
          rotation={[-Math.PI / 2, -1.012, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book008.geometry}
          material={materials["book.010"]}
          position={[-0.001, 0.1, -0.321]}
          rotation={[-Math.PI / 2, -0.821, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book009.geometry}
          material={materials["book.007"]}
          position={[-0.003, 0.1, -0.355]}
          rotation={[-Math.PI / 2, -0.944, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book010.geometry}
          material={materials["book.001"]}
          position={[-0.016, 0.119, -0.682]}
          rotation={[-Math.PI / 2, 0, -1.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.book011.geometry}
          material={materials["book.002"]}
          position={[-0.075, 0.126, -0.664]}
          rotation={[-Math.PI / 2, 0, -1.484]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.box002.geometry}
          material={materials["box.001"]}
          position={[0, 0.113, -0.014]}
          rotation={[-Math.PI / 2, 0.104, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.box.geometry}
            material={materials["flowers wallpaper"]}
            position={[0, 0.041, 0]}
            rotation={[0, -0.192, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.box001.geometry}
              material={materials["blender wallpaper"]}
              position={[0, 0.048, 0]}
              rotation={[0, 0.051, 0]}
              scale={0.699}
            />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.casket.geometry}
          material={materials.casket_wood}
          position={[0.001, 0.116, -0.85]}
          rotation={[-1.571, 1.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lock.geometry}
          material={materials.metals}
          position={[-0.004, 0.179, -0.897]}
          rotation={[-1.571, 1.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelf.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[0, 0.11, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[0.11, 0.11, -0.172]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall001.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[-0.097, 0.11, -0.172]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall002.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[0, 0, -0.45]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall003.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[0, 0.207, -0.45]}
          rotation={[Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall004.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[-0.11, 0.11, -0.729]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_wall005.geometry}
          material={materials["wood (Oak Matt Antracite Gray)"]}
          position={[0.097, 0.11, -0.729]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        />
      </group> */}
    
      <mesh name="carpet"
        castShadow
        receiveShadow
        geometry={nodes.Raw_Loom_Rug.geometry}
        material={materials["Tapete material"]}
        position={[1.792, 0.215, -0.5]}
        scale={[5.562, 2.375, 2.375]}
      />
      
      <group position={[4, 0,-3]}
      rotation={[0,3.2,0]}
      >
        <group name="ground" position={[0.019, 0.12, -4.245]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Slab_1.geometry}
            
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Slab_2.geometry}
            material={materials.Concrete}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Slab_3.geometry}
            material={materials["Stucco white"]}
          />
        </group>
        
        <group position={[-0.15, 0, -2.385]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1.geometry}
            material={materials["PVC white"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2.geometry}
            material={materials["PVC white"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_3.geometry}
            material={materials.Aluminium}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_4.geometry}
            material={materials["Granite grey"]}
          />
          <group position={[-0.6, 1, -0.123]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel_1.geometry}
              material={materials["PVC white"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel_2.geometry}
              material={materials["PVC white"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel_3.geometry}
              material={materials.Inox}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel_4.geometry}
              material={materials.Caoutchouc}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_glass_1.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_glass_2.geometry}
              material={materials.Caoutchouc}
            />
          </group>
          <group position={[-0.6, 1.52, -0.063]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel001_1.geometry}
              material={materials["PVC white"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel001_2.geometry}
              material={materials["PVC white"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel001_3.geometry}
              material={materials.Inox}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Panel001_4.geometry}
              material={materials.Caoutchouc}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_glass001_1.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_glass001_2.geometry}
              material={materials.Caoutchouc}
            />
          </group>
        </group>

        <mesh name="wall"
  castShadow
  receiveShadow
  geometry={nodes.Wall_1.geometry}
  material={materials["Matt paint white"] }
/>

        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_2.geometry}
          material={materials.Concrete}
        />
      </group> 

    </group>
  );
}

useGLTF.preload("anim/GG.glb");