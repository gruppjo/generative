import { useState, useEffect } from 'preact/hooks';

// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
// alternative: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

export const useInViewport = (ref) => {
  // Initialize state with undefined width so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [ visible, setVisible ] = useState(undefined);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();


      // partially visible
      setVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Call handler right away so state gets updated with initial window size
    handleScroll();

    // Remove event listener on cleanup
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [ref]); // Empty array ensures that effect is only run on mount

  return visible;
};

