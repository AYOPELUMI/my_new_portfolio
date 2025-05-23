import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from "@react-three/drei"
import { useMediaQuery } from 'react-responsive'
import { Room } from "./room"
import HeroLight from './heroLight'
import Particles from './particles'
import { Suspense } from 'react'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }) // Fixed media query syntax
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{
                antialias: false,
                powerPreference: 'high-performance',
                alpha: false
            }}
            performance={{ min: 0.5 }}
            frameloop="demand" // Only render when needed
        >
            <Suspense fallback={null}>
                {/* <Stats />  */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                    dampingFactor={0.05} // Smoother controls
                />
                <HeroLight />
                {/* Conditional particles rendering */}
                {/* {!isMobile && <Particles count={isTablet ? 50 : 100} />} */}
                <group
                    scale={isMobile ? 0.7 : 1}
                    rotation={[0, -Math.PI / 4, 0]}
                    position={[0, -3.5, 0]}
                >
                    <Room isMobile={isMobile} simplified={isMobile} />
                </group>
            </Suspense>
        </Canvas>
    )
}

export default HeroExperience