import { Button, Flex, Input, Text } from "native-base";
import { Round } from "./rounds";
import { useState } from "react";
import { Alert } from "react-native";
import { getPocketBaseInstance } from "./pocketbase";
import PocketBase from "pocketbase";

export default function Login({ children }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState(null);

  const handleOnEmailChange = (text) => setEmail(text);
  const handleOnPasswordChange = (text) => setPassword(text);

  const handleOnRegister = async () => {
    await getPocketBaseInstance().collection("users").create({
      email,
      password,
      passwordConfirm: password,
    });
    await handleOnLogin();
  };

  const handleOnLogin = async () => {
    const login = await getPocketBaseInstance()
      .collection("users")
      .authWithPassword(email, password);

    setUser(login);
  };

  const handleOnLogOut = async () => {
    const login = await getPocketBaseInstance()
      .authStore
      .clear();

    setUser(null);
  };

  if (user?.token)
    return (
      <>
        {children}
        <Button onPress={handleOnLogOut}>Logout</Button>
      </>
    );

  return (
    <>
      <Flex
        safeArea
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingX={12}
        paddingY={32}
      >
        <Text fontSize={30} fontWeight="bold" color={"#2596be"} marginBottom={8}>Log in</Text>
        <Input margin={2} placeholder="email" type="text" onChangeText={handleOnEmailChange} />
        <Input margin={2} placeholder="password" type="password" onChangeText={handleOnPasswordChange} />
        <Button margin={2} onPress={handleOnLogin}>Login</Button>
        <Button margin={2} onPress={handleOnRegister}>Register</Button>
      </Flex>
    </>
  );
}
