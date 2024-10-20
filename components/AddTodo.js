import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  // 누르는 기능 : 입력값 초기화, 키보드 닫기
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  // + 버튼
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress} //enter눌렀을 때 호출되는 함수
        returnKeyType="done" //enter타입 지정(done = 완료)
      />
      {/* TouchableOpacity: 터치할 수 있는 영역  */}
      {/* Props: 터치했을 떄의 투명도(기본값 0.2) */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#ffba08',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#f48c06',
    borderRadius: 24,
  },
  circleWrapper: {
    //안드로이드에서 터치했을 때 넘치는 물결효과 제어(원안에서만 효과)
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
