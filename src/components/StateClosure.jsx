import React, { useEffect, useState } from "react";

const StateClosure = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  //NOT WORKING
  useEffect(() => {
    setInterval(() => {
      console.log("Set Interval Called");
      setCount3(count3+1);
    }, 1000);
  }, []);

  //WORKING
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Set Interval Called");
      setCount1(count1 + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [count1]);

  //WORKING
  useEffect(() => {
    setInterval(() => {
      console.log("Set Interval Called");
      setCount2(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="mx-auto w-fit p-2 my-4 text-center text-2xl font-semibold">
        Counter: {count1}
      </h1>
      <h1 className="mx-auto w-fit p-2 my-4 text-center text-2xl font-semibold">
        Counter: {count2}
      </h1>
      <h1 className="mx-auto w-fit p-2 my-4 text-center text-2xl font-semibold">
        Counter: {count3}
      </h1>
    </>
  );
};

export default StateClosure;
