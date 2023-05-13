import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./cart";

const Dashboard = () => {
  const [bikes, setBikes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Agregamos el estado del carrito

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("Se agregó la siguiente bicicleta al carrito:", item);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    console.log("Se eliminó la siguiente bicicleta del carrito:", item);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setBikes(response.data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="center-content">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body" style={{ overflowY: "scroll", maxHeight: "500px" }}>
                <h1 className="card-title mb-4">Bienvenido al dashboard</h1>
                <button className="btn btn-primary" onClick={() => setIsCartOpen(!isCartOpen)}>
                  Carrito de compras ({cartItems.length})
                </button>
                <hr />
                <h2 className="card-subtitle mb-2 text-muted">Bicicletas disponibles:</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre de la bicicleta</th>
                      <th>Precio</th>
                      <th>Marca</th>
                      <th>Color</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bikes.map((bike) => (
                      <tr key={bike.id}>
                        <td>{bike.id}</td>
                        <td>{bike.title}</td>
                        <td>{bike.price}</td>
                        <td>{bike.brand}</td>
                        <td>{bike.color}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => addItemToCart(bike)}
                          >
                            Agregar al carrito
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {isCartOpen && (
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body table-container">
                  <h1 className="card-title mb-4">Carrito de compras</h1>
                  {cartItems.length === 0 && <p>No hay items en el carrito</p>}
                  {cartItems.map((item) => (
                    <Cart
                      key={item.id}
                      item={item}
                      addItemToCart={addItemToCart}
                      removeItemFromCart={removeItemFromCart}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  
  
};

export default Dashboard;
