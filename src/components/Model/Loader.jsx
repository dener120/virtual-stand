import { Html, useProgress } from '@react-three/drei'
import {CircularProgress} from "@mui/material";


function Loader() {
    const { progress } = useProgress()
    return <Html center>
        <CircularProgress />
    </Html>
}

export default Loader;
