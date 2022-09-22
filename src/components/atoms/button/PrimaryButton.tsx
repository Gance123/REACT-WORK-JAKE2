import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      // disabled={{ueserID ==="" && true}}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

// Buttonをcomponentとして切り離すとき,onClickはpropsとして受け渡されるのが好ましい
// ・・・「押した時の動作」を用途によって変更できる
