const elementos = [
  {
    id: 1,
    nombre: "TV",
    precio: "$1000",
    tipo: "Electrónica"
  },
  {
    id: 2,
    nombre: "Celular",
    precio: "$500",
    tipo: "Electrónica"
  },
  {
    id: 3,
    nombre: "Computadora",
    precio: "$1500",
    tipo: "Electrónica"
  },
  {
    id: 4,
    nombre: "Remera",
    precio: "$20",
    tipo: "Ropa"
  },
  {
    id: 5,
    nombre: "Pantalon",
    precio: "$30",
    tipo: "Ropa"
  },
  {
    id: 6,
    nombre: "Zapatillas",
    precio: "$50",
    tipo: "Ropa"
  },
  {
    id: 7,
    nombre: "Tapete",
    precio: "$60",
    tipo: "Hogar"
  },
  {
    id: 8,
    nombre: "Cortina",
    precio: "$40",
    tipo: "Hogar"
  },
  {
    id: 9,
    nombre: "Lámpara",
    precio: "$30",
    tipo: "Hogar"
  }

]

function App() {
  return (
    <main>
   <header>
      <h1>Ecomerce</h1>
    </header>

      {elementos.map((elemento) => (
        <div className="tarjeta" key={elemento.id}>
          {elemento.nombre}, {elemento.precio}, {elemento.tipo}
        </div>
      ))}
    </main>
  )
}

export default App
