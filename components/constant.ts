import { useState, useEffect } from 'react';

export const log = (x? : any) => console.log('je fonctionne', x)


// Hook
export function useWindowSize()  {

  const [windowSize, setWindowSize]  = useState({
    width : 0,
    height : 0
  });

  useEffect(() => {

    if (typeof window !== 'undefined') {

      const handleResize = () : void =>  {

        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}


export function UI() {

  const width : number  = useWindowSize().width
  const height : number  = useWindowSize().height
  const isUndefined = typeof width === undefined

  const ui = {
    width : width,
    height : height,
    container : isUndefined ? '85vw' : 0.85 * width,
    radui : isUndefined ? 12 : 0.00878477 * width,
    padding : isUndefined ? 5 : 0.00366 * width,
    _50px : isUndefined ? 50 : 0.037 * width,
    logo : {
      width : 62,
      height : 62
    }, 
    actuItemUI : {
      width : isUndefined ? '100%' : 32.943 * width / 100,
      height : isUndefined ? '100%' : 32.943 * width / 100,
      heightMask : isUndefined ? '100%' : 0.1647145 * width,
      _150px : isUndefined ? 150 : 0.109809 * width,
    }, 
    horizontalActuItemUI : {
      width : isUndefined ? '100%' : 32.943 * width / 100,
      height : isUndefined ? '100%' : 0.10981 * width,
      widthImg : isUndefined ? '100%' : 0.10981 * width,
      heightImg : isUndefined ? '100%' : 0.10981 * width,
      widthContent : isUndefined ? '100%' : 0.21962 * width
    },
    miniActuItemUI : {
      width : isUndefined ? '100%' : 0.18302 * width,
      height : isUndefined ? '100%' : 0.32943 * width,
      widthImg : isUndefined ? '100%' : 0.18302 * width,
      heightImg : isUndefined ? '100%' : 0.18302 * width,
    },
    predictableItems : {
      minHeight : isUndefined ? 70 : 0.05124451 * width,
      _200px : isUndefined ? 200 : 0.1464128 * width,
    },
    fonts : {
      BigTitle : isUndefined ? 36 : 0.02635432 * width,
      LittleTitle : isUndefined ? 24 : 0.01757 * width,
      normalText : isUndefined ? 14 : 0.0102489 * width,
      littleText : isUndefined ? 12 : 0.00878477 * width,
      _16px : isUndefined ? 16 : 0.011713 * width,
    }
    
  }

  return ui
}