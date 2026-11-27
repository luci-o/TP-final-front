import { useState } from 'react'
import { useEcomerce } from './hooks/useEcomerce'
import './Ecomerce.css'
import EcomerceCarrito from './EcomerceCarrito'
import EcomerceNoCarrito from './EcomerceNoCarrito'
import compuImage from './assets/Compu.jpeg'
import cortinaImage from './assets/Cortina.jpeg'
import lamparaImage from './assets/Lámpara.jpeg'
import pantalonImage from './assets/Pantalon.jpeg'
import tvImage from './assets/TV.jpeg'
import tapeteImage from './assets/Tapete.jpeg'
import zapatillasImage from './assets/Zapatillas.jpeg'
import imagesImage from './assets/images.jpeg'
import remeraImage from './assets/remera.jpeg'

const elementos = [
  {
    id: 1,
    nombre: "TV",
    precio: "$1000",
    tipo: "Electrónica",
    imagen: tvImage,
  },
  {
    id: 2,
    nombre: "Celular",
    precio: "$500",
    tipo: "Electrónica",
    imagen: imagesImage,
  },
  {
    id: 3,
    nombre: "Computadora",
    precio: "$1500",
    tipo: "Electrónica",
    imagen: compuImage,
  },
  {
    id: 4,
    nombre: "Remera",
    precio: "$20",
    tipo: "Ropa",
    imagen: remeraImage,
  },
  {
    id: 5,
    nombre: "Pantalon",
    precio: "$30",
    tipo: "Ropa",
    imagen: pantalonImage,
  },
  {
    id: 6,
    nombre: "Zapatillas",
    precio: "$50",
    tipo: "Ropa",
    imagen: zapatillasImage,
  },
  {
    id: 7,
    nombre: "Tapete",
    precio: "$60",
    tipo: "Hogar",
    imagen: tapeteImage,
  },
  {
    id: 8,
    nombre: "Cortina",
    precio: "$40",
    tipo: "Hogar",
    imagen: cortinaImage,
  },
  {
    id: 9,
    nombre: "Lámpara",
    precio: "$30",
    tipo: "Hogar",
    imagen: lamparaImage,
  }
]

function App({ nombreUsuario }) {
  const [valor, setValor] = useState("")
  const [pantalla, setPantalla] = useState<"productos" | "carrito" | "noCarrito">("productos")
  const { carrito, agregarAlCarrito, eliminarDelCarrito, estaEnCarrito } = useEcomerce()

  if (pantalla === "carrito") {
    return (
      <EcomerceCarrito
        onVerTodo={() => setPantalla("productos")}
        onVerNoCarrito={() => setPantalla("noCarrito")}
      />
    )
  }

  if (pantalla === "noCarrito") {
    return (
      <EcomerceNoCarrito
        elementos={elementos}
        onVerTodo={() => setPantalla("productos")}
        onVerCarrito={() => setPantalla("carrito")}
      />
    )
  }

  // Estilos en línea para el rediseño sin alterar tu lógica ni tu Ecomerce.css
  const estilos = {
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    },
    titulo: {
      margin: '0 0 10px 0'
    },
    bienvenida: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0 0 20px 0'
    },
    barraAcciones: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '100%',
      maxWidth: '750px',
      flexWrap: 'wrap',
      marginBottom: '10px'
    },
    buscador: {
      flex: 1,
      minWidth: '220px',
      padding: '12px 18px',
      borderRadius: '25px',
      border: '1px solid #cccccc',
      fontSize: '15px',
      outline: 'none'
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
    },
    contadorCarrito: {
      margin: '8px 0 0 0',
      fontWeight: 'bold'
    }
  }

  return (
    <div>
      <header style={estilos.header}>
        <h1 style={estilos.titulo}>Ecomerce</h1>
        <p style={estilos.bienvenida}>Bienvenido a nuestro e-commerce, {nombreUsuario}</p>
        
        <div style={estilos.barraAcciones}>
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
            style={estilos.buscador}
          />
          <button style={estilos.botonVerde} onClick={() => setPantalla("carrito")}>
            Ver carrito
          </button>
          <button style={estilos.botonVerde} onClick={() => setPantalla("noCarrito")}>
            No carrito
          </button>
        </div>

        <p style={estilos.contadorCarrito}>Carrito: {carrito.length}</p>
      </header>

      <main className="productos">
        {elementos.filter((elemento) => elemento.nombre.toLowerCase().includes(valor.toLowerCase())).map((elemento) => (
          <div className="tarjeta" key={elemento.id}>
            <img src={elemento.imagen} alt={elemento.nombre} />
            <h2>{elemento.nombre}</h2>
            <p>{elemento.precio} · {elemento.tipo}</p>
            <button
              style={estilos.botonVerde}
              onClick={() =>
                estaEnCarrito(elemento.id)
                  ? eliminarDelCarrito(elemento.id)
                  : agregarAlCarrito(elemento)
              }
            >
              {estaEnCarrito(elemento.id) ? "Sacar del carrito" : "Agregar al carrito"}
            </button>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App