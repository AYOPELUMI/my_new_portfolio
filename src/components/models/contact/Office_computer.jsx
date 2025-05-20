import React from 'react'
import { useGLTF } from '@react-three/drei'

export function OfficeComputer(props) {
  const { nodes, materials } = useGLTF('/models/office_computer-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0353.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[3.949, -11.757, 76.464]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.414, 1, 1.702]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC03538.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[68.673, 26.944, 22.163]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.445, 0.504, 0.445]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1.geometry} material={materials.MaterialFBXASC032FBXASC0354_ncl1_1} position={[16.037, 50.997, -18.414]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.203, 0.243, 0.136]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0352.geometry} material={materials.MaterialFBXASC032FBXASC0352} position={[76.12, 26.409, -66.145]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.514, 0.514, 0.363]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354.geometry} material={materials.MaterialFBXASC032FBXASC0354} position={[-22.588, 88.167, 28.596]} rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]} scale={[0.261, 0.458, 0.458]} />
    </group>
  )
}

useGLTF.preload('/models/office_computer-transformed.glb')
