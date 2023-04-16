import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none" // 자동 대문자 변환 끄기
        autoCorrect={false} // 자동 수정 끄기
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center', // 세로정렬
    alignItems: 'center', // 가로 정렬
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // 안드로이드 전용 그림자 효과
    shadowColor: 'black', // 아이폰 전용 그림자 색
    shadowOffset: {
      // 아이폰 전용 그림자 가로 세로 크기설정
      width: 10,
      height: 10,
    },
    shadowRadius: 6, // 아이폰 전용 그림자가 얼마나 번지는지 (선명도)
    shadowOpacity: 1, // 아이폰 전용 그림자 투명도
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
