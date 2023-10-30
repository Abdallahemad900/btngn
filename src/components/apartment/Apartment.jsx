
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apart(props) {
  const { nodes, materials } = useGLTF('/Apartment.glb')
   const groupRef = useRef();

  return (
    <group ref={groupRef}  {...props} dispose={null}>
      <group position={[6.61, 0, -6.109]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Wall_Mesh001.geometry} material={materials['White Wall Paint']} />
      </group>
      <group position={[6.61, 0, 3.572]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[1.868, 1.016, 0]}>
          <mesh geometry={nodes.Hole007.geometry} material={nodes.Hole007.material} position={[0, 0, 0.025]} />
        </group>
        <mesh geometry={nodes.Wall_Mesh002.geometry} material={materials['White Wall Paint']} />
      </group>
      <mesh geometry={nodes.Wall_Mesh003.geometry} material={materials['White Wall Paint']} position={[0.694, 0, 3.572]} rotation={[0, Math.PI / 2, 0]} />
      <group position={[0.694, 0, 0.377]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[0.653, 0, 0]}>
          <mesh geometry={nodes.Door_Jamb001.geometry} material={materials['Door Window Frame']} position={[0.003, 0, 0]} />
          <mesh geometry={nodes.Hole001.geometry} material={nodes.Hole001.material} position={[0, -0.025, 0.025]} />
          <group position={[0.832, 0, -0.152]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Door_Handle.geometry} material={materials['Door Window Hardware']} position={[0.686, 0.914, 0]} />
            <mesh geometry={nodes.Door_Panel_1.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Door_Panel_2.geometry} material={materials['Autumn Leaves']} />
          </group>
          <group position={[0.083, 0, -0.152]} rotation={[Math.PI, 0, Math.PI]}>
            <group position={[0.083, 0, -0.152]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.Door_Panel001_1.geometry} material={materials['Door Window Frame']} />
              <mesh geometry={nodes.Door_Panel001_2.geometry} material={materials['Door Window Frame']} />
            </group>
            <mesh geometry={nodes.Door_Handle001.geometry} material={materials['Door Window Hardware']} position={[0.019, 0.914, -0.152]} rotation={[0, 0, -Math.PI]} scale={-1} />
          </group>
          <mesh geometry={nodes.Door_Frame.geometry} material={materials['Door Window Frame']} />
        </group>
        <mesh geometry={nodes.Wall_Mesh004.geometry} material={materials['White Wall Paint']} />
      </group>
      <mesh geometry={nodes.Wall_Mesh005.geometry} material={materials['White Wall Paint']} position={[-1.498, 0, 0.377]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Wall_Mesh006.geometry} material={materials['White Wall Paint']} position={[-1.498, 0, 1.349]} rotation={[Math.PI, 0, Math.PI]} />
      <group position={[-5.95, 0, 1.349]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[2.428, 1.016, 0]}>
          <mesh geometry={nodes.Hole009.geometry} material={nodes.Hole009.material} position={[0, 0, 0.025]} />
          <group position={[0.076, 0.076, 0]}>
            <mesh geometry={nodes.Glass002.geometry} material={materials['Door Window Glass']} position={[0, 0, -0.076]} />
          </group>
          <mesh geometry={nodes.Window_Frame004.geometry} material={materials['Door Window Frame']} />
        </group>
        <mesh geometry={nodes.Wall_Mesh007.geometry} material={materials['White Wall Paint']} />
      </group>
      <mesh geometry={nodes.Wall_Mesh008.geometry} material={materials['White Wall Paint']} position={[-5.95, 0, -4.784]} />
      <mesh geometry={nodes.Wall_Mesh009.geometry} material={materials['White Wall Paint']} position={[-1.763, 0, -4.784]} rotation={[0, Math.PI / 2, 0]} />
      <group position={[-1.763, 0, -6.113]}>
        <group position={[0.807, 1.016, 0]}>
          <mesh geometry={nodes.Hole005.geometry} material={nodes.Hole005.material} position={[0, 0, 0.025]} />
          <group position={[0.076, 0.076, 0]}>
            <mesh geometry={nodes.Glass.geometry} material={materials['Door Window Glass']} position={[0, 0, -0.076]} />
          </group>
          <mesh geometry={nodes.Window_Frame001.geometry} material={materials['Door Window Frame']} />
        </group>
        <mesh geometry={nodes.Wall_Mesh010.geometry} material={materials['White Wall Paint']} />
      </group>
      <mesh geometry={nodes.Wall_Mesh016.geometry} material={materials['White Wall Paint']} position={[0.884, 0, -1.955]} rotation={[Math.PI, 0, Math.PI]} />
      <group position={[-1.646, 0, -1.955]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Wall_Mesh017.geometry} material={materials['White Wall Paint']} />
      </group>
      <group position={[0.846, 0, -6.113]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[2.855, 0, 0]}>
          <mesh geometry={nodes.Door_Jamb002.geometry} material={materials['Door Window Frame']} position={[0.003, 0, 0]} />
          <mesh geometry={nodes.Hole003.geometry} material={nodes.Hole003.material} position={[0, -0.025, 0.025]} />
          <group position={[0.832, 0, -0.152]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Door_Handle002.geometry} material={materials['Door Window Hardware']} position={[0.686, 0.914, 0]} />
            <mesh geometry={nodes.Door_Panel002_1.geometry} material={materials['HG Dark Grey Melamine']} />
            <mesh geometry={nodes.Door_Panel002_2.geometry} material={materials['HG Dark Grey Melamine']} />
          </group>
          <group position={[0.083, 0, -0.152]} rotation={[Math.PI, 0, Math.PI]}>
            <group position={[0.083, 0, -0.152]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.Door_Panel003_1.geometry} material={materials['Door Window Frame']} />
              <mesh geometry={nodes.Door_Panel003_2.geometry} material={materials['Door Window Frame']} />
            </group>
            <mesh geometry={nodes.Door_Handle003.geometry} material={materials['Door Window Hardware']} position={[0.019, 0.914, -0.152]} rotation={[0, 0, -Math.PI]} scale={-1} />
          </group>
          <mesh geometry={nodes.Door_Frame002.geometry} material={materials['Door Window Frame']} />
        </group>
        <mesh geometry={nodes.Wall_Mesh019.geometry} material={materials['White Wall Paint']} />
      </group>
      <group position={[1.169, 0, -5.717]}>
        <group position={[0.019, 1.753, 0]}>
          <mesh geometry={nodes.Part003_1.geometry} material={materials['White Melamine']} />
          <mesh geometry={nodes.Part003_2.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part003_3.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part003_4.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part003_5.geometry} material={materials['Particle Board']} />
          <mesh geometry={nodes.Part003_6.geometry} material={materials['Particle Board']} />
        </group>
        <group position={[0.019, 1.772, 0.635]}>
          <group position={[-0.017, -0.019, 0.003]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <mesh geometry={nodes['Pull_8in_(203mm)_Bar'].geometry} material={materials['Polished Chrome']} position={[0.138, 0.019, 0.422]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Part004_1.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part004_2.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part004_3.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part004_4.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part004_5.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part004_6.geometry} material={materials['Autumn Leaves']} />
          </group>
          <group position={[0.932, -0.019, 0.003]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <mesh geometry={nodes['Pull_8in_(203mm)_Bar001'].geometry} material={materials['Polished Chrome']} position={[0.138, 0.019, -0.422]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Part005_1.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part005_2.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part005_3.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part005_4.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part005_5.geometry} material={materials['Autumn Leaves']} />
            <mesh geometry={nodes.Part005_6.geometry} material={materials['Autumn Leaves']} />
          </group>
          <group position={[0.932, 0.36, 0.003]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
            <group position={[0.017, -0.003, 0.017]}>
              <mesh geometry={nodes.Part006_1.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part006_2.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part006_3.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part006_4.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part006_5.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part006_6.geometry} material={materials['Autumn Leaves']} />
            </group>
            <mesh geometry={nodes['Pull_8in_(203mm)_Bar002'].geometry} material={materials['Polished Chrome']} position={[0.017, 0.016, 0.017]} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-0.017, -0.019, 0.003]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <group position={[0.019, -0.003, 0.017]}>
              <mesh geometry={nodes.Part007_1.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part007_2.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part007_3.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part007_4.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part007_5.geometry} material={materials['Autumn Leaves']} />
              <mesh geometry={nodes.Part007_6.geometry} material={materials['Autumn Leaves']} />
            </group>
            <mesh geometry={nodes['Pull_8in_(203mm)_Bar003'].geometry} material={materials['Polished Chrome']} position={[0.019, 0.016, 0.017]} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <mesh geometry={nodes.Refrigerator_Generic_Refrigerator.geometry} material={materials['Polished Chrome']} position={[0.019, 0, 0.025]} />
        <group rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Part_1.geometry} material={materials['White Melamine']} />
          <mesh geometry={nodes.Part_2.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part_3.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part_4.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part_5.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part_6.geometry} material={materials['Autumn Leaves']} />
        </group>
        <group position={[0.952, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Part001_1.geometry} material={materials['White Melamine']} />
          <mesh geometry={nodes.Part001_2.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part001_3.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part001_4.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part001_5.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part001_6.geometry} material={materials['Autumn Leaves']} />
        </group>
        <group position={[0.019, 2.134, 0]}>
          <mesh geometry={nodes.Part002_1.geometry} material={materials['White Melamine']} />
          <mesh geometry={nodes.Part002_2.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part002_3.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part002_4.geometry} material={materials['Autumn Leaves']} />
          <mesh geometry={nodes.Part002_5.geometry} material={materials['Particle Board']} />
          <mesh geometry={nodes.Part002_6.geometry} material={materials['Particle Board']} />
        </group>
      </group>
      <group position={[-3.63, 0.722, -1.509]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials.galicho} position={[0, 0.005, 0]} />
        <mesh geometry={nodes.Plane008.geometry} material={materials.galicho} position={[0, 0.005, 0]} />
        <mesh geometry={nodes.Plane011.geometry} material={materials.galicho} position={[0, -0.554, 0]} scale={1.161} />
      </group>
      <group position={[3.367, 0, -2.419]} scale={1.236}>
        <group position={[0.001, 0, 0.294]}>
          <mesh geometry={nodes.Cube010_1.geometry} material={materials.Leather} />
          <mesh geometry={nodes.Cube010_2.geometry} material={materials['Metal.001']} />
        </group>
        <group position={[-0.504, 0, 0.001]}>
          <mesh geometry={nodes.Cube014.geometry} material={materials.Leather} />
          <mesh geometry={nodes.Cube014_1.geometry} material={materials['Metal.001']} />
        </group>
        <group position={[-0.001, 0, -0.302]}>
          <mesh geometry={nodes.Cube015.geometry} material={materials.Leather} />
          <mesh geometry={nodes.Cube015_1.geometry} material={materials['Metal.001']} />
        </group>
        <group position={[0.504, 0, -0.001]}>
          <mesh geometry={nodes.Cube016.geometry} material={materials.Leather} />
          <mesh geometry={nodes.Cube016_1.geometry} material={materials['Metal.001']} />
        </group>
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Metal.001']} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Cube009_3.geometry} material={materials['Glass.Bottom']} />
      </group>
      <group position={[3.905, 0.078, 1.621]} scale={0.79}>
        <mesh geometry={nodes.Blanket.geometry} material={materials.FabricUpholsteryPyramidsPattern001_4K} position={[-0.352, 0.61, -0.178]} scale={1.808} />
        <group position={[0.265, 0.615, -0.109]} scale={1.808}>
          <mesh geometry={nodes.Cylinder015.geometry} material={materials.Wood003} />
          <mesh geometry={nodes.Cylinder015_1.geometry} material={materials.Rope001} />
          <mesh geometry={nodes.Cylinder015_2.geometry} material={materials.candleMiddleBlue} />
          <mesh geometry={nodes.Cylinder015_3.geometry} material={materials.candleLightBlue} />
          <mesh geometry={nodes.Cylinder015_4.geometry} material={materials.candlePetrol} />
        </group>
        <mesh geometry={nodes.Couchtisch_2LG.geometry} material={materials.Plastic008_pastelBlue} scale={1.808} />
      </group>
      <group position={[4.57, 0, 1.589]} rotation={[Math.PI, -1.57, Math.PI]}>
        <group position={[-1.192, 0.214, 1.89]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh geometry={nodes.Mesh017.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh017_1.geometry} material={materials['fabric 2']} />
          <mesh geometry={nodes.Mesh017_2.geometry} material={materials.black} />
        </group>
        <group position={[-1.192, 0.214, 0.979]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh geometry={nodes.Mesh049.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh049_1.geometry} material={materials.black} />
        </group>
        <group position={[-1.192, 0.214, -0.081]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh geometry={nodes.Mesh033.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh033_1.geometry} material={materials.black} />
        </group>
        <group position={[-1.745, 0.271, -0.084]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh003.geometry} material={materials.black} />
          <mesh geometry={nodes.Mesh003_1.geometry} material={materials.brown} />
        </group>
        <group position={[-1.191, 0.214, -1.128]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh053.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh053_1.geometry} material={materials['fabric 2']} />
          <mesh geometry={nodes.Mesh053_2.geometry} material={materials.black} />
        </group>
        <group position={[-0.136, 0.214, -1.128]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Mesh046.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh046_1.geometry} material={materials.black} />
        </group>
        <group position={[1.07, 0.215, -0.981]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Mesh057.geometry} material={materials.fabric} />
          <mesh geometry={nodes.Mesh057_1.geometry} material={materials.black} />
          <mesh geometry={nodes.Mesh057_2.geometry} material={materials.brown} />
        </group>
        <group position={[1.768, 0.185, -0.967]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh geometry={nodes.Mesh009.geometry} material={materials.black} />
          <mesh geometry={nodes.Mesh009_1.geometry} material={materials.brown} />
          <mesh geometry={nodes.Cylinder.geometry} material={materials.Material} position={[-0.111, -0.365, 0.145]} rotation={[-Math.PI / 2, 0.732, 0]} scale={0.827} />
          <mesh geometry={nodes.Cylinder001.geometry} material={materials.Material} position={[0.026, 0.131, 0.126]} rotation={[Math.PI / 2, -0.85, 2.404]} />
          <mesh geometry={nodes.Cylinder002.geometry} material={materials.Material} position={[-0.117, -0.504, 0.126]} rotation={[-Math.PI / 2, 0.626, -0.738]} scale={0.683} />
        </group>
      </group>
      <group position={[3.782, 0.015, 1.837]} rotation={[Math.PI, 0, Math.PI]} scale={2.802}>
        <mesh geometry={nodes.Plane012.geometry} material={materials['Material.001']} position={[0, 0.001, 0]} />
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.001']} position={[0, 0.001, 0]} scale={0.998} />
      </group>
      <group position={[6.225, 0, -3.898]} rotation={[0, -1.552, 0]} scale={[1.717, 1, 1]}>
        <mesh geometry={nodes.Circle.geometry} material={materials.Preto_btn} position={[-0.142, 0.922, 0.289]} />
        <group position={[0, 0.842, 0.344]}>
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Metal_escovado.001']} />
          <mesh geometry={nodes.Circle001_3.geometry} material={materials.Preto_brilho} />
        </group>
        <mesh geometry={nodes.Circle002.geometry} material={materials.Btn} position={[-0.187, 0.909, 0.306]} />
        <mesh geometry={nodes.Circle012.geometry} material={materials['Material.002']} position={[-0.22, 0, -0.259]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Vidro_frente.001']} position={[0, 0.609, 0.319]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials.Metal_escovado} position={[0, 0.884, 0]} />
        <group position={[0, 0, -0.001]}>
          <mesh geometry={nodes.Cube018.geometry} material={materials.Metal_preto} />
          <mesh geometry={nodes.Cube018_1.geometry} material={materials.Metal_preto} />
          <mesh geometry={nodes.Cube018_2.geometry} material={materials.Metal_preto} />
          <mesh geometry={nodes.Cube018_3.geometry} material={materials.Metal_preto} />
        </group>
        <mesh geometry={nodes.Cube007.geometry} material={materials.Vidro_frente} position={[0, 0.601, 0.324]} />
        <mesh geometry={nodes.Cube008.geometry} material={materials.Preto_fosco} position={[0, 0.601, 0.324]} />
        <mesh geometry={nodes.Cube009.geometry} material={materials.Metal_preto} position={[0.004, 0.563, -0.026]} />
        <mesh geometry={nodes.Cube010.geometry} material={materials.Metal_escovado} position={[0, 0.601, 0.324]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials.Preto_btn} position={[-0.22, 0.016, 0.28]} />
        <mesh geometry={nodes.NurbsPath001.geometry} material={materials['Material.012']} position={[-0.026, 0.546, -0.067]} />
        <mesh geometry={nodes.NurbsPath003.geometry} material={materials['Material.012']} position={[-0.026, 0.45, -0.067]} />
        <group position={[0.127, 0.915, -0.164]}>
          <mesh geometry={nodes.Plane059.geometry} material={materials.Preto_brilho} />
          <mesh geometry={nodes.Plane059_1.geometry} material={materials.Cromo_boca} />
        </group>
        <group position={[-0.126, 0.915, -0.164]}>
          <mesh geometry={nodes.Plane060.geometry} material={materials.Preto_brilho} />
          <mesh geometry={nodes.Plane060_1.geometry} material={materials.Cromo_boca} />
        </group>
        <group position={[0.127, 0.915, 0.095]}>
          <mesh geometry={nodes.Plane061.geometry} material={materials.Preto_brilho} />
          <mesh geometry={nodes.Plane061_1.geometry} material={materials.Cromo_boca} />
        </group>
        <group position={[-0.126, 0.915, 0.095]}>
          <mesh geometry={nodes.Plane062.geometry} material={materials.Preto_brilho} />
          <mesh geometry={nodes.Plane062_1.geometry} material={materials.Cromo_boca} />
        </group>
        <mesh geometry={nodes.Plane018.geometry} material={materials['Preto_brilho.001']} position={[-0.127, 0.897, 0.096]} />
        <mesh geometry={nodes.Plane019.geometry} material={materials.Vidro_topo} position={[-0.004, 1.186, -0.323]} rotation={[-1.599, 0, 0]} />
        <mesh geometry={nodes.Plane020.geometry} material={materials.Preto_btn} position={[-0.258, 0.912, -0.321]} />
        <mesh geometry={nodes.Cube020.geometry} material={materials.Branco_eletro} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials.Preto_fosco} />
      </group>
      <mesh geometry={nodes.Wall_Mesh022.geometry} material={materials['White Wall Paint']} position={[0.651, 0, 3.65]} />
      <group position={[-0.592, 0.061, -5.651]} rotation={[3.084, 1.536, -3.142]} scale={-1.28}>
        <mesh geometry={nodes.Cube.geometry} material={materials['SINKS.001']} position={[0.215, -0.336, 0]} rotation={[-Math.PI, 0, 0]} scale={-0.925}>
          <mesh geometry={nodes.Circle007.geometry} material={materials['SINKS.001']} position={[0.316, 0.169, 0.204]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Circle008.geometry} material={materials.steel} position={[0.376, -0.486, 0]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Circle022.geometry} material={materials.gold} position={[0.099, -0.426, 0.384]} rotation={[Math.PI, 0, Math.PI / 2]}>
            <group position={[-0.017, 0, 0.033]} rotation={[0, 0, -Math.PI]}>
              <mesh geometry={nodes.Circle023_1.geometry} material={materials.napkin} />
              <mesh geometry={nodes.Circle023_2.geometry} material={materials['card board']} />
            </group>
          </mesh>
          <mesh geometry={nodes.Cube005.geometry} material={materials['SINKS.001']} position={[0, 0.003, 0]} />
        </mesh>
      </group>
      <group position={[3.201, 0.018, 3.23]} rotation={[Math.PI, 0, Math.PI]} scale={1.4}>
        <group position={[0, 0.363, -0.024]}>
          <group position={[0, 0.412, 0]}>
            <mesh geometry={nodes.TV_1.geometry} material={materials.frame} />
            <mesh geometry={nodes.TV_2.geometry} material={materials['Screen (tv)']} />
            <mesh geometry={nodes.tv_legs.geometry} material={materials.frame} position={[-0.451, -0.412, -0.017]} />
          </group>
        </group>
        <group position={[-0.7, 0.237, 0.03]} rotation={[-Math.PI / 2, 0, 1.817]}>
          <mesh geometry={nodes.book_cover005_1.geometry} material={materials['book_cover.005']} />
          <mesh geometry={nodes.book_cover005_2.geometry} material={materials.book_paper} />
          <mesh geometry={nodes.book_inside005.geometry} material={materials.book_paper} />
          <mesh geometry={nodes.book_inside006.geometry} material={materials.book_paper} position={[0, 0, 0.024]} rotation={[0, 0, -0.134]} />
        </group>
        <group position={[-0.7, 0.261, 0.03]} rotation={[-Math.PI / 2, 0, 1.683]}>
          <mesh geometry={nodes.book_cover006_1.geometry} material={materials['book_cover.006']} />
          <mesh geometry={nodes.book_cover006_2.geometry} material={materials.book_paper} />
        </group>
        <group position={[0.667, 0.375, 0.011]} rotation={[-Math.PI / 2, 0, 2.527]}>
          <mesh geometry={nodes.book_cover007_1.geometry} material={materials['book_cover.007']} />
          <mesh geometry={nodes.book_cover007_2.geometry} material={materials.book_paper} />
          <mesh geometry={nodes.book_inside007.geometry} material={materials.book_paper} position={[0, 0, 0.001]} />
        </group>
        <mesh geometry={nodes.Cabinet_cover.geometry} material={materials['wood (Oak Matt Antracite Gray)']} position={[0, 0.087, -0.005]}>
          <mesh geometry={nodes.Cabinet1.geometry} material={materials.ceramic} position={[-0.9, 0.01, -0.184]} />
          <mesh geometry={nodes.Cabinet1_Door.geometry} material={materials.ceramic} position={[-0.6, 0.086, 0.176]} />
          <mesh geometry={nodes.Cabinet2.geometry} material={materials.ceramic} position={[-0.3, 0.01, -0.185]} />
          <mesh geometry={nodes.Cabinet3.geometry} material={materials.ceramic} position={[0.3, 0.01, -0.185]} />
          <mesh geometry={nodes.legs003.geometry} material={materials['wood (Oak Matt Antracite Gray)']} position={[-0.762, -0.032, -0.139]} rotation={[0.155, 0, -0.235]} scale={[0.014, 0.037, 0.014]} />
        </mesh>
      </group>
      <group position={[-0.501, 1.539, -6.087]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Plane071.geometry} material={materials['Mirror.001']} />
        <mesh geometry={nodes.Plane071_1.geometry} material={materials['MirrorGlow.001']} />
        <mesh geometry={nodes.Plane071_2.geometry} material={materials['MirrorIndicator.001']} />
      </group>
      <group position={[-1.211, 0.122, -2.935]} rotation={[-3.134, -0.001, -3.057]} scale={0.661}>
        <mesh geometry={nodes.Plane024.geometry} material={materials.MARBLE} scale={1.416}>
          <mesh geometry={nodes.Circle003.geometry} material={materials.handles} position={[-0.293, 0.738, -0.417]} />
          <mesh geometry={nodes.Circle005.geometry} material={materials.handles} position={[-0.293, 0.972, 0.49]} />
          <mesh geometry={nodes.Circle021.geometry} material={materials.MIRROR} position={[0.382, 1.543, -0.537]} rotation={[Math.PI, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Circle014.geometry} material={materials.emission} position={[0, -0.009, -0.991]} />
            <mesh geometry={nodes.Circle015.geometry} material={materials.emission} position={[-0.596, -0.009, -0.661]} />
            <mesh geometry={nodes.Circle016.geometry} material={materials.emission} position={[-0.794, -0.009, -0.848]} />
            <mesh geometry={nodes.Circle018.geometry} material={materials.MIRROR} position={[0, 0, -0.991]} />
            <mesh geometry={nodes.Circle019.geometry} material={materials.MIRROR} position={[-0.596, -0.009, -0.661]} />
            <mesh geometry={nodes.Circle020.geometry} material={materials.MIRROR} position={[-0.794, -0.009, -0.848]} />
          </mesh>
          <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[-0.138, 0.254, 0]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Plane021.geometry} material={materials['bottle holder']} position={[0.136, 1.206, 0]} rotation={[Math.PI, 0, Math.PI]}>
           
          </mesh>
          <mesh geometry={nodes.Plane022.geometry} material={materials.handles} position={[-0.302, 0.528, -0.417]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Plane023.geometry} material={materials.handles} position={[-0.302, 0.442, 0.602]} />
          <mesh geometry={nodes.Plane025.geometry} material={materials.handles} position={[-0.302, 0.971, 0.602]} />
         
          <mesh geometry={nodes.Torus001.geometry} material={materials.taps} position={[0.404, 1.294, -0.527]} rotation={[Math.PI / 2, 0, Math.PI]}>
            <mesh geometry={nodes.Torus.geometry} material={materials.taps} />
            <mesh geometry={nodes.Torus002.geometry} material={materials.taps} position={[0, 0, -0.001]} />
          </mesh>
          <mesh geometry={nodes.Towel.geometry} material={materials['towel fabric']} position={[-0.228, 1.104, 0.703]} rotation={[-Math.PI, 1.355, -Math.PI]} />
          <mesh geometry={nodes.Towel001.geometry} material={materials['towel fabric']} position={[-0.279, 1.104, 0.754]} rotation={[-Math.PI, 0.794, -Math.PI]} />
          <mesh geometry={nodes.Towel002.geometry} material={materials['towel fabric']} position={[-0.09, 1.101, -0.048]} rotation={[0, 1.315, 0]} />
          <mesh geometry={nodes.Towel003.geometry} material={materials['towel fabric']} position={[-0.299, 1.104, -0.738]} rotation={[Math.PI, -0.147, Math.PI]} />
          <mesh geometry={nodes.Towel004.geometry} material={materials['towel fabric']} position={[-0.31, 1.104, -0.81]} rotation={[-Math.PI, 0.415, -Math.PI]} />
          <mesh geometry={nodes.Towel005.geometry} material={materials['towel fabric']} position={[-0.365, 0.691, -0.132]} rotation={[0.477, -0.015, 3.133]} />
          <mesh geometry={nodes.Towel006.geometry} material={materials['towel fabric']} position={[-0.345, 0.697, 0.023]} rotation={[1.832, 0.666, 3.116]} />
          <mesh geometry={nodes.Towel007.geometry} material={materials['towel fabric']} position={[-0.018, 0.677, 0.122]} rotation={[0.509, 0.031, -0.039]} />
          <mesh geometry={nodes.Towel008.geometry} material={materials['towel fabric']} position={[-0.345, 0.698, 0.249]} rotation={[1.164, 0.666, 3.116]} />
          <mesh geometry={nodes.Towel009.geometry} material={materials['towel fabric']} position={[-0.018, 0.589, -0.199]} rotation={[0, 0.063, 0]} />
          <mesh geometry={nodes.Towel010.geometry} material={materials['towel fabric']} position={[-0.047, 0.589, -0.055]} rotation={[0, -0.562, 0]} />
          <mesh geometry={nodes.Towel011.geometry} material={materials['towel fabric']} position={[-0.345, 0.589, 0.096]} rotation={[-Math.PI, 0.562, -Math.PI]} />
          <mesh geometry={nodes.Towel012.geometry} material={materials['towel fabric']} position={[-0.345, 0.589, 0.237]} rotation={[Math.PI, 0, Math.PI]} />
        </mesh>
      </group>
      <mesh geometry={nodes.Bed_01.geometry} material={materials.Fabric03} position={[-3.739, 0, -2.721]} scale={1.291}>
        <mesh geometry={nodes.Mattress.geometry} material={materials.Fabric19} />
        <mesh geometry={nodes.Plane.geometry} material={materials.wood_fine_5} scale={[0.875, 1, 1.125]} />
        <mesh geometry={nodes.Plane001.geometry} material={materials.wood_fine_5} />
        <mesh geometry={nodes.Plane002.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Plane003.geometry} material={materials['Fabric03.001']} rotation={[-2.136, 0, 0]} scale={-1} />
        <mesh geometry={nodes.Plane004.geometry} material={materials.Fabric19} />
        <mesh geometry={nodes.Plane005.geometry} material={materials.Fabric19} rotation={[Math.PI / 4, 0, 0]} />
        <mesh geometry={nodes.Plane006.geometry} material={materials.Fabric19} rotation={[Math.PI / 4, 0, 0]} />
        <mesh geometry={nodes.Plane010.geometry} material={materials['Fabric03.001']} rotation={[1.006, 0, 0]} />
      </mesh>
      <group position={[3.668, 0, -5.13]} scale={0.46}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Simple Marble Procedural']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Sink} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials['RGB LEDS']} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials['Wood Black UA']} />
        <mesh geometry={nodes.Cube_6.geometry} material={materials['Tap chrome']} />
      </group>
      <group position={[6.212, 0, -2.519]} rotation={[0, -1.556, 0]} scale={1.556}>
        <mesh geometry={nodes.Fridge_midea_1.geometry} material={materials['Plastic black']} />
        <mesh geometry={nodes.Fridge_midea_2.geometry} material={materials['Plastic Grey']} />
        <mesh geometry={nodes.Fridge_midea_3.geometry} material={materials.Chrome} />
      </group>
    </group>
  )
}

useGLTF.preload('/Apartment.glb')
