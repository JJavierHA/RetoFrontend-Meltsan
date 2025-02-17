import { useState } from "react";
import ListDrawer from "./ListDrawer";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Tooltip,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onSearch: (query: string) => void;
  onClick: (isFilterOptions: boolean) => void;
  isFilterOptions: boolean;
  onClickView: (isFilterOptions: boolean) => void;
  isGrid: boolean;
  onChangeSwitch: (valSwitch: boolean) => void;
}

const NavBar = ({
  onSearch,
  onClick,
  isFilterOptions,
  onClickView,
  isGrid,
  onChangeSwitch,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); // busqueda

  // const [valueView, setValueView] = useState(false);

  const handleSwitch = (valSwitch: boolean) => {
    onChangeSwitch(valSwitch);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleClick = () => {
    isFilterOptions ? onClick(false) : onClick(true);
  };

  const handleClickView = () => {
    isGrid ? onClickView(false) : onClickView(true);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ padding: "10px" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1, color: "inherit" }}
          >
            <Link
              to="/countries"
              style={{ textDecoration: "none", color: "#fff", fontSize: 24 }}
            >
              Country explorer
            </Link>
          </Typography>
          {/* // barra de busqueda */}

          <Box
            sx={{ display: "flex", alignItems: "flex-end", margin: "0 30px" }}
          >
            <SearchIcon
              sx={{ color: "secondary", mr: 1, fontSize: 26, mb: 1.5 }}
            />
            <TextField
              id="standard-search"
              label="Search country"
              variant="filled"
              color="secondary"
              sx={{
                "& .MuiFilledInput-underline": {
                  "&:before": {
                    borderBottom: "2px solid white",
                  },
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "transparent",
                  },
                },
              }}
              onChange={handleChange}
              value={query}
            />
          </Box>

          {/* filtro */}
          <Tooltip title="Filtering options">
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClick}
            >
              {isFilterOptions ? (
                <FilterListOffIcon color="secondary" />
              ) : (
                <FilterListIcon color="secondary" />
              )}
            </IconButton>
          </Tooltip>
          {/* tipo de vista paises */}
          <Tooltip title={isGrid ? "List view" : "Grid view"}>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClickView}
            >
              {isGrid ? (
                <ViewListIcon color="secondary" />
              ) : (
                <GridViewIcon color="secondary" />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <ListDrawer onChange={handleSwitch} />
      </Drawer>
    </>
  );
};

export default NavBar;
