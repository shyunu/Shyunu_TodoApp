import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  //현재 날짜 불러오기
  const year = date.getFullYear();
  const month = date.getMonth() + 1; //month의 범위: 0~11
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;

  //StatusBar 높이
  const {top} = useSafeAreaInsets();

  return (
    <>
      {/* StatusBar 높이만큼 그 공간을 채워넣는다 */}
      {/* barStyle="light-content" : 상태바 정보 색상 밝게 */}
      <View style={[styles.statusBarPlaceholder, {height: top}]} /> 
      <StatusBar backgroundColor="#faa307" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#faa307',
  },
  block: {
    padding: 16,
    backgroundColor: '#faa307',
  },
  dateText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default DateHead;
