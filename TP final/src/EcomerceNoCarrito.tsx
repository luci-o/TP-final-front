import { useContext } from 'react'
import { EcomerceContext, type Producto } from './context/EcomerceContext'
import './Ecomerce.css'

type Props = {
  elementos: Producto[]
  onVerTodo: () => void
  onVerCarrito: () => void
}

function EcomerceNoCarrito({ elementos, onVerTodo, onVerCarrito }: Props) {
  const context = useContext(EcomerceContext)

  if (!context) {
    return null
  }

  const { agregarAlCarrito, estaEnCarrito } = context

  return (
    <div>
      <header>
        <h1>Productos que no están en el carrito</h1>
        <button onClick={onVerTodo}>Ver todo</button>
        <button onClick={onVerCarrito}>Carrito</button>
      </header>

      <main className="productos">
        {elementos
          .filter((elemento) => !estaEnCarrito(elemento.id))
          .map((elemento) => (
            <div className="tarjeta" key={elemento.id}>
              <img src={elemento.imagen} alt={elemento.nombre} />
              <h2>{elemento.nombre}</h2>
              <p>{elemento.precio} · {elemento.tipo}</p>
              <button onClick={() => agregarAlCarrito(elemento)}>Agregar al carrito</button>
            </div>
          ))}
      </main>
    </div>
  )
}

export default EcomerceNoCarrito