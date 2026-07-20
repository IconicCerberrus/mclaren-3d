import { useGLTF } from "@react-three/drei"

export default function Car(){
const {scene}=useGLTF(
"/models/mclaren.glb"
)

return(
<primitive
object={scene}
scale={1.5}
/>
)

}
useGLTF.preload("/models/mclaren.glb")