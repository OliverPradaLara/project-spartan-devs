import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { useCharacters } from "../hooks/use-character.js";

const Page = () => {
  const { data: charactersData, isLoading: charactersIsLoading } = useCharacters();
  console.log("desde el componente", charactersData);
  if (charactersIsLoading) {
    return <p>...Loading</p>;
  }
  return (
    <>
      <Head>
        <title>Got Characters | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults characters={charactersData} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
