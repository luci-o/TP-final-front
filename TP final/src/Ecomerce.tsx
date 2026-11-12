import { useState } from 'react'
import { useEcomerce } from './hooks/useEcomerce'
import './Ecomerce.css'
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
  const { carrito, agregarAlCarrito, eliminarDelCarrito, estaEnCarrito } = useEcomerce()
  
  return (
    <div>
   <header>
      <h1>Ecomerce</h1>
      <p>Bienvenido a nuestro e-commerce, { nombreUsuario }</p>
      <input type="text" placeholder="Buscar productos..." value={valor} onChange={(e) => setValor(e.target.value)} />
      <p>Carrito: {carrito.length}</p>
    </header>

      <main className="productos">
      {elementos.filter((elemento) => elemento.nombre.toLowerCase().includes(valor.toLowerCase())).map((elemento) => (
      <div className="tarjeta" key={elemento.id}>
        <img src={elemento.imagen} alt={elemento.nombre} />
        <h2>{elemento.nombre}</h2>
        <p>{elemento.precio} · {elemento.tipo}</p>
        <button
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