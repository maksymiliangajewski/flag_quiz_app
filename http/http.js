import axios from "axios";

const ALL_COUNTRIES_URL =
  "http://www.geognos.com/api/en/countries/info/all.json";

const FLAGS_URL = "http://www.geognos.com/api/en/countries/flag/";

export function flagUri(flag_Id) {
  return FLAGS_URL + flag_Id + ".png";
}

export async function fetchAllCountries() {
  const response = await axios.get(ALL_COUNTRIES_URL);
  const allCountries = [];

  for (const key in response.data["Results"]) {
    const country = {
      id: key,
      name: response.data["Results"][key]["Name"],
      value: true,
    };
    allCountries.push(country);
  }

  return allCountries;
}
