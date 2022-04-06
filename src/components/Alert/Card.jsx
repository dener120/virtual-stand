import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {detailsData} from "../../Store/detailsData";
import {useEffect} from "react";
import {Link} from "@mui/material";

function CardAlert(props) {
    const {
        name = '',
        size = '',
        description = '',
        documentations = '',
    } = detailsData[props.name] || props;

    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: 300,
            padding: '1rem',
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {size}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2">
                    Документация:
                </Typography>
                <Link target="_blank" rel="noopener" href={documentations[0]?.link} underline="hover">
                    {documentations[0]?.title}
                </Link>
            </CardContent>
        </Card>
    )
}

export default CardAlert;