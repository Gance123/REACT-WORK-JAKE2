import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };
// Userの型に　isAdmin: booleanの型も追加

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
  // 更新関数の型(useState等)
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
