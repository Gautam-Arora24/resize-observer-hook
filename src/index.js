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
      if (
        option === 'borderBoxSize' &&
        entry.borderBoxSize &&
        entry.borderBoxSize.length > 0
      ) {
        setHeight(entry.borderBoxSize[0].blockSize);
        setWidth(entry.borderBoxSize[0].inlineSize);
      } else if (
        option === 'contentBoxSize' &&
        entry.contentBoxSize &&
        entry.contentBoxSize.length > 0
      ) {
        setHeight(entry.contentBoxSize[0].blockSize);
        setWidth(entry.contentBoxSize[0].inlineSize);
      } else {
        setHeight(entry.contentRect.height);
        setWidth(entry.contentRect.width);
      }
    }
  }

  return [ref, width, height];
};

export default useResizeObserver;
