import React, { useEffect, useState } from "react";

const StateInitialize = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="mx-auto w-fit p-2 my-4 text-center">
        {/* use of "?" operator while fetching data */}
        <h1>{data?.products[0].brand}</h1>
        <img
          className="h-[8rem] w-[8rem] border-2 border-black my-2"
          src={data?.products[0].images[0]}
          alt=""
        />

        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h1>{data?.products[1].brand}</h1>
            <img
              className="h-[8rem] w-[8rem] border-2 border-black my-2"
              src={data?.products[1].images[0]}
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
};

export default StateInitialize;
