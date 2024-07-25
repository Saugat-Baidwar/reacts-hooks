// App.js
import React, { useState, useEffect } from "react";

function App() {
  // const [products, setProducts] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await fetch("https://fakestoreapi.com/products");

      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
        // console.log("error with fetch data");
      }

      // const response = await productResponse.json();
      // setData(response);
      // console.log("data.....", response);
    };
    fetchData();
  }, []);

  const handleAddProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    if (res.ok) {
      alert("sucessfully new product added");
    }
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    // console.log("clicked");
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <button
        onClick={handleAddProduct}
        className="bg-red-600 text-white rounded-2xl p-3 m-4"
      >
        Add New Item
      </button>
      <div>
        <h1>products</h1>
        <ul>
          {data.map((products) => (
            <li key={products.id}>
              <h2>{products.title}</h2>
              <h2>{products.price}</h2>
              <h2>{products.description}</h2>
            </li>
            // <>
            //   <li>{products.title}</li>
            //   <li>{products.price}</li>
            //   <li>{products.description}</li>
            // </>
          ))}
        </ul>
      </div>
    </>
    // <div>
    //   <h1>Products</h1>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}>
    //         <h2>{product.title}</h2>
    //         <p>{product.description}</p>
    //         <p>${product.price}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;
