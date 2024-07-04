import React, { useEffect, useState } from "react";

//CUSTOM HOOK
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    function handleWindowResize (){
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export const Component1 = () => {
  const windowSize = useWindowSize();

  return <div>Component1 : {windowSize}</div>;
};

export const Component2 = () => {
  const windowSize = useWindowSize();

  return <div>Component2 : {windowSize}</div>;
};
