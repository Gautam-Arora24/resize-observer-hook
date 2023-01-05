import { useState, useEffect, useRef } from 'react';

const useResizeObserver = (option = 'contentRect') => {
  const ref = useRef(null);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const element = ref.current
  useEffect(() => {
    if (element) {
      const observer = new ResizeObserver((entries) => {
        handleResize(entries);
      });
      observer.observe(element);

      // Callback fired when component is unmounted
      return () => {
        observer.disconnect();
      };
    }
    // Added this return for eslint rule -> no-consisten-return
    return undefined;
  },[element]);

  function handleResize(entries) {
    for (const entry of entries) {
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);
    }
  }

  return [ref, width, height];
};

export default useResizeObserver;
