import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";
import { addPoint } from "../utils/chart";

function Ticker() {
  const [price, setPrice] = useState({ value: 0, ticks: 0 });
  const [color, setColor] = useState("black");
  const prevPrice = useRef(price);
  const canvasRef = useRef();

  useEffect(() => {
    addPoint(canvasRef.current, prevPrice.current, price);
  }, [price]);

  useEffect(() => {
    const id = setInterval(() => {
      setPrice((price) => ({
        ticks: price.ticks + 1,
        value: makeRandomNumber(),
      }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prevPrice.current.value < price.value) {
      setColor("green");
    } else if (prevPrice.current.value > price.value) {
      setColor("red");
    } else {
      setColor("black");
    }
    prevPrice.current = price;
  }, [price]);

  return (
    <div>
      <h1>TickerChart</h1>
      <canvas ref={canvasRef} width={600} height={400} />
      <h2 style={{ color: color }}>Price: ${price.value}</h2>
    </div>
  );
}

export default Ticker;
