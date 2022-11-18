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
import { useDeleteUser } from "../../hooks/useUsers";
import Link from "next/link";

export const UserList = ({ dataUserList }) => {
  const { mutate } = useDeleteUser();

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
            {dataUserList.map((user) => (
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
                  <ButtonGroup>
                    <Link href={`/users/${user.id}/edit`}>
                      <Button color="warning" variant="contained">
                        Edit
                      </Button>
                    </Link>

                    <Link href={`/users/${user.id}`}>
                      <Button color="primary" variant="contained">
                        details
                      </Button>
                    </Link>

                    <Button color="error" variant="contained" onClick={(e) => mutate(user.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
