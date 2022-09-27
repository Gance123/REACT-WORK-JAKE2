/*eslint-disable react-hooks/exhaustive-deps*/
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  //画面表示時に一回だけ動くようにしたいのでuseEffect + []
  // getUsers()・・・axiosで取得したデータをsetUsersでusersに格納していく関数
  useEffect(() => getUsers(), []);

  /*クリックしたときにuser.idをonSelecteUserのpropsに渡す関数 */
  // ①idを引数に取る関数を親コンポで作る
  // ⑥子コンポに　id=users.idが設定され、それを引数に取る
  const onClickUser = useCallback(
    (id: number) => {
      // idとusersをpropsとして渡す
      onSelectUser({ id: id, users: users, onOpen: onOpen });
    },
    [users, onSelectUser, onOpen]
  );
  // propsとして渡す関数,もしくは更新されない関数は再レンダリングされないようにメモ化

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
                id={user.id}
                image="https://source.unsplash.com/rondom"
                name={user.username}
                fulllname={user.name}
                // = res.date.username

                // ② ①をpropsとして子コンポに渡す
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
