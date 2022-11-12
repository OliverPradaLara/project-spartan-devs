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
import { useGetCharacters, useDeleteCharacter } from "../../hooks/useCharacters";
import Link from "next/link";

export const Crud = () => {
  /* useCrudDelete */

  const { mutate } = useDeleteCharacter();

  /* useQuery hook (get) */

  const { data, isLoading, isError, error } = useGetCharacters();

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
            {data.map((person) => (
              <TableRow hover key={person.id}>
                <TableCell>{person.id}</TableCell>
                <TableCell>
                  <Typography color="textPrimary" variant="body1">
                    {person.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {person.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {person.city}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {person.username}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography color="textPrimary" variant="body1">
                    {person.website}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={<Link href={`/characters/${person.id}`}></Link>}
                  >
                    Edit
                  </Button>

                  <Button color="error" variant="contained" onClick={(e) => mutate(person.id)}>
                    Delete
                  </Button>

                  <Link href={`/characters/${person.id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
