import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from "./Card";


function Alert(props) {
    const {
        alertNode,
        setAlertNode,
    } = props;

    const closeAlert = () => {
        alertNode.material = alertNode.material.clone();
        alertNode.material.color.set(0xffffff);
        setAlertNode({});
    }

    return <div id="toast-container">
        <div className="toast">
            <IconButton
                aria-label="delete"
                size="large"
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}
                onClick={closeAlert}
            >
                <CloseIcon
                    fontSize="inherit"
                    sx={{
                        color: "red",
                    }}
                />
            </IconButton>
            <Card {...alertNode}/>
        </div>
    </div>
}

export default Alert;