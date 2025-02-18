import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
// import CompareArrowsIcon from "@mui/icons-material/CompareArrows"; No aplicado aun

interface Props {
  onChange: (valSwitch: boolean) => void;
}

const ListDrawer = ({ onChange }: Props) => {
  const [valueSwitch, setValueSwitch] = useState<boolean>(() => {
    return JSON.parse(sessionStorage.getItem("themeMode") || "false");
  });
  // switch
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setValueSwitch(newValue);
    sessionStorage.setItem("themeMode", JSON.stringify(newValue));
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "300px" }}>
      <nav>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            height: "100vh",
          }}
        >
          {/* Boton para funcionalidad de comprar paises (No implementado)
          <ListSubheader color="primary">Opciones</ListSubheader>
          <ListItemButton
          // selected={selectedIndex === 0}
          // onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <CompareArrowsIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText
              primary="Comparar paises"
              primaryTypographyProps={{
                color: "primary",
              }}
            />
          </ListItemButton> 
          */}
          <ListSubheader color="primary">Configuration</ListSubheader>
          <ListItem>
            <ListItemIcon>
              {!valueSwitch ? (
                <ModeNightIcon color="primary" />
              ) : (
                <LightModeIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText
              primary={!valueSwitch ? "Dark mode" : "Light Mode"}
              primaryTypographyProps={{
                color: "primary",
              }}
            />
            {/* Agregar funcionalidad del cambio de tema  */}
            <Switch checked={valueSwitch} onChange={handleChange} />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default ListDrawer;
