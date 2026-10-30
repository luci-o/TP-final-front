import { useState } from 'react'


const elementos = [
  {
    id: 1,
    nombre: "TV",
    precio: "$1000",
    tipo: "Electrónica",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 2,
    nombre: "Celular",
    precio: "$500",
    tipo: "Electrónica",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 3,
    nombre: "Computadora",
    precio: "$1500",
    tipo: "Electrónica",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 4,
    nombre: "Remera",
    precio: "$20",
    tipo: "Ropa",
    boton: <button>Agregar al carrito</button>
    
  },
  {
    id: 5,
    nombre: "Pantalon",
    precio: "$30",
    tipo: "Ropa",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 6,
    nombre: "Zapatillas",
    precio: "$50",
    tipo: "Ropa",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 7,
    nombre: "Tapete",
    precio: "$60",
    tipo: "Hogar",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 8,
    nombre: "Cortina",
    precio: "$40",
    tipo: "Hogar",
    boton: <button>Agregar al carrito</button>
  },
  {
    id: 9,
    nombre: "Lámpara",
    precio: "$30",
    tipo: "Hogar",
    boton: <button>Agregar al carrito</button>
  }

]

function App() {
  const [valor, setValor] = useState("")
  return (
    <div>
   <header>
      <h1>Ecomerce</h1>
      <p>Bienvenido a nuestro e-commerce, [nombre usuario]</p>
      <input type="text" placeholder="Buscar productos..." value={valor} onChange={(e) => setValor(e.target.value)} />
    </header>

      {elementos.filter((elemento) => elemento.nombre.toLowerCase().includes(valor.toLowerCase())).map((elemento) => (
        <div className="tarjeta" key={elemento.id}>
          {elemento.nombre}, {elemento.precio}, {elemento.tipo},{elemento.boton}
        </div>
      ))}
    </div>
  )
}

export default App
