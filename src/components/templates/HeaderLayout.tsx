import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
  // childrenの型はReactNode
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});