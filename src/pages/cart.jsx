import { Container, Table, Button } from "react-bootstrap";
import { useState } from "react";

export default function Cart({ cart, setCart }) {
  const [confirming, setConfirming] = useState(false);

  const handleQty = (id, qty) => {
    if (qty <= 0) return setCart(cart.filter((i) => i.id !== id));
    setCart(cart.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  const confirm = () => {
    setConfirming(true);
    setTimeout(() => {
      alert("¡Pedido confirmado! Gracias por elegir Luna & Granos Café ☕");
      setCart([]);
      setConfirming(false);
    }, 700);
  };

  return (
    <Container>
      <h2 className="mb-3">Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.qty}
                      min="1"
                      className="form-control w-50"
                      onChange={(e) =>
                        handleQty(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>${item.price * item.qty}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() =>
                        setCart(cart.filter((i) => i.id !== item.id))
                      }
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4>Total: ${total}</h4>
          <Button variant="danger" className="me-2" onClick={() => setCart([])}>
            Vaciar Carrito
          </Button>
          <Button variant="success" onClick={confirm} disabled={confirming}>
            {confirming ? "Confirmando..." : "Confirmar Pedido"}
          </Button>
        </>
      )}
    </Container>
  );
}