import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

const CardContainer = () => {
  const [cryptoData, setCryptoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const fetchCryptoPrices = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      setCryptoData(data.bpi);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card_container">
      {Object.keys(cryptoData).map((currencyCode, index) => (
        <Card
          key={index}
          code={currencyCode}
          symbol={cryptoData[currencyCode].symbol}
          rate={cryptoData[currencyCode].rate}
        />
      ))}
      {isLoading && <ShimmerCard />}
    </div>
  );
};

export default CardContainer;
