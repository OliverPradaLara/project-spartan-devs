import { UserForm } from "../../../components/users/userForm";
import { useRouter } from "next/router";
import { useGetUser } from "../../../hooks/useUsers";
import { CircularProgress } from "@mui/material";

const EditUser = () => {
  const route = useRouter();
  const { userId } = route.query;
  const { data, isLoading } = useGetUser(userId);

  if (isLoading) {
    return <CircularProgress>is loading</CircularProgress>;
  }
  return <UserForm userData={data} />;
};

export default EditUser;
