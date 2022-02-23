import React from 'react';

import { ReactComponent as BTC } from '../assets/BTC.svg';
import { ReactComponent as Ethereum } from '../assets/Ethereum.svg';
import { ReactComponent as XRP } from '../assets/XRP.svg';

//componenets
import Coin from './Coin';
export default function NonTrendingCoins() {
  const object = [
    { Svg: BTC, coinname: 'Bitcoin', based: 'BTC' },
    { Svg: Ethereum, coinname: 'Ethereum', based: 'BTC' },
    { Svg: XRP, coinname: 'XRP', based: 'XRP' },
    { Svg: BTC, coinname: 'Bitcoin', based: 'BTC' },
  ];
  return (
    <div className=" min-h-[50vh] ">
      <div className="pb-4 text-left md:pt-2">
        <h1 className="pl-6">Non trending coins</h1>
      </div>
      <div>
        <div className="px-10 ">
          {object &&
            object.map((data, index) => (
              <Coin key={index} Svg={data.Svg} coinname={data.coinname} based={data.based} />
            ))}
        </div>
      </div>
    </div>
  );
}
