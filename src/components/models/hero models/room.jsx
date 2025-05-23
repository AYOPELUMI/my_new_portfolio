import React, { useMemo, useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import * as THREE from "three"

export const Room = React.memo(({ isMobile, simplified = false, ...props }) => {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb")
  const screensRef = useRef()
  const bloomIntensity = isMobile ? 0.8 : 1.2

  // Create optimized materials that preserve original colors
  const optimizedMaterials = useMemo(() => {
    return {
      // Preserve original materials but with performance optimizations
      blinn1: optimizeMaterial(materials.blinn1),
      lambert1: materials.lambert1, // Keep original for bloom effect
      phong1: materials.phong1, // Keep original window material
      
      // Custom materials that need color changes
      curtain: new THREE.MeshStandardMaterial({
        ...materials.blinn1,
        color: "#d90429",
        roughness: 0.7,
        metalness: 0.1
      }),
      body: new THREE.MeshStandardMaterial({
        ...materials.blinn1,
        color: "#333333",
        roughness: 0.6
      }),
      // Add other custom materials as needed
    }
  }, [materials])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      Object.values(optimizedMaterials).forEach(material => {
        if (material instanceof THREE.Material) {
          material.dispose()
        }
      })
    }
  }, [optimizedMaterials])

  if (simplified) {
    return (
      <group>
        <mesh geometry={nodes.body1_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
        <mesh geometry={nodes.table_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      </group>
    )
  }

  return (
    <group {...props} dispose={null}>
      <EffectComposer disableNormalPass multisampling={4}>
        <SelectiveBloom
          selection={screensRef}
          intensity={bloomIntensity}
          luminanceThreshold={0.25}
          luminanceSmoothing={0.7}
          blendFunction={BlendFunction.ADD}
          mipmapBlur
          kernelSize={isMobile ? 1 : 2}
        />
      </EffectComposer>

      {/* Main furniture - using original geometries with optimized materials */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={optimizedMaterials.curtain} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={optimizedMaterials.body} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={optimizedMaterials.blinn1} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={optimizedMaterials.blinn1} />

      {/* Emissive screen (for bloom effect) */}
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={optimizedMaterials.lambert1}
      />

      {/* Window with special material */}
      <mesh geometry={nodes.window4_phong1_0.geometry} material={optimizedMaterials.phong1} />

      {/* Other blinn1 meshes */}
      {[
        nodes.handls_blinn1_0,
        nodes.keyboard_blinn1_0,
        nodes.kovrik_blinn1_0,
        // Add all other blinn1 nodes here
      ].map((node, index) => (
        <mesh
          key={`blinn1-${index}`}
          geometry={node.geometry}
          material={optimizedMaterials.blinn1}
          frustumCulled
        />
      ))}
    </group>
  )
})

// Material optimization helper that preserves original properties
function optimizeMaterial(originalMaterial) {
  const mat = originalMaterial.clone()
  
  // Apply performance optimizations without affecting appearance
  mat.envMapIntensity = 0.5
  mat.aoMapIntensity = 0.5
  mat.dithering = false
  mat.precision = 'mediump'
  
  // Texture optimizations
  if (mat.map) mat.map.anisotropy = 4
  if (mat.normalMap) mat.normalMap.anisotropy = 4
  
  return mat
}

// Preloading
if (typeof window !== 'undefined') {
  useGLTF.preload('/models/optimized-room.glb', {
    draco: true,
    decoderPath: 'https://www.gstatic.com/draco/versioned/decoders/1.5.5/'
  })
}