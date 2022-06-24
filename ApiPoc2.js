import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiPoc2() {
  const [totalData, setTotalData] = useState([]);

  const url1 = "https://jsonplaceholder.typicode.com/users";
  const url2 = "https://jsonplaceholder.typicode.com/albums";
  const url3 = "https://jsonplaceholder.typicode.com/posts";
  const url4 = "https://jsonplaceholder.typicode.com/comments";
  const url5 = "https://jsonplaceholder.typicode.com/todos";

  const allUrls = [url1, url2, url3, url4, url5];

  const apiPoc = async () => {
    try {
      const result = await Promise.all(
        allUrls.map((url) => axios.get(url).then((res) => res.data))
      );

      setTotalData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiPoc();
  }, []);
  return (
    <div>
      {totalData.length > 0 ? (
        totalData[0].map((item) => <h1 key={item.id}>{item.name}</h1>)
      ) : (
        <h2>Data not loaded</h2>
      )}
    </div>
  );
}

export default ApiPoc2;
