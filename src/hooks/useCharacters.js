import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

/* hook para la peticion de datos */

const getCharacters = async () => {
  return await axios.get("https://immense-shelf-01877.herokuapp.com/users");
};

export const useGetCharacters = () => {
  return useQuery(["characters"], getCharacters, {
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

/* Hook llamada by ID */

const getCharacter = async ({ queryKey }) => {
  const characterId = queryKey[1];
  return await axios.get(`https://immense-shelf-01877.herokuapp.com/users/${characterId}`);
};

export const useGetCharacter = (characterId) => {
  return useQuery(["characters", characterId], getCharacter, {
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

/* hook para añadir users */

const createCharacter = (dataCharacter) => {
  return axios.post("https://immense-shelf-01877.herokuapp.com/users", dataCharacter);
};

/* funcion para exportar el hook para añadir a a la base de datos*/
export const useCreateCharacter = () => {
  /* funcion usando el useQuery Mutation*/
  const queryClient = useQueryClient();
  return useMutation(createCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries("characters");
      return console.log("wass a exit from useCreateCharacters");
    },
    onError: () => {
      return console.log("that was error from useCreateCharacters");
    },
  });
};

/* Hook para borrar users de la db */

const deleteCharacter = async (characterId) => {
  return await axios.delete(`https://immense-shelf-01877.herokuapp.com/users/${characterId}`);
};

export const useDeleteCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries("characters");
      return console.log("wass a exit from useDeleteCharacter");
    },
    onError: () => {
      return console.log("that was error from useDeleteCharacter");
    },
  });
};

/* Hook modificador */

const updateCharacter = async (characterId) => {
  return await axios.patch(`https://immense-shelf-01877.herokuapp.com/users/${characterId}`);
};

export const useUpdateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries("characters");
      return console.log("wass a exit from useDeleteCharacter");
    },
    onError: () => {
      return console.log("that was error from useDeleteCharacter");
    },
  });
};
