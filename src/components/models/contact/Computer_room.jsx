import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ComputerRoom(props) {
  const { nodes, materials } = useGLTF('/models/computer_room-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Box002_02_-_Default_0'].geometry} material={materials.PaletteMaterial001} position={[0.655, 0.14, 0.026]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={0.006} />
      <mesh geometry={nodes['Box002_Material_#83_0'].geometry} material={materials.Material_83} position={[0.655, 0.14, 0.026]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={0.006} />
      <mesh geometry={nodes['Cylinder012_Material_#26_0'].geometry} material={materials.Material_26} position={[0.806, 0.183, 0.079]} rotation={[0, -0.436, Math.PI / 2]} scale={[0.004, 0.004, 0.005]} />
      <mesh geometry={nodes['Box006_Material_#195_0'].geometry} material={materials.Material_195} position={[0.032, -0.042, 0.044]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.006, 0.003, 0.002]} />
      <mesh geometry={nodes['Cylinder019_Material_#263_0'].geometry} material={materials.Material_263} position={[-1.179, -0.804, -0.143]} rotation={[-Math.PI / 2, 0, 0]} scale={0.006} />
      {/* <mesh geometry={nodes['Plane001_Material_#413_0'].geometry} material={materials.Material_413} position={[0.035, -0.835, 0.852]} rotation={[-Math.PI / 2, 0, 0]} scale={0.004} /> */}
      {/* <mesh geometry={nodes['Plane002_Material_#264_0'].geometry} material={materials.Material_264} position={[0.027, 0.415, -0.543]} scale={0.004} /> */}
      {/* <mesh geometry={nodes['Plane002_Material_#333_0'].geometry} material={materials.Material_333} position={[0.027, 0.415, -0.543]} scale={0.004} /> */}
      {/* <mesh geometry={nodes['Plane003_18_-_Default_0'].geometry} material={materials.PaletteMaterial002} position={[1.442, 0.415, 0.863]} rotation={[0, -Math.PI / 2, 0]} scale={0.004} /> */}
      <mesh geometry={nodes['Box015_Material_#299_0'].geometry} material={materials.Material_299} position={[-0.87,0, 5.94]} rotation={[-Math.PI / 2, 0, 0]} scale={0.006} />
    </group>
  )
}

useGLTF.preload('/models/computer_room-transformed.glb')
