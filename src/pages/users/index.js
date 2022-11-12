import { Stack } from "@mui/material";
import { Crud } from "../../components/userList/Crud";
import { UserForm } from "../../components/userList/userForm";

const Page = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        width: "100vw",
        height: "100vh",
        border: "20px solid balack",
      }}
    >
      <Crud />
      <UserForm />
    </Stack>
  );
};

export default Page;
