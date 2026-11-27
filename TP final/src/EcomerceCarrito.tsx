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

  const estilos = {
    header: {
      display: 'flex',
      flexDirection: 'row' as const,
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '20px',
      flexWrap: 'wrap' as const
    },
    titulo: {
      margin: 0
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
        <h1 style={estilos.titulo}>Carrito:{carrito.length}</h1>
        <div style={estilos.botonesGrupo}>
          <button style={estilos.botonVerde} onClick={onVerTodo}>Ver todo</button>
          <button style={estilos.botonVerde} onClick={onVerNoCarrito}>No carrito</button>
        </div>
      </header>

      <main className="productos">
        {carrito.map((elemento) => (
          <div className="tarjeta" key={elemento.id}>
            <img src={elemento.imagen} alt={elemento.nombre} />
            <h2>{elemento.nombre}</h2>
            <p>{elemento.precio} · {elemento.tipo}</p>
            <button style={estilos.botonVerde} onClick={() => eliminarDelCarrito(elemento.id)}>
              Sacar del carrito
            </button>
          </div>
        ))}
      </main>
    </div>
  )
}

export default EcomerceCarrito