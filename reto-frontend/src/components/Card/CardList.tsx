import { Link } from "react-router-dom";
import { Grid2, Box, Typography } from "@mui/material";

interface Props {
  cca3: string;
  name: string;
  url: string;
}

function CardList({ cca3, name, url }: Props) {
  return (
    <Grid2
      container
      size={8}
      alignItems="center"
      sx={{
        border: "1px solidrgb(85, 151, 100)",
        boxShadow: "1px 1px 3px 1px rgb(156, 156, 156)",
        maxHeight: "160px",
        justifyContent: "center",
      }}
      key={cca3}
    >
      <Link
        to={`/countries/${cca3}`}
        style={{
          textDecoration: "none",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Grid2 size={"auto"}>
          <Box
            sx={{
              height: "160px",
              width: "auto",
            }}
          >
            <img
              src={url}
              alt="Bandera"
              style={{
                height: "100%",
                maxWidth: "250px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid2>

        <Grid2 size={"grow"} display="flex" alignItems="center">
          <Typography key={cca3} color="primary" variant="h6" margin={"0 20px"}>
            {name}
          </Typography>
        </Grid2>
      </Link>
    </Grid2>
  );
}

export default CardList;
