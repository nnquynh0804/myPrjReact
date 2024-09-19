import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = ({txt,name1}) => {
  const [apr, setApr] = useState([]);
  const url ='http://172.20.10.7:3000/api/coins'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}?symbol=${name1}`);
        const data = await response.json();
  
        const coin = data.find(coin => coin.id === name1);
        if (coin) {
          setApr(coin.apr);
        } else {
          console.error('Không tìm thấy coin');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [name1]);
  

  return (
      <View style={{flexDirection:'row',alignItems:'center'}} >
        <Text style={{textDecorationLine:'underline',fontSize:12,padding:2}}>{txt}</Text>
        <Text style={{fontWeight:'bold',color:'#00e68a',marginEnd:8}}>{apr}</Text>
      </View>
  );
};

export default App;
