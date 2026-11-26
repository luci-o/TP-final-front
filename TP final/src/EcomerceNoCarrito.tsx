type Props = {
  onVerTodo: () => void
  onVerCarrito: () => void
}

function EcomerceNoCarrito({ onVerTodo, onVerCarrito }: Props) {
  return (
    <div>
      <h1>Productos que no están en el carrito</h1>
      <button onClick={onVerTodo}>Ver todo</button>
      <button onClick={onVerCarrito}>Carrito</button>
    </div>
  )
}

export default EcomerceNoCarrito