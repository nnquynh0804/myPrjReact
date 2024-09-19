import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ReName, recharge} from './slice';

function App() {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{input}</h1>
      <TextInput
        placeholder="Nhập dữ liệu vào đây"
        onChangeText={(value) => dispatch(ReName(value))}
        value={input}
      />
      <Text>
        Bạn đã nhập: {input}
      </Text>
    </div>
  );
}

export default App;
