import { useQuery } from "react-query";
import axios from "axios";

const getCharacter = ({ queryKey }) => {
  const characterId = queryKey[1];
  console.log("desde CHARACTERID", characterId);
  return axios.get(`https://thronesapi.com/api/v2/Characters/${characterId}`);
};

export const useRouteDinamic = (characterId) => {
  return useQuery(["character", characterId], getCharacter, {
    select: (response) => response.data,
  });
};
