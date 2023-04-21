import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const diviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent500,
    borderWidth: 4,
    padding: diviceWidth < 380 ? 12 : 24,
    margin: diviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: diviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});
