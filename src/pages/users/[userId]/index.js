import { useGetUser } from "../../../hooks/useUsers";
import { useRouter } from "next/router";
import { UserDetail } from "../../../components/users/userDetail";

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data, isLoading } = useGetUser(userId);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <UserDetail dataUser={data} />
    </>
  );
};

export default UserDetails;
