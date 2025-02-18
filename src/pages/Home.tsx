import { Link } from "react-router-dom";
import logo_inicio from "../assets/logo_inicio.png";
import { Typography, Grid2, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <Grid2
      container
      sx={{
        height: "100vh",
        textAlign: "center",
        overFlow: "hidden",
      }}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid2 sx={{ width: "80%", maxWidth: "500px" }} size={4}>
        <img
          src={logo_inicio}
          alt="Logo"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </Grid2>
      <Grid2 sx={{ width: "80%", maxWidth: "600px" }} size={6}>
        <Typography
          variant="h3"
          component={"h1"}
          textAlign={"center"}
          marginBottom={"25px"}
          color="primary"
        >
          Explore the countries of the world in one place
        </Typography>
        <Link to={"/countries"}>
          <Button variant="contained" endIcon={<SearchIcon />} size="large">
            Start exploring
          </Button>
        </Link>
      </Grid2>
    </Grid2>
  );
}

export default Home;
