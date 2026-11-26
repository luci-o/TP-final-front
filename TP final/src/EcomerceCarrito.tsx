type Props = {
  onVerTodo: () => void
  onVerNoCarrito: () => void
}

function EcomerceCarrito({ onVerTodo, onVerNoCarrito }: Props) {
  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={onVerTodo}>Ver todo</button>
      <button onClick={onVerNoCarrito}>Ver producto no en carrito</button>
    </div>
  )
}

export default EcomerceCarrito