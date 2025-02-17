import { Box, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TableData from "../components/Details/TableData";
import { useCountryOneQuery } from "../hooks/useCountryQuery";
import MapContainer from "../components/Details/Map";

function CountryDetail() {
  const { cca3 } = useParams();

  const { data } = useCountryOneQuery(cca3!);

  const languageNames = Object.values(
    data?.languages ? data?.languages : "No disponible"
  );

  return (
    <Grid2
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      mt={"20px"}
      mb={"100px"}
    >
      <Grid2 size={10}>
        <Typography
          color="primary"
          textAlign={"center"}
          variant="h3"
          m={"25px"}
        >
          {data?.name.common}
        </Typography>
      </Grid2>
      <Grid2 size={10}>
        <Box sx={{ textAlign: "center" }}>
          <img src={data?.flags.svg} alt="name" style={{ maxWidth: "70%" }} />
        </Box>
      </Grid2>
      <Grid2 size={3}>
        <Box
          sx={{
            textAlign: "center",
            padding: " 25px",
          }}
        >
          <Typography color="primary" variant="h5">
            Currency
          </Typography>
          <Typography color="primary">
            {data?.currencies[Object.keys(data.currencies)[0]].symbol}{" "}
            {data?.currencies[Object.keys(data.currencies)[0]].name}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={3}>
        <Box
          sx={{
            textAlign: "center",
            padding: " 25px",
          }}
        >
          <Typography color="primary" variant="h5">
            Language
          </Typography>
          <Typography color="primary">{languageNames.join(", ")}</Typography>
        </Box>
      </Grid2>
      <Grid2 size={10} mt={"50px"}>
        <TableData
          key={data?.cca3}
          capital={data?.capital}
          population={data?.population}
          area={data?.area}
          borders={data?.borders}
          continents={data?.continents}
        />
      </Grid2>
      <Grid2 size={10} mt={"50px"}>
        <Box sx={{ textAlign: "center", margin: "10px 0" }}>
          <Typography variant="h4" color="primary">
            Location
          </Typography>
          <MapContainer
            key={data?.cca3}
            name={data?.name.common}
            latitud={data?.latlng[1]}
            longitud={data?.latlng[0]}
          ></MapContainer>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default CountryDetail;
