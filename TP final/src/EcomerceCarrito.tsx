import { useContext } from 'react'
import { EcomerceContext } from './context/EcomerceContext'
import './Ecomerce.css'

type Props = {
  onVerTodo: () => void
  onVerNoCarrito: () => void
}

function EcomerceCarrito({ onVerTodo, onVerNoCarrito }: Props) {
  const context = useContext(EcomerceContext)

  if (!context) {
    return null
  }

  const { carrito, eliminarDelCarrito } = context

  return (
    <div>
      <header>
        <h1>Carrito:{carrito.length}</h1>
        <button onClick={onVerTodo}>Ver todo</button>
        <button onClick={onVerNoCarrito}>Ver producto no en carrito</button>
      </header>

      <main className="productos">
        {carrito.map((elemento) => (
          <div className="tarjeta" key={elemento.id}>
            <img src={elemento.imagen} alt={elemento.nombre} />
            <h2>{elemento.nombre}</h2>
            <p>{elemento.precio} · {elemento.tipo}</p>
            <button onClick={() => eliminarDelCarrito(elemento.id)}>Sacar del carrito</button>
          </div>
        ))}
      </main>
    </div>
  )
}

export default EcomerceCarrito