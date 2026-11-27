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

  const estilos = {
    header: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center' as const
    },
    titulo: {
      margin: '0 0 15px 0'
    },
    botonesGrupo: {
      display: 'flex',
      flexDirection: 'row' as const,
      gap: '12px'
    },
    botonVerde: {
      backgroundColor: '#2ecc71',
      color: '#000000',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 20px',
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }

  return (
    <div>
      <header style={estilos.header}>
        <h1 style={estilos.titulo}>Productos que no están en el carrito</h1>
        <div style={estilos.botonesGrupo}>
          <button style={estilos.botonVerde} onClick={onVerTodo}>Ver todo</button>
          <button style={estilos.botonVerde} onClick={onVerCarrito}>Carrito</button>
        </div>
      </header>

      <main className="productos">
        {elementos
          .filter((elemento) => !estaEnCarrito(elemento.id))
          .map((elemento) => (
            <div className="tarjeta" key={elemento.id}>
              <img src={elemento.imagen} alt={elemento.nombre} />
              <h2>{elemento.nombre}</h2>
              <p>{elemento.precio} · {elemento.tipo}</p>
              <button style={estilos.botonVerde} onClick={() => agregarAlCarrito(elemento)}>
                Agregar al carrito
              </button>
            </div>
          ))}
      </main>
    </div>
  )
}

export default EcomerceNoCarrito