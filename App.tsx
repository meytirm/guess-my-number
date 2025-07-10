import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import StartGameScreen from './components/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(value: number) {
    setGameIsOver(false);
    setUserNumber(value);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={['#c34195', '#571f4d', '#3e0b30']}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/img.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView style={{ ...styles.rootScreen, ...styles.safeAreaView }}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  safeAreaView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
