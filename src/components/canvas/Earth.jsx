import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// WARNINGS when rendering: 
// WebGL warning: texStorage(Multisample)?: `levels` must be >= 1.
// WebGL warning: tex(Sub)Image[23]D: Resource has no data (yet?). Uploading zeros.
// WebGL warning: texSubImage: The specified TexImage has not yet been specified.
// WebGL warning: generateMipmap: The texture's base level must be complete. 

const Earth = () => {
  // useGLTF-hook:
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} />;
};

const EarthCanvas = () => {
  <Canvas
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      // fov: field of view
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Earth />

      <Preload all />
    </Suspense>
  </Canvas>;
};

export default EarthCanvas;
