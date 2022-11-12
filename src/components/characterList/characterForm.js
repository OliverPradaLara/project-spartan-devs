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
import { useCreateCharacter } from "../../hooks/useCharacters";

export const CharacterForm = ({ dataCharacter }) => {
  console.log("revisando el datacharacter", dataCharacter);
  /* estados de los inputs */
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [city, setCity] = useState("");

  const [username, setUsername] = useState("");

  const [website, setWebsite] = useState("");

  /* Funcion para añadir a la db con reactquery */

  const { mutate } = useCreateCharacter();

  /* funcion del submit */

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email, city, username, website };
    mutate(newUser);

    /*Validacion para setear el formulario*/
    setName("");
    setEmail("");
    setCity("");
    setUsername("");
    setWebsite("");

    console.log(newUser);
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
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="email">Your Email</InputLabel>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="city">Your City</InputLabel>
            <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </FormControl>
          <FormControl
            sx={{
              mb: 5,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="username">Your Username</InputLabel>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl
            sx={{
              mb: 10,
              width: "60%",
            }}
          >
            <InputLabel htmlFor="website">Your Website</InputLabel>
            <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
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
