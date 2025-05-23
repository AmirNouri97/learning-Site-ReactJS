import React, { useEffect, useState } from "react";

export default function LandingCount({ count }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1);
    if (counter === count) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <span className="landing-status__count">{counter.toLocaleString()}</span>
  );
}
