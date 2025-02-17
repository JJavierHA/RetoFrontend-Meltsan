import axios from "axios";
import { Country } from "../types/country";

export const fetchCountries = async (
  page: number,
  pageSize: number
): Promise<{ countries: Country[]; total: number }> => {
  const start = page * pageSize;
  const end = start + pageSize;

  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return { countries: data.slice(start, end), total: data.length };
};

export const fetchCountry = async (cca3: string): Promise<Country> => {
  const { data } = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/alpha/${cca3}`
  );

  if (!data || data.length === 0) {
    throw new Error("Country not found");
  }

  return data[0];
};
