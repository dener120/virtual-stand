import CanvasModel from "./Model/CanvasModel";
import {styled} from "@mui/material/styles";
import DrawerHeader from "./DrawerHeader";

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('box-shadow', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            boxShadow: "inset 1px 2px 206px 20px #000000",
            transition: theme.transitions.create('box-shadow', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

function MainContent(props) {
    const {
        open = false,
        alertNode = {},
        setNodes = Function.prototype,
        showAlert = Function.prototype,
    } = props

    return (
        <Main
            open={open}
            sx={{
                padding: 0
            }}
        >
            <DrawerHeader/>
            <div className="canvas-container">
                <CanvasModel
                    alertNode={alertNode}
                    setNodes={setNodes}
                    showAlert={showAlert}
                />
            </div>
        </Main>
    )
}

export default MainContent;