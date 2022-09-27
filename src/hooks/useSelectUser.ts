import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザ情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // onClickUserで発動する関数
  const onSelectUser = useCallback((props: Props) => {
    //onClickUserでidとusersがpropsに渡ってくる
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    // users配列の中から(user)を見つけたい =>(どんな？)　Array<User>の中のid === UserCardに設定したid
    // ・・・Usercardに設定したidをもとに、Array<User>のなかの特定のuserを見つける

    setSelectedUser(targetUser ?? null);
    // targetUserがnullもしくはundefinedなら右辺を返す
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
