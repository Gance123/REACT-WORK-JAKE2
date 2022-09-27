import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    // usersのidとUserCardから廻ってきたidが一致する要素を返す

    setSelectedUser(targetUser ?? null);
    // targetUserがnullもしくはundefinedなら右辺を返す
  }, []);

  return { onSelectUser, selectedUser };
};
