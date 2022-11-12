import axios from "axios";
import { useQuery } from "react-query";

const getCharacters = async () => {
  return await axios.get("https://thronesapi.com/api/v2/Characters");
};

export const useCharacters = () => {
  return useQuery("characters", getCharacters, {
    onSucces: (success) => {
      return console.log("se cargaron de manera exitosa los caracteres");
    },
    onError: () => {
      return console.log("algo salio mal");
    },
    select: (response) => {
      return response.data;
    },
  });
};
