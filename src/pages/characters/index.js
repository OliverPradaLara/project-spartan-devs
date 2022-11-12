import { Stack } from "@mui/material";
import { CharacterForm } from "../../components/characterList/characterForm";
import { Crud } from "../../components/characterList/Crud";

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
      <CharacterForm />
    </Stack>
  );
};

export default Page;
