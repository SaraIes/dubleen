import { NativeBaseProvider, Text, Flex } from "native-base";
import Game from "./Game";
import { useEffect, useState } from "react";
import Login from "./Login";

export default function App() {
  const [rounds, setRounds] = useState([]);

  console.log(rounds);
  useEffect(() => {
    fetch(
      "https://dubleen-api.paas.idl-apps.com/api/collections/rounds/records"
    )
      .then((response) => response.json())
      .then((data) =>
        setRounds(
          data.items
            .map((item) => ({
              ...item,
              options: item.options.split(","),
            }))
            .sort((a, b) => 0.5 - Math.random())
        )
      );
  }, []);

  if (!rounds.length)
    return (
      <NativeBaseProvider>
        <Flex
          safeArea
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingX={12}
        >
          <Text>loading...</Text>
        </Flex>
      </NativeBaseProvider>
    );

  return (
    <NativeBaseProvider>
      <Login>
        <Game rounds={rounds} />
      </Login>
    </NativeBaseProvider>
  );

}
