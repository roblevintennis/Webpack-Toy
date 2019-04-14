import React, { useState, useEffect } from 'react';

function useBackgroundSwitcher(count) {
  useEffect(() => {
    document.body.style.background = count == 5 ? 'hotpink' : 'lightgreen';
  }, [count]);
}

export default function Counter() {
  const [count, setCount] = useState(0);
  useBackgroundSwitcher(count);
  return (
    <div>
      <button data-testid="btn" onClick={() => setCount(count + 1)}>Click Me</button>
      <p data-testid="count">You clicked {count} times</p>
    </div>
  );
}
