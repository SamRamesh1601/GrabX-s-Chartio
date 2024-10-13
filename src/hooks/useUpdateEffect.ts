import {useEffect, useRef} from 'react';

interface useUpdateEffectProps {
  callback: () => void;
  dependencies: any[];
}

export default function useUpdateEffect(
  callback: () => void,
  dependencies: any[],
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
