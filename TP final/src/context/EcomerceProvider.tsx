import { useState, type ReactNode } from 'react'
import { EcomerceContext, type Producto } from './EcomerceContext'

interface EcomerceProviderProps {
  children: ReactNode
}

export function EcomerceProvider({ children }: EcomerceProviderProps) {
  const [carrito, setCarrito] = useState<Producto[]>([])
  const agregarAlCarrito = (producto: Producto) => {
    if (!estaEnCarrito(producto.id)) {
      setCarrito((prev) => [...prev, producto])
    }
  }

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }
  const estaEnCarrito = (id: number) => {
    return carrito.some((item) => item.id === id)
  }

  return (
    <EcomerceContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        estaEnCarrito,
      }}
    >
      {children}
    </EcomerceContext.Provider>
  )
}