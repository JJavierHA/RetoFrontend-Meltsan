import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
// import { iso6392 } from "iso-639-2"; lista opcional

interface Props {
  onChangeRegion: (region: string) => void;
  onChangeSubRegion: (subRegion: string) => void;
  onChangeLanguaje: (language: string) => void;
}

const regiones = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const subRegiones = [
  "Northern Africa",
  "Western Africa",
  "Eastern Africa",
  "Southern Africa",
  "North America",
  "Central America",
  "Caribbean",
  "South America",
  "Central Asia",
  "Eastern Asia",
  "South-Eastern Asia",
  "Southern Asia",
  "Western Asia",
  "Northern Europe",
  "Southern Europe",
  "Western Europe",
  "Eastern Europe",
  "Melanesia",
  "Micronesia",
  "Polynesia",
];

const languages = {
  spa: "Spanish",
  eng: "English",
  fra: "French",
  deu: "German",
  ita: "Italian",
  por: "Portuguese",
  rus: "Russian",
  zho: "Chinese",
  jpn: "Japanese",
  ara: "Arab",
  hin: "Hindi",
};

// const languages = iso6392; (opcional => codigos de paises)

function SelectC({
  onChangeRegion,
  onChangeSubRegion,
  onChangeLanguaje,
}: Props) {
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [language, setLanguage] = useState("");

  const handleChangeRegion = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
    onChangeRegion(event.target.value);
  };

  const handleChangeSubRegion = (event: SelectChangeEvent) => {
    setSubRegion(event.target.value);
    onChangeSubRegion(event.target.value);
  };

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    onChangeLanguaje(event.target.value);
  };

  return (
    <>
      {/* region */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          htmlFor="grouped-native-select"
          sx={{ color: "primary.main" }}
        >
          Continent
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleChangeRegion}
          label="region"
          color="primary"
        >
          <MenuItem value="" color="text.secondary">
            <em>Ninguno</em>
          </MenuItem>
          {regiones.map((region) => (
            <MenuItem key={region} value={region} color="secondary">
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* subregion */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          htmlFor="grouped-native-select"
          sx={{ color: "primary.main" }}
        >
          Sub-continent
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={subRegion}
          onChange={handleChangeSubRegion}
          label="Age"
          sx={{
            color: "#33984a",
          }}
        >
          <MenuItem value="" color="text.secondary">
            <em>Ninguno</em>
          </MenuItem>
          {subRegiones.map((subRegion) => (
            <MenuItem key={subRegion} value={subRegion} color="primary">
              {subRegion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* lenguaje */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          htmlFor="grouped-native-select"
          sx={{ color: "primary.main" }}
        >
          Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={language}
          onChange={handleChangeLanguage}
          label="Age"
          sx={{
            color: "#33984a",
          }}
        >
          <MenuItem value="" color="text.secondary">
            <em>Ninguno</em>
          </MenuItem>
          {Object.entries(languages).map(([key, values]) => (
            <MenuItem key={key} value={key} color="primary">
              {values}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectC;
