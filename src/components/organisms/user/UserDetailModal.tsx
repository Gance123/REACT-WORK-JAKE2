import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
// import { useUserUpdate } from "../../../hooks/useUserUpdate";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;

  const [updating, setUpdating] = useState<boolean>(false);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    // user = selectedUser
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const onClickUpdate = () => {
    setUpdating(true);
    onClose();
    setUpdating(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  onChange={onChangeUsername}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEl</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          {updating ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            isAdmin && (
              <ModalFooter>
                <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
              </ModalFooter>
            )
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
