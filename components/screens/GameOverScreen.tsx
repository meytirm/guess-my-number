import { Image, StyleSheet, Text, View } from 'react-native';
import UiTitle from '../ui/UiTitle';
import Colors from '../../constants/colors';
import PrimaryButton from '../ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: Props) {
  return (
    <View style={styles.rootContainer}>
      <UiTitle>Game Over!</UiTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/game-over.png')}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: 'white',
  },
});

interface Props {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}
