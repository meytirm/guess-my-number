import { Alert, StyleSheet, Text, View } from 'react-native';
import UiTitle from '../ui/UiTitle';
import { useEffect, useState } from 'react';
import NumberContainer from '../game/NumberContainer';
import PrimaryButton from '../ui/PrimaryButton';
import UiCard from '../ui/UiCard';
import { Ionicons } from '@expo/vector-icons';
import InstructionText from '../ui/InstructionText';

function generateRandomNumberBetween(
  min: number,
  max: number,
  exclude: number,
) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction: 'higher' | 'lower') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      // Alert or handle the error
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <UiTitle>Opponent's Guess</UiTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <UiCard>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </UiCard>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

interface Props {
  userNumber: number;
  onGameOver: () => void;
}
