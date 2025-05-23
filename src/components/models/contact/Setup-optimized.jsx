import React, { useMemo, useEffect, Suspense } from 'react'
import { useGLTF, Bounds, Loader, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Improved material optimization helper that preserves colors
function optimizeMaterial(originalMaterial) {
  // Create a new MeshStandardMaterial but preserve original properties
  const mat = new THREE.MeshStandardMaterial()
  
  // Copy important properties from original material
  if (originalMaterial.map) mat.map = originalMaterial.map
  if (originalMaterial.color) mat.color = originalMaterial.color.clone()
  if (originalMaterial.normalMap) mat.normalMap = originalMaterial.normalMap
  if (originalMaterial.roughnessMap) mat.roughnessMap = originalMaterial.roughnessMap
  if (originalMaterial.metalnessMap) mat.metalnessMap = originalMaterial.metalnessMap
  if (originalMaterial.emissiveMap) mat.emissiveMap = originalMaterial.emissiveMap
  if (originalMaterial.emissive) mat.emissive = originalMaterial.emissive.clone()
  
  // Apply optimizations
  mat.roughness = originalMaterial.roughness !== undefined ? originalMaterial.roughness : 0.8
  mat.metalness = originalMaterial.metalness !== undefined ? originalMaterial.metalness : 0.2
  mat.envMapIntensity = 0.5
  mat.aoMapIntensity = 0.5
  mat.dithering = false
  mat.precision = 'mediump'
  
  // Texture optimizations
  if (mat.map) mat.map.anisotropy = 4
  if (mat.normalMap) mat.normalMap.anisotropy = 4
  
  return mat
}

// Geometry optimization helper
function optimizeGeometry(geometry) {
  geometry.computeVertexNormals()
  return geometry
}

export const OfficeSetUp = React.memo(({ simplified = false }) => {
  const { nodes, materials } = useGLTF('/models/setup-optimized-transformed.glb')
  
  // Optimize and memoize geometries
  const optimizedGeometries = useMemo(() => {
    return {
      bureau: optimizeGeometry(nodes.bureau.geometry),
      Cube003_1: optimizeGeometry(nodes.Cube003_1.geometry),
      Cube003_2: optimizeGeometry(nodes.Cube003_2.geometry),
      Cube003_3: optimizeGeometry(nodes.Cube003_3.geometry),
      _Group10: optimizeGeometry(nodes._Group10.geometry),
      Lamp_Bulb: optimizeGeometry(nodes.Lamp_Bulb.geometry)
    }
  }, [nodes])

  // Optimize and memoize materials (now preserving original colors)
  const optimizedMaterials = useMemo(() => {
    return {
      PaletteMaterial001: optimizeMaterial(materials.PaletteMaterial001),
      PaletteMaterial003: optimizeMaterial(materials.PaletteMaterial003),
      PaletteMaterial004: optimizeMaterial(materials.PaletteMaterial004),
      PaletteMaterial005: optimizeMaterial(materials.PaletteMaterial005),
      lambert112SG: optimizeMaterial(materials.lambert112SG),
      PaletteMaterial002: optimizeMaterial(materials.PaletteMaterial002)
    }
  }, [materials])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      Object.values(optimizedGeometries).forEach(geometry => geometry.dispose())
      Object.values(optimizedMaterials).forEach(material => material.dispose())
    }
  }, [optimizedGeometries, optimizedMaterials])

  if (simplified) {
    return (
      <group>
        <mesh 
          geometry={optimizedGeometries.bureau} 
          material={optimizedMaterials.PaletteMaterial001}
        />
      </group>
    )
  }

  return (
    <group dispose={null}>
      <mesh 
        geometry={optimizedGeometries.bureau} 
        material={optimizedMaterials.PaletteMaterial001} 
        position={[0.235, 0, -1.557]}
        frustumCulled
      />
      <group position={[0.441, 0.553, 0.126]} rotation={[Math.PI, -0.537, Math.PI]} scale={[0.035, 0.02, 0.056]}>
        <mesh geometry={optimizedGeometries.Cube003_1} material={optimizedMaterials.PaletteMaterial003} />
        <mesh geometry={optimizedGeometries.Cube003_2} material={optimizedMaterials.PaletteMaterial004} />
        <mesh geometry={optimizedGeometries.Cube003_3} material={optimizedMaterials.PaletteMaterial005} />
      </group>
      <mesh 
        geometry={optimizedGeometries._Group10} 
        material={optimizedMaterials.lambert112SG} 
        position={[-0.108, 0.42, 0.835]} 
        rotation={[-Math.PI, -0.357, -Math.PI]} 
        scale={0.427}
      />
      <mesh 
        geometry={optimizedGeometries.Lamp_Bulb} 
        material={optimizedMaterials.PaletteMaterial002} 
        position={[-0.488, 0.698, -0.053]} 
        scale={0.642}
      />
    </group>
  )
})

// Preload with Draco compression
if (typeof window !== 'undefined') {
  useGLTF.preload('/models/setup-optimized-transformed.glb', {
    draco: true,
    decoderPath: 'https://www.gstatic.com/draco/versioned/decoders/1.5.5/'
  })
}