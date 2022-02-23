import React from 'react';

export default function Coin({ Svg, coinname, based }) {
  return (
    <div className="last:border-b-0 border-b-1 border-defy-grey w-[60%] flex items-center py-4 pr-4">
      <Svg className="mr-4" />
      <h1 className="flex flex-col text-left">
        {coinname}
        <span className="text-defy-light text-sm">{based}</span>
      </h1>
    </div>
  );
}
