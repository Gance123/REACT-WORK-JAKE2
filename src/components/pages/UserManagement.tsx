/*eslint-disable react-hooks/exhaustive-deps*/
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);
  //画面表示時に一回だけ動くようにしたいのでuseEffect + []
  // getUsers()・・・axiosで取得したデータをsetUsersでusersに格納していく関数

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                image="https://source.unsplash.com/rondom"
                name={user.name}
                fulllname={user.username}
                // =res.date.username
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
