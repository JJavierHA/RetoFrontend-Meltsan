export interface Country {
  name: Name;
  flag: Flags;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  capital: string;
  population: number;
  cca3: string;
  ccn3: string;
  borders: string[];
  latlng: number[];
  continents: string[];
  region: string;
  subregion: string;
  area: number;
  flags: Flags;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
}
