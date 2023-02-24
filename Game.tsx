import {
    Box,
    Text,
    Flex,
    Button,
    Image,
  } from "native-base";
import { Round } from './rounds';
import { useState } from "react";
import { Alert } from "react-native";


type Props={
    rounds: Round[]
} 

export default function Game({rounds}: Props) {

    const [points, setPoints] = useState<number>(0);
    const [currentRound, setCurrentRound] = useState<
      Round & { roundNumber: number }
    >({ ...rounds[0], roundNumber: 0 });
  
    const handleOnResetGame = () => {
      setCurrentRound({ ...rounds[0], roundNumber: 0 });
      setPoints(0);
    };

    const getRoundNumber = (round: Round) => {
      return rounds.findIndex((item) => item.id === round.id);
    };
  
    const handleOnSelectOption = (selectedOption: string) => {
      if (selectedOption === currentRound.correctOption) setPoints(points + 1);
  
      const nextRoundNumber = currentRound.roundNumber + 1;
  
      if (nextRoundNumber >= rounds.length)
        return Alert.alert(
          "Game Over",
          "Do you want to restart the game?",
          [
            {
              text: "Yes",
              onPress: () => handleOnResetGame(),
            },
          ],
          { cancelable: false }
        );
  
      const nextRound = rounds[currentRound.roundNumber + 1];
      setCurrentRound({ ...nextRound, roundNumber: getRoundNumber(nextRound) });
    };
  
    return (
      <>
        <Flex
          safeArea
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingX={12}
        >
          <Text fontSize="3xl" fontWeight="semibold" marginTop={10}>
            ROUND {currentRound.roundNumber + 1}/{rounds.length}
          </Text>
          <Text marginBottom={10}>{points} pts</Text>
  
          <Image
            key={currentRound.id}
            mx={2}
            size="2xl"
            source={{
                uri:`https://dubleen-api.paas.idl-apps.com/api/files/rounds/${currentRound.id}/${currentRound.image}`
            }}
          />
  
          <Box marginTop={24} width="full">
            {currentRound.options.map((item) => (
              <Button
                width="full"
                marginBottom={4}
                key={item}
                onPress={() => handleOnSelectOption(item)}
              >
                {item.trim()}
              </Button>
            ))}
          </Box>
        </Flex>
      </>
    );
}