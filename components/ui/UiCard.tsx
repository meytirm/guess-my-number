import { StyleSheet, View } from 'react-native';

function UiCard({ children }: Props) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default UiCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    backgroundColor: '#4e0329',
    // flexGrow: 1,
    // alignSelf: 'flex-start',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

interface Props {
  children: React.ReactNode;
}
