import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { InstancedMesh } from "three"

interface ParticleData {
  y: number
  speed: number
  x: number
  z: number
  rotation: number
}

const Particles = ({ count = 100 }: { count?: number }) => {
  const mesh = useRef<InstancedMesh>(null)
  const particlesData = useRef<ParticleData[]>([])
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Shared geometry and material
  const [sphereGeometry, basicMaterial] = useMemo(() => [
    new THREE.SphereGeometry(0.05, 8, 8),
    new THREE.MeshBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    })
  ], [])

  // Initialize particles data once
  useEffect(() => {
    particlesData.current = Array.from({ length: count }, () => ({
      y: Math.random() * 10 + 5,
      speed: 0.005 + Math.random() * 0.001,
      x: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 10,
      rotation: Math.random() * Math.PI
    }))
  }, [count])

  useFrame(() => {
    if (!mesh.current) return

    particlesData.current.forEach((particle, i) => {
      particle.y -= particle.speed
      particle.rotation += 0.01

      if (particle.y < -2) {
        particle.y = Math.random() * 10 + 5
        particle.x = (Math.random() - 0.5) * 10
        particle.z = (Math.random() - 0.5) * 10
      }

      dummy.position.set(particle.x, particle.y, particle.z)
      dummy.rotation.set(particle.rotation, particle.rotation, 0)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={mesh}
      args={[sphereGeometry, basicMaterial, count]}
      frustumCulled={false}
    />
  )
}

export default Particles