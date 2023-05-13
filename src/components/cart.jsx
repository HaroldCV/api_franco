const Cart = ({ item, removeItemFromCart }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.image} className="card-img" alt={item.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Precio: {item.price}</p>
            <button className="btn btn-danger" onClick={() => removeItemFromCart(item)}>
              Quitar del carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
