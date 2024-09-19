import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const App = () => {
  const [user, setUser] = useState({ id: 1, name: 'Quynh', SD: 100000 });
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'COCA', price: 30000 },
    { id: 2, name: 'PEPSI', price: 50000 },
    { id: 3, name: 'FANTA', price: 70000 },
  ]);

  useEffect(() => {
    const loadUserData = () => {
      const data = storage.getString('user');
      return data ? JSON.parse(data) : user;
    };

    const userData = loadUserData();
    setUser(userData);
  }, []);

  const saveUserData = (data) => {
    storage.set('user', JSON.stringify(data));
  };

  const Nap = () => {
    if (amount) {
      const newSD = user.SD + parseFloat(amount);
      const updatedUser = { ...user, SD: newSD };
      setUser(updatedUser);
      saveUserData(updatedUser);
      setAmount('');
    }
  };

  const Mua = (item) => {
    if (user.SD >= item.price) {
      const newSD = user.SD - item.price;
      const updatedUser = { ...user, SD: newSD };
      setUser(updatedUser);
      saveUserData(updatedUser);
      alert(`Mua ${item.name} thành công!`);
    } else {
      alert('Số dư không đủ để mua hàng này.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ví của {user.name}</Text>
      <Text style={styles.balance}>Số dư hiện tại: {user.SD} VND</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nhập số tiền muốn nạp"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Nạp tiền" onPress={Nap} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name} - Giá: {item.price} VND</Text>
            <Button title="Mua" onPress={() => Mua(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
});

export default App;
