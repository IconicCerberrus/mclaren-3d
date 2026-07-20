import {Canvas} from "@react-three/fiber"
import {
OrbitControls,
Environment
} from "@react-three/drei"

import Car from "./Car"


export default function Scene(){


return(

<Canvas
camera={{
position:[0,2,5],
fov:45
}}
>


<ambientLight intensity={1}/>


<directionalLight
position={[5,5,5]}
intensity={2}
/>


<Car/>

        

<Environment preset="city"/>


<OrbitControls/>

</Canvas>


)

}