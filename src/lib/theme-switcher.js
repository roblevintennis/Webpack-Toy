import React, { useEffect } from 'react';

export const useBackgroundSwitcher = count => {
  useEffect(() => {
    document.body.style.background = count > 0 && count % 5 === 0 ? 'hotpink' : 'lightgreen';
  }, [count]);
}
