import React from 'react'
import { useGLTF } from '@react-three/drei'

export function OfficeSetUp(props) {
  const { nodes, materials } = useGLTF('/models/setup-optimized-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bureau.geometry} material={materials.PaletteMaterial001} position={[0.235, 0, -1.557]} />
      <group position={[0.441, 0.553, 0.126]} rotation={[Math.PI, -0.537, Math.PI]} scale={[0.035, 0.02, 0.056]}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.PaletteMaterial005} />
      </group>
      <mesh geometry={nodes._Group10.geometry} material={materials.lambert112SG} position={[-0.108, 0.42, 0.835]} rotation={[-Math.PI, -0.357, -Math.PI]} scale={0.427} />
      <mesh geometry={nodes.Lamp_Bulb.geometry} material={materials.PaletteMaterial002} position={[-0.488, 0.698, -0.053]} scale={0.642} />
    </group>
  )
}

useGLTF.preload('/models/setup-optimized-transformed.glb')
