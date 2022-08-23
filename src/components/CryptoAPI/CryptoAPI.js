import React, { useEffect } from 'react';
import './CryptoAPI.css';
import Button from 'react-bootstrap/Button';

const CryptoAPI = (
  data,
  setData,
  cryptoNames
) => {

  const cryptoMap = new Map();
  cryptoMap.set('btc', 'bitcoin');
  cryptoMap.set('eth', 'ethereum');

  const mainUrl = "https://api.coingecko.com/api/v3/coins/";

  const getListOfCoins = () => {
    const listOfCoins = [];

    data.data.map(coin => {
      const coinAndTicker = {name: cryptoMap.get(coin.asset.toLowerCase()), ticker: coin.asset.toLowerCase()};
      listOfCoins.push(coinAndTicker);
    });

    return listOfCoins;
  }

  useEffect(() => {
    const allCoins = getListOfCoins();
    const allUrlsAndTickers = []
    allCoins.map(coin => {
      const urlAndTicker = {url: mainUrl + coin.name, ticker: coin.ticker};
      allUrlsAndTickers.push(urlAndTicker);
    });

    Promise.all(
      allUrlsAndTickers.map(urlAndTicker =>
        fetch(urlAndTicker.url)
        .then(rest => rest.json())
      )
    ).then(results => {
      results.map(result => {
        setCurrPrice(data, result.symbol.toUpperCase(), getCurrMarketPrice(result));
      });
    });

  }, []);

  const setCurrPrice = (data, coinTicker, newPrice) => {

    data.setData(existingData => {
      return existingData.map(coin => {
        if (coin.asset === coinTicker) {
          return {...coin, price : newPrice};
        }
  
        return coin;
      });
    });
  }

  const getCurrMarketPrice = (fetchedResult) => {
    const {market_data : {current_price : {usd: currentPriceInUsd}}} = fetchedResult;
    return currentPriceInUsd;
  }

  return (
    <Button id="refresh" variant="success">Refresh</Button>
  )

}

export default CryptoAPI;
