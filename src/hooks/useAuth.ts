import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { showMessage } = useMessage();

  const login = useCallback(
    (id: string) => {
      // id = userId
      setLoading(true);

      axios
        .get<Array<User>>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            //res.dataがあれば
            history.push("/home");
          } else {
            showMessage({ title: "ログインに失敗しました", status: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインに失敗しました", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, showMessage]
  );

  return { login, loading };
};
