import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../services/api";
import { fetchCountry } from "../services/api";
import { Country } from "../types/country";

export const useCountryQuery = (page: number, pageSize: number) => {
  return useQuery<{ countries: Country[]; total: number }, Error>({
    queryKey: ["country", page, pageSize],
    queryFn: () => fetchCountries(page, pageSize),
    meta: { keepPreviousData: true },
  });
};

export const useCountryOneQuery = (cca3: string) => {
  return useQuery<Country, Error>({
    queryKey: ["country", cca3],
    queryFn: () => fetchCountry(cca3),
    enabled: !!cca3,
  });
};
