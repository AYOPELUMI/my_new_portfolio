import { Bounds, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

import { OfficeSetUp } from "./Setup-optimized"
import { Suspense } from "react";

function AdaptivePerformance({ children }) {
    const { performance } = useThree()
    return <>{performance.current > 0.5 ? children : <OfficeSetUp simplified />}</>
}

const ContactExperience = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Canvas
                shadows
                camera={{ position: [0, 3, 7], fov: 45 }}
                gl={{
                    antialias: false,
                    powerPreference: 'high-performance',
                    alpha: false
                }}
                performance={{ min: 0.1 }}
            >
                <AdaptivePerformance>
                    <ambientLight intensity={0.5} color="#fff4e6" />

                    <directionalLight
                        position={[5, 5, 3]}
                        intensity={2.5}
                        color="#ffd9b3"
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />

                    <OrbitControls
                        enableZoom={false}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                        enableDamping
                        dampingFactor={0.05}
                    />

                    <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[30, 30, 1, 1]} />
                        <meshStandardMaterial color="#62e0ff" />
                    </mesh>

                    <Bounds fit margin={1.2}>
                        <group scale={2} position={[-1, -1, 0]}>
                            <OfficeSetUp />
                        </group>
                    </Bounds>
                </AdaptivePerformance>
            </Canvas>
        </Suspense>
    )
}

export default ContactExperience