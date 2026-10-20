import './App.css'

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
{ id: 3,
  nombre: "Computadora"
}
]

function App() {
  return (
    <>
      {elementos.map((elemento) => (
        <div className="tarjeta" key={elemento.id}>
          {elemento.nombre}
        </div>
      ))}
    </>
  )
}

export default App
