import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchCharacter = (characterId) =>{
return axios.get(`https://thronesapi.com/api/v2/Characters/${characterId}`) 
}

export const useRouteDinamic = (characterId) => {

  const queryClient = useQueryClient()

  return (
    useQuery(["character" , characterId],()=> fetchCharacter(characterId),{select:({data})=> data})
    
  )
}
