import React, { useEffect, useState } from "react";

export default function LandingCount({ count, start }) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 10);
    if (counter === count) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <span className="landing-status__count">{counter.toLocaleString()}</span>
  );
}
