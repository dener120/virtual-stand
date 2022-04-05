import {Drawer, ListItem, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerHeader from "./DrawerHeader";
import {useEffect} from "react";

const drawerWidth = 240;

function SideNavBar(props) {
    const {
        handleDrawerClose = Function.prototype,
        theme,
        open = false,
        nodes = {},
        showAlert = Function.prototype
    } = props;

    return (
        <Drawer
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? (
                        <ChevronLeftIcon/>
                    ) : (
                        <ChevronRightIcon/>
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {[['Бак', 'bak'], ['Насос', 'opresovatNasos']].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text[0]}
                            onClick={(e) => showAlert(e,nodes.find(node => node.name === text[1]))}
                        >
                            <ListItemText primary={text[0]}/>
                        </ListItem>
                    )
                )}
            </List>
            <Divider/>
        </Drawer>
    )
}

export default SideNavBar;