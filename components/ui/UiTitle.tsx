import { StyleSheet, Text } from 'react-native';

function UiTitle({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

export default UiTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'open-sans',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 8,
    maxWidth: '80%',
    width: 300,
  },
});

interface Props {
  children: React.ReactNode;
}
