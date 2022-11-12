import { useGetUser } from "../../../hooks/useUsers";
import { useRouter } from "next/router";
import { User } from "../../../components/userList/user";

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data, isLoading } = useGetUser(userId);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <User dataUser={data} />
    </>
  );
};

export default UserDetails;
