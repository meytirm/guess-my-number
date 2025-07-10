import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

function UiTitle({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

export default UiTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
});

interface Props {
  children: React.ReactNode;
}
