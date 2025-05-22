import * as THREE from "three";

const HeroLight = () => {
    return (
        <>

            <spotLight position={[2, 5, 6]} intensity={100} angle={0.15} penumbra={0.2} color="white" />
            <spotLight position={[4, 5, 4]} intensity={100} angle={0.3} penumbra={0.5} color="#4cf9fa" />
            {/* <spotLight position={[-3, 5, 5]} intensity={100} angle={0.4} penumbra={1} color="#9daedd" /> */}

            <primitive
                object={new THREE.RectAreaLight("#a2a9ff", 8, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />
            <pointLight position={[0, 1, 0]} intensity={10} color="#7204b7" />
            {/* <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" /> */}
        </>
    )
}

export default HeroLight