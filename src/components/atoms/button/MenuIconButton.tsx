import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
  // 引数無しの返却値もない関数
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
/* IconButtonは @chakra-ui/icons　が必要 */
/* そこから使いたいアイコン(今回はHamburgerIcon)をimportする */

// Buttonをcomponentとして切り離すとき,onClickはpropsとして受け渡されるのが好ましい
// ・・・「押した時の動作」を用途によって変更できる
