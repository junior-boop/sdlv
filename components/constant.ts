import { useState, useEffect } from 'react';

export const log = (x? : any) => console.log('je fonctionne', x)


// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () : void =>  {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export function UI() {

  const width : number | undefined = useWindowSize().width
  const height : number | undefined = useWindowSize().height
  const isUndefined = typeof width === undefined

  const ui = {
    width : width,
    height : height,
    logo : {
      width : 62,
      height : 62
    }, 
    actuItemUI : {
      width : isUndefined ? null : 32.943 * width / 100,
      height : isUndefined ? null : 32.943 * width / 100 
    }, 
    miniActuItemUI : {
      width : isUndefined ? null : 32.943 * width / 100,

      widthImg : isUndefined ? null : 0.10981 * width,
      heightImg : isUndefined ? null : 0.10981 * width,
    }
  }

  return ui
}