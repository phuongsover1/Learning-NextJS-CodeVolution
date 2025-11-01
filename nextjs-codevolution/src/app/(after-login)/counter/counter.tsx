"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Count up
        </button>
      </div>
    </>
  );
}
