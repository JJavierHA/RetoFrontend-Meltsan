import { useCountryQuery } from "../hooks/useCountryQuery";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Box, Grid2, Pagination, Skeleton } from "@mui/material";
import CardCountrie from "../components/Card/CardCountrie";
import CardList from "../components/Card/CardList";
import SelectC from "../components/NavBar/SelectC";

interface Props {
  filter?: string;
  isFilterOptions?: boolean;
  isGrid?: boolean;
}

function Countries({ filter, isFilterOptions, isGrid }: Props) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  // select
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (filter || region || subRegion || language) {
      setPageSize(250);
      setPage(0);
    } else {
      setPageSize(25);
    }
    // desactivamos los valores si el filtro es flase
    if (!isFilterOptions && !filter) {
      setLanguage("");
      setSubRegion("");
      setRegion("");
      setPageSize(25);
    }
  }, [isFilterOptions, filter, region, subRegion, language]);

  const { data, isLoading } = useCountryQuery(page, pageSize);

  //filtramos los elementos
  const filteredCountries = data?.countries
    .filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(filter ? filter.toLowerCase() : "")
    )
    .filter((country) =>
      region ? country.region?.toLowerCase() === region.toLowerCase() : true
    )
    .filter((country) =>
      subRegion
        ? country.subregion?.toLowerCase() === subRegion.toLowerCase()
        : true
    )
    .filter((country) =>
      language
        ? country.languages &&
          Object.values(country.languages).some((lang) =>
            lang.toLowerCase().includes(language.toLowerCase())
          )
        : true
    );

  let totalPages = data?.total ? Math.ceil(data.total / pageSize) : 0; // Número total de páginas (puedes calcularlo con la longitud de los datos y el tamaño de la página)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const onChangeRegion = (region: string) => {
    setRegion(region);
  };

  const onChangeSubRegion = (subRegion: string) => {
    setSubRegion(subRegion);
  };

  const onChangeLanguaje = (language: string) => {
    setLanguage(language);
  };

  return (
    <>
      {/* contenedor de filtros */}
      {isFilterOptions ? (
        <Box sx={{ margin: "0 50px" }}>
          <SelectC
            onChangeRegion={onChangeRegion}
            onChangeSubRegion={onChangeSubRegion}
            onChangeLanguaje={onChangeLanguaje}
          />
        </Box>
      ) : null}
      {/* contenedor de paises grid || list */}
      <Grid2
        container
        spacing={4}
        sx={{ margin: "40px", justifyContent: "center", alignItems: "center" }}
      >
        {!isLoading
          ? (filter || region || subRegion || language
              ? filteredCountries
              : data?.countries
            )?.map((country) =>
              isGrid ? (
                <CardCountrie
                  key={country.cca3}
                  cca3={country.cca3}
                  name={country.name.common}
                  url={country.flags.png}
                />
              ) : (
                <CardList
                  key={country.cca3}
                  cca3={country.cca3}
                  name={country.name.common}
                  url={country.flags.svg}
                />
              )
            )
          : Array.from(new Array(25)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={isGrid ? 250 : "66%"}
                height={isGrid ? 200 : 160}
                sx={{ borderRadius: 2, marginBottom: 2 }}
              />
            ))}
      </Grid2>
      {(!filter || !region || !subRegion || !language) && totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <Pagination
            count={totalPages}
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "#fff",
                color: "#33984a",
                "&:hover": {
                  backgroundColor: "#084b17",
                  color: "#fff",
                },
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "#084b17",
              },
              "& .Mui-selected": {
                backgroundColor: "#084b17 !important",
                color: "#fff !important",
              },
            }}
            size="large"
            onChange={handleChange}
            page={page + 1}
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
      )}
    </>
  );
}

export default Countries;
