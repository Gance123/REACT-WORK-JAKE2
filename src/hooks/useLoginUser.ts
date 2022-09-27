import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);

/*useContext(LoginUserContext)をuseLoginUser()を呼ぶだけで使用できる */
