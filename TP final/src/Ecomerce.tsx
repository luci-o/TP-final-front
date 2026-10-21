import './Ecomerce.css'

const elementos = [
  {
    id: 1,
    nombre: "TV"
  },
  {
    id: 2,
    nombre: "Celular"
  }
,
{   id: 3,
  nombre: "Computadora"
},
{
  id: 4,
  nombre: "Tablet"
},
{
  id: 5,
  nombre: "Auriculares"
},
{
  id: 6,
  nombre: "Smartwatch"
},
{
  id: 7,
  nombre: "Consola de videojuegos"
},
{
  id: 8,
  nombre: "Cámara digital"
},
{
  id: 9,
  nombre: "Impresora"
},
{
  id: 10,
  nombre: "Router"
},
{
  id: 11,
  nombre: "Teclado"
},
{
  id: 12,
  nombre: "Mouse"
},
{
  id: 13,
  nombre: "Parlante Bluetooth"
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
          {elemento.nombre}
        </div>
      ))}
    </main>
  )
}

export default App
