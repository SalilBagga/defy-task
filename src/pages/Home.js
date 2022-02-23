import React, { useEffect, useState } from 'react';

//componenets
import UserInfo from '../components/UserInfo';
import IdeaCoins from '../components/IdeaCoins';
import TrendingCoins from '../components/TrendingCoins';
import NonTrendingCoins from '../components/NonTrendingCoins';

// import io from 'socket.io-client';
import socketIOClient from 'socket.io-client';
import eventEmitter from '../utils/eventEmitter';

export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    eventEmitter.emit('allCoinsGG', (data) => {
      console.log('allCoinsGG', data);
    });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 grad-bg  text-white ">
        {response && response}
        <UserInfo />
        <IdeaCoins />
        <TrendingCoins />
        <NonTrendingCoins />
      </div>
    </div>
  );
}
