import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      // id = userId

      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            //res.dataがあれば
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin: isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ログインに失敗しました", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインに失敗しました", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
