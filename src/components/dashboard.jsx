import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./cart";
import { Offcanvas } from 'react-bootstrap';
import swal from 'sweetalert';



const Dashboard = () => {
  const [bikes, setBikes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("Se agregó la siguiente bicicleta al carrito:", item);
  };

  const removeItemFromCart = (item) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((i) => i.id === item.id);
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    console.log("Se eliminó la siguiente bicicleta del carrito:", item);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price;
    }
    return totalPrice;
  };
  const handleBuy = () => {
    // Simula un resultado aleatorio
    const isSuccessful = true;
  
    if (isSuccessful) {
      swal("¡Compra exitosa!", "", "success");
      setCartItems([]);
    } else {
      alert("Hubo un error al procesar la compra. Por favor, inténtalo de nuevo.");
    }
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
        <Offcanvas show={isCartOpen} onHide={() => setIsCartOpen(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="table-container">
            {cartItems.length === 0 && <p>No hay items en el carrito</p>}
            {cartItems.map((item) => (
              <Cart
                key={item.id}
                item={item}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
            <button className="btn btn-primary mt-3" onClick={handleBuy}>
                Comprar ({cartItems.length}) - Precio total: {calculateTotalPrice()}
              </button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
  
  
  
  
};

export default Dashboard;
