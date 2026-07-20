import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Car() {
  const { scene } = useGLTF("/models/mclaren.glb");

  const carRef = useRef();

  useEffect(() => {
    gsap.from(carRef.current.position, {
      y: -5,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <primitive
      ref={carRef}
      object={scene}
      scale={1.5}
    />
  );
}

useGLTF.preload("/models/mclaren.glb");