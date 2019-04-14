import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(currentCount => currentCount + 1);
  useEffect(() => {
    document.body.style.background = count == 5 ? 'hotpink' : 'lightgreen';
  }, [count]);
  return (
    <div>
      <button data-testid="counter-button" onClick={ increment }>Click Me</button>
      <p data-testid="click-count">You clicked {count} times</p>
    </div>
  );
}
