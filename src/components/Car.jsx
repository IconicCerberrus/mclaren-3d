import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Car() {
  const { scene } = useGLTF("/models/mclaren.glb");

  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log("Mesh:", child.name);
      console.log(child.material);
    }
  });
}, [scene]);

  return <primitive object={scene} />;
}