import * as THREE from "three"
import { useMemo } from 'react'

const HeroLight = () => {
    // Memoize lights to prevent recreation on re-renders
    const areaLight = useMemo(() => new THREE.RectAreaLight("#a2a9ff", 8, 3, 2), [])

    return (
        <>
            {/* Main lights */}
            <spotLight
                position={[2, 5, 6]}
                intensity={100}
                angle={0.15}
                penumbra={0.2}
                color="white"
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
            />
            <spotLight
                position={[4, 5, 4]}
                intensity={100}
                angle={0.3}
                penumbra={0.5}
                color="#4cf9fa"
                castShadow={false}
            />

            {/* Area light with memoized object */}
            <primitive
                object={areaLight}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            {/* Accent light */}
            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7204b7"
                distance={8} // Limit range
            />
        </>
    )
}

export default HeroLight