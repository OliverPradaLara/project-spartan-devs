import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

/* hook para la peticion de datos */

const getUsers = async () => {
  return await axios.get("https://immense-shelf-01877.herokuapp.com/users");
};

export const useGetUsers = () => {
  return useQuery(["users"], getUsers, {
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

const getUser = async ({ queryKey }) => {
  const userId = queryKey[1];
  return await axios.get(`https://immense-shelf-01877.herokuapp.com/users/${userId}`);
};

export const useGetUser = (userId) => {
  return useQuery(["users", userId], getUser, {
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

const createUser = (dataUser) => {
  return axios.post("https://immense-shelf-01877.herokuapp.com/users", dataUser);
};

/* funcion para exportar el hook para añadir a a la base de datos*/
export const useCreateUser = () => {
  /* funcion usando el useQuery Mutation*/
  const queryClient = useQueryClient();
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("Users");
      return console.log("wass a exit from useCreateUser");
    },
    onError: () => {
      return console.log("that was error from useCreateUser");
    },
  });
};

/* Hook para borrar users de la db */

const deleteUser = async (userId) => {
  return await axios.delete(`https://immense-shelf-01877.herokuapp.com/users/${userId}`);
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      return console.log("wass a exit from useDeleteUser");
    },
    onError: () => {
      return console.log("that was error from useDeleteUser");
    },
  });
};

/* Hook modificador */

const updateCharacter = async (userId) => {
  return await axios.patch(`https://immense-shelf-01877.herokuapp.com/users/${userId}`);
};

export const useUpdateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      return console.log("wass a exit from useDeleteCharacter");
    },
    onError: () => {
      return console.log("that was error from useDeleteCharacter");
    },
  });
};
