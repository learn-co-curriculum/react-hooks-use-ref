import React from "react";
import Box from "./Box";
import CounterRef from "./CounterRef";
import CounterState from "./CounterState";
import Ticker from "./Ticker";
import TickerChart from "./TickerChart";

function App() {
  return (
    <>
      <CounterState />
      <CounterRef />
      <Ticker />
      <Box />
      <TickerChart />
    </>
  );
}

export default App;
