import {useLayoutEffect, useRef} from 'react';

interface useUpdateLayoutEffectProps {
  callback: () => void;
  dependencies: any[];
}

export default function useUpdateLayoutEffect(
  callback: () => void,
  dependencies: any[],
) {
  const firstRenderRef = useRef(true);
  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
