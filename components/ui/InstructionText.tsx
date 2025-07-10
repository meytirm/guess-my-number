import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children, style = {} }: Props) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

interface Props {
  children?: React.ReactNode;
  style?: object;
}
