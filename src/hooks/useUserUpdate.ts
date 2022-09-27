import { useCallback, useEffect, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  user: User | null;
  onClose: () => void;
};
export const useUserUpdate = (props: Props) => {
  const { onClose, user } = props;

  const [updating, setUpdating] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUserUpdate = useCallback(() => {
    setUpdating(true);

    onClose();
  }, [onClose]);

  return { onClickUserUpdate, updating, username, name, email, phone };
};
