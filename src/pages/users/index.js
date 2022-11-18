import { Button, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { UserList } from "../../components/users/userList";
import { useGetUsers } from "../../hooks/useUsers";

const Page = () => {
  const { data, isLoading, isError, error } = useGetUsers();

  if (isLoading) {
    return <Typography variant="h1">Is Loading</Typography>;
  }
  if (isError) {
    return <Typography variant="h1">{error.message}</Typography>;
  }

  return (
    <>
      <Head>
        <title>User List | Material Kit</title>
      </Head>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          width: "100vw",
          height: "100vh",
          border: "20px solid balack",
        }}
      >
        <Link href={"/users/new"}>
          <Button color="primary"> Add new user </Button>
        </Link>
        <UserList dataUserList={data} />
      </Stack>
    </>
  );
};

export default Page;
