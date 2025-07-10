import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }: Props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{
          color: Colors.primary600,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
}
