import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './src/redux/AppRedux/counterSlice';
const App = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the count {count}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(increment())}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Number increment"
        keyboardType="numeric"
        onChangeText={e => setNumber(e)}
        onSubmitEditing={() => dispatch(incrementByAmount(Number(number)))}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(incrementByAmount(Number(number)))}>
        <Text>Increase {number}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
  },
});
