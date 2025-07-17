import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../../constants/colors';
import UiTitle from '../ui/UiTitle';
import UiCard from '../ui/UiCard';
import InstructionText from '../ui/InstructionText';

function StartGameScreen({ onConfirmNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { height } = useWindowDimensions();

  function numberInputHandler(value: string) {
    setEnteredNumber(value);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
      return;
    } else {
      onConfirmNumber(chosenNumber);
    }
  }

  const marginTopDistance = height < 420 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <UiTitle>Guess My Number</UiTitle>
      <UiCard>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </UiCard>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

interface Props {
  onConfirmNumber: (number: number) => void;
}
