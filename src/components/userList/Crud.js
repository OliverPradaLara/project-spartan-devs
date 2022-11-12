import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useGetUsers, useDeleteUser } from "../../hooks/useUsers";
import Link from "next/link";

export const Crud = () => {
  /* useCrudDelete */

  const { mutate } = useDeleteUser();

  /* useQuery hook (get) */

  const { data, isLoading, isError, error } = useGetUsers();

  /* manejando el loading */

  if (isLoading) {
    return (
      <Typography
        variant="h1"
        color="initial"
        sx={{
          textAlign: "center",
        }}
      >
        is loading
      </Typography>
    );
  }

  /* manejando el error */

  if (isError) {
    return <Typography variant="h1">{error.message}</Typography>;
  }

  return (
    <Box
      sx={{
        width: "500",
        ml: 1,
      }}
    >
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{
            textAlign: "center",
          }}
        >
          Crud
        </Typography>
      </Box>

      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow hover key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Typography color="textPrimary" variant="body1">
                    {user.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {user.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {user.city}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {user.username}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {user.website}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={<Link href={`/characters/${user.id}`}></Link>}
                  >
                    Edit
                  </Button>

                  <Button color="error" variant="contained" onClick={(e) => mutate(user.id)}>
                    Delete
                  </Button>

                  <Link href={`/characters/${user.id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
