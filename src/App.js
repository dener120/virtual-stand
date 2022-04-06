import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {useState} from "react";
import Alert from "./components/Alert/Alert";
import Header from "./components/Header";
import MainContent from "./components/Main";
import SideNavBar from "./components/SideNavBar";


function App() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [alertNode, setAlertNode] = useState({});
    const [nodes, setNodes] = useState({});

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    function showAlert(e, eventNode = e.object) {
        e.stopPropagation();

        const currentNode = nodes.find((node) => node.name === eventNode.name)

        if (Object.keys(alertNode).length > 0) {
            alertNode.material = alertNode.material.clone();
            alertNode.material.color.set(0xffffff);
        }
        setAlertNode(currentNode);

        currentNode.material = currentNode.material.clone();
        currentNode.material.color.set(0xf34f3f);
    }

    return (
        <Box sx={{
                display: 'flex',
                height: '100vh',
                background: '#f5f5f5'
            }}>
            <CssBaseline/>
            <Header
                open={open}
                theme={theme}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <SideNavBar
                open={open}
                handleDrawerClose={handleDrawerClose}
                theme={theme}
                nodes={nodes}
                showAlert={showAlert}
            />
            <MainContent
                open={open}
                alertNode={alertNode}
                setNodes={setNodes}
                showAlert={showAlert}
            />
            {
                Object.keys(alertNode).length > 0 && (
                    <Alert
                        alertNode={alertNode}
                        setAlertNode={setAlertNode}
                    />
                )
            }
        </Box>
    );
}

export default App;