import React, { useEffect, useState} from "react";
import { View, Text, TouchableOpacity,ActivityIndicator } from "react-native";
import styles from "./style";

const Price24h = ({ name1 }) => {
  const [pr24h, setPr24h] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://api.binance.com/api/v3/ticker/24hr";

  useEffect(() => {
    const fetch24h = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        const pairData = data.find(item => item.symbol === name1);
        if (pairData) {
          const priceChangePercent = parseFloat(pairData.priceChangePercent);
          setPr24h(priceChangePercent)
        } else {
          setPr24h("Data not found");
        }
      } catch (error) {
        setPr24h("Error");
      } finally {
        setLoading(false);
      }
    };
    fetch24h();
    const intervalId = setInterval(() => {
        fetch24h();
      }, 60000);
      return () => clearInterval(intervalId);
  }, [name1]);
  return (
    <View>
    {loading ? (
      <ActivityIndicator size="small" color="#00f" />
    ) :(<View
        style={{
          height: 30,
          width: 90,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          backgroundColor: pr24h > 0 ? "#00e673" : "#ff6666",
          marginEnd: 14,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
          {pr24h > 0 ? "+" : ""}{pr24h.toFixed(2)}%
        </Text>
      </View>
      )}
    </View>
  );
};

export default Price24h;
