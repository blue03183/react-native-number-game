import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const diviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center', // 세로정렬
    alignItems: 'center', // 가로 정렬
    marginTop: diviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
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
});
