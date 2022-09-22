import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  image: string;
  name: string;
  fulllname: string;
};

export const UserCard: FC<Props> = memo((props) => {
  const { image, name, fulllname } = props;
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
