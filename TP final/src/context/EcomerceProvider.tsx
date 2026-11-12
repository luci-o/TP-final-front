import { useState, type ReactNode } from 'react'
import { EcomerceContext, type Producto } from './EcomerceContext'

export function EcomerceProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Producto[]>([])

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto])
  }

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id))
  }

  const estaEnCarrito = (id: number) => carrito.some((p) => p.id === id)

  return (
    <EcomerceContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, estaEnCarrito }}
    >
      {children}
    </EcomerceContext.Provider>
  )
}