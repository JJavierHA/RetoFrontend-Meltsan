import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  cca3: string;
  name: string;
  url: string;
}

function CardCountrie({ cca3, name, url }: Props) {
  return (
    <Card sx={{ maxWidth: 250 }} key={name}>
      <Link to={`/countries/${cca3}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={url}
            alt={name}
            sx={{ width: "100%" }}
          />
          <CardContent>
            <Typography variant="h6" component="h1" color="primary">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default CardCountrie;
