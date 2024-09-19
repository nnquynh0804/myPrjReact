import React, { useState,useEffect } from 'react';
import { View, Text, Button,ActivityIndicator } from 'react-native';

const FetchPrice = ({name1}) => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(null);
  const url = 'https://api.binance.com/api/v3/ticker/price';
  useEffect(() => {
    const fetchPrice = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}?symbol=${name1}`);
        const data = await response.json();
        setPrice(data.price);
      } catch (error) {
        setPrice('Error');
      } finally {
        setLoading(false);
      }
    };
    fetchPrice();
    const intervalId = setInterval(() => {
      fetchPrice();
    }, 60000);
    return () => clearInterval(intervalId);
  }, [name1]);
  return (
    <View>
      {loading ? (
      <ActivityIndicator size="small" color="#00f" />
    ) :(
    <View style={{flexDirection:'column',alignItems:'flex-end',width:'100%'}}>
      <Text style={{ fontWeight:'bold',color:'black',fontSize:14}}>
        {price !== null ? `${price}`: 'No Data'}
      </Text>
      <Text style={{fontSize:12}}>
      {price !== null ? `${price}$` : 'No Data'}
      </Text>
    </View>
    )}
    </View>
  );
};

export default FetchPrice;

