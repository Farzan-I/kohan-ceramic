import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Vase = ( isMobile ) => {
  const vase = useGLTF('./vase/scene.gltf')

  return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={isMobile ? [-20, 50, 10] : [-20, 50, 10]}
          angle={isMobile ? 0.12 : 0.12}
          penumbra={1}
          intensity={isMobile ? 2 : 5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={isMobile ? 0.4 : 1} />
        <primitive
          object={vase.scene}
          scale={isMobile ? 1.41 : 1.2}
          position-y={0}
          rotation-y={0}
        />
      </mesh>
  )
}

const VaseCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Vase />
      </Suspense>
    </Canvas>
  )
}

export default VaseCanvas;