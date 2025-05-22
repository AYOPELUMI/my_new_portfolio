import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import *  as THREE from "three";
import type { GLTF } from 'three-stdlib';

const TechIcon = ({ model }: any) => {
    const scene = useGLTF(model.modelPath) as GLTF;
    useEffect(() => {
        if (model.name === "Interactive Developer") {
            (scene).scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({ color: "white" });
                }
            })
        }
    }, [])
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={1} position={[5, 5, 5]} />
            <OrbitControls enableZoom={false} />
            <Environment preset="city" />

            <Float speed={5.5} floatIntensity={0.5} rotationIntensity={2}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon