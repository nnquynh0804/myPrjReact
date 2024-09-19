import React, { useState,useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { recharge, ReName } from '../src/slice';

function App() {
  const dispatch = useDispatch();
  const [Inputname, setInputName] = useState('');
  const [IpBalance, setIPBalance] = useState(0);
  const [id, setId] = useState(1);
  const [accounts,setAccounts]=useState([]);

  const fetchAccounts = () => {
    const url = 'http://172.20.10.7:3000/accounts';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
  const updateName = () => {
    dispatch(ReName(Inputname));
    setTimeout(() => {
    const url = 'http://172.20.10.7:3000/updateAccount';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: Inputname,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Alert.alert('Success', 'Account updated successfully!');
          fetchAccounts();
        } else {
          Alert.alert('Error', data.message);
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Loi roi');
        console.error('Error:', error);
      });
    },0);
  };


  const updateBalance = () => {
    dispatch(recharge(IpBalance));
    setTimeout(() => {
    const url = 'http://172.20.10.7:3000/updateBalance';
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        accountBalance: IpBalance,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Alert.alert('Success', 'updated successfully!');
          fetchAccounts();
        } else {
          Alert.alert('Error', data.message);
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Loi roi');
        console.error('Error:', error);
      });
    },0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách tài khoản:</Text>
      {accounts.map((account) => (
        <Text key={account.id} style={styles.account}>
          ID: {account.id}, Name: {account.name},TK :{account.accountBalance}
        </Text>
      ))}
      <Button title="Lấy lại thông tin" onPress={fetchAccounts} />
      <TextInput
        style={styles.input}
        placeholder="Nhập id"
        onChangeText={(text) => {
          const numericValue = Number(text);
          setId(numericValue);}}
        value={id}
      />
       <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        onChangeText={setInputName}
      />
      <Button onPress={updateName} title="Cập nhật" />
      <TextInput
        style={styles.input}
        placeholder="Nhập số tiền"
        onChangeText={(text) => {
          const numericValue = Number(text);
          setIPBalance(numericValue);}}
      />
      <Button onPress={updateBalance} title="Nạp" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop:20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default App;
