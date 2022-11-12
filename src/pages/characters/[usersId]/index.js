import { useGetCharacter } from "../../../hooks/useCharacters";
import { useRouter } from "next/router";
import { CharacterForm } from "../../../components/characterList/characterForm";
import { Character } from "../../../components/characterList/character";

const CharacterDetails = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data, isLoading } = useGetUser(userId);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <Character dataCharacter={data} />
    </>
  );
};

export default CharacterDetails;
