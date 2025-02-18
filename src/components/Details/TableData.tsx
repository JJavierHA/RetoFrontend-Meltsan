import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  capital?: string;
  population?: number;
  area?: number;
  borders?: string[]; // los bordes son a traves del cca3: codigo de los paices
  continents?: string[];
}

function TableData({ capital, population, area, borders, continents }: Props) {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell colSpan={2} align="center">
              <Typography variant="h4" color="primary">
                General data
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              color="primary"
              align="center"
            >
              Capital
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }} color="primary" align="center">
              {capital ? capital : "Desconocido"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell
              color="primary"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              align="center"
            >
              Population
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }} color="primary" align="center">
              {population
                ? population?.toLocaleString() + " habitantes"
                : "Desconocido"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell
              color="primary"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              align="center"
            >
              Geographical area
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }} color="primary" align="center">
              {area ? area?.toLocaleString() : "Desconocido"} ㎢
            </TableCell>
          </TableRow>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell
              color="primary"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              align="center"
            >
              Neighboring countries
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }} color="primary" align="center">
              {borders
                ? borders?.map((border) => (
                    <Link
                      to={`/countries/${border}`}
                      style={{ textDecoration: "none" }}
                      key={border}
                    >
                      <Typography key={border} color="primary">
                        {border}
                      </Typography>
                    </Link>
                  ))
                : "Desconocido"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ borderBottom: "2px solid rgb(146, 197, 158)" }}>
            <TableCell
              color="primary"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              align="center"
            >
              Continents
            </TableCell>
            <TableCell sx={{ fontSize: "16px" }} color="primary" align="center">
              {continents
                ? continents?.map((continent) => (
                    <Typography key={continent} color="primary">
                      {continent}
                    </Typography>
                  ))
                : "Desconocido"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableData;
