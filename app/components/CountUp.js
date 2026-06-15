"use client";

import { useState, useEffect } from "react";

export default function CountUp({ end, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const steps = 60;
    const increment = end / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 25);

    return () => clearInterval(timer);
  }, [start, end]);

  return <>{count}{suffix}</>;
}