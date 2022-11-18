import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useCreateUser, useUpdateUser } from "../../hooks/useUsers";

export const UserForm = ({ userData }) => {
  /* estados de los inputs */
  const [user, setUser] = useState({
    name: userData?.name,
    email: userData?.email,
    city: userData?.city,
    username: userData?.username,
    website: userData?.website,
  });
  const { name, email, city, username, website } = user;
  /* Funcion para añadir a la db con reactquery */

  const { mutate: mutateCreateUser } = useCreateUser();
  const { mutate: mutateUpdateUser } = useUpdateUser();
  /* funcion del submit */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData?.id) {
      user.id = userData.id;
      mutateUpdateUser(user);
    } else {
      mutateCreateUser(user);
    }
  };

  const handleChange = (e) => {
    let property = e.target.name;

    setUser({
      ...user,
      [property]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: "50%",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          color="primary"
          sx={{
            textAlign: "center",
          }}
        >
          Form
        </Typography>
      </Box>

      <form action="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="name">Your Name</InputLabel>
            <Input id="name" name="name" value={name} onChange={handleChange} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="email">Your Email</InputLabel>
            <Input id="email" name="email" value={email} onChange={handleChange} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="city">Your City</InputLabel>
            <Input id="city" name="city" value={city} onChange={handleChange} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="username">Your Username</InputLabel>
            <Input id="username" name="username" value={username} onChange={handleChange} />
          </FormControl>
          <FormControl
            sx={{
              mb: 10,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="website">Your Website</InputLabel>
            <Input id="website" name="website" value={website} onChange={handleChange} />
          </FormControl>
          <ButtonGroup variant="contained" color="primary">
            <Button type="submit" onClick={handleSubmit}>
              Send
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </Box>
  );
};
