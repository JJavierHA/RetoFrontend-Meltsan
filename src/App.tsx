import { Routes, Route, useLocation } from "react-router-dom";
// paginas
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import NavBar from "./components/NavBar/NavBar";
import CountryDetail from "./pages/CountryDetail";
import { useState } from "react";

// TODO: configurar el modo oscuro
interface Props {
  onChangeSwitch: (valSwitch: boolean) => void;
}

function App({ onChangeSwitch }: Props) {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOptions, setIsFilterOptions] = useState(false);
  const [isGrid, setIsGrid] = useState(true);

  const handleChangeSwitch = (valSwitch: boolean) => {
    onChangeSwitch(valSwitch);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <NavBar
          onSearch={setSearchTerm}
          onClick={setIsFilterOptions}
          isFilterOptions={isFilterOptions}
          onClickView={setIsGrid}
          isGrid={isGrid}
          onChangeSwitch={handleChangeSwitch}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/countries"
          element={
            <Countries
              filter={searchTerm.trim()}
              isFilterOptions={isFilterOptions}
              isGrid={isGrid}
            />
          }
        />
        <Route path="/countries/:cca3" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
