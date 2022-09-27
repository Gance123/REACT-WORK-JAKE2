import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  image: string;
  name: string;
  fulllname: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, image, name, fulllname, onClick } = props;
  return (
    <Box
      as="a"
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
      // ➂propsに渡された関数を実行する
      // ➃渡された関数は引数を取る関数なので適した引数を設定する
      // ⑤適した引数(id)は親コンポで設定したusers.idである
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={image}
          alt="画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fulllname}
        </Text>
      </Stack>
    </Box>
  );
});
