import {lazy} from "react";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Loader from "./Loader";
import {OrbitControls, Stage} from "@react-three/drei";

const Model3d = lazy(() => import('./3dModel'));

function CanvasModel(props) {
    const {
        alertNode = {},
        setNodes = Function.prototype,
        showAlert = Function.prototype,
    } = props

    return (
        <Canvas
            // dpr={[1, 2]}
            camera={{
                fov: 20,
            }}
        >
            <Suspense fallback={<Loader/>}>
                <Stage preset="portrait" intensity={0.2} environment="city">
                    <Model3d
                        preset="portrait"
                        environment="city"
                        alertNode={alertNode}
                        setNodes={setNodes}
                        showAlert={showAlert}
                    />
                </Stage>
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

export default CanvasModel;